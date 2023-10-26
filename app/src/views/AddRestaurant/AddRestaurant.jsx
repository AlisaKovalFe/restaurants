import React, { useContext, useState } from 'react';
import styles from './addRestaurant.module.scss'
import { Button, Form, Input, notification } from 'antd';
import Error from '../../components/Error/Error'
import { Typography } from 'antd';
import HelpToolTip from '../../components/HelpToolTip/HelpToolTip'
import { globalContext } from '../../context/globalContext';
import { useNavigate } from 'react-router-dom'
import { YMaps, Map, GeolocationControl, SearchControl, RouteButton, Placemark } from '@pbe/react-yandex-maps';
import axios from 'axios'
const { Title } = Typography;

function AddRestaurant() {
    const { dispatch } = useContext(globalContext)
    const [form] = Form.useForm();
    const [ title, setTitle ] = useState('')
    const [ image, setImage ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ coordinates, setCoordinates ] = useState()
    const navigate = useNavigate()

    const [ statusOfResponse, setStatusOfResponse] = useState(200)
    const [ messageOfResponse, setMessageOfResponse] = useState('')

    async function handleSubmit() {

        const newRestaurant = {
            id: Date.now(),
            title: title.trim(),
            cover: {
                src: image.trim(),
                alt: title.trim(),
            },
            description: description.trim(),
            location: location.trim(),
            features: {
                type: "Feature",
                id: title.trim(),
                geometry: {
                    type: "Point",
                    coordinates: coordinates
                },
                properties: {
                    balloonContent: 
                                `
                                <div class="balloon balloon_small">
                                    <h5 class="balloon__heading">${title.trim()}</h5>
                                    <img class="balloon__image balloon__image_big" src=${image.trim()} alt=${title.trim()}/>
                                    <div>
                                        <a class="map-link" href="tel:${phone.trim()}">${phone.trim()}</a>
                                    </div>
                                </div>
                                `,             
                    hintContent: `
                                <div class="hint">
                                    <h5 class="hint__heading">${title.trim()}</h5>
                                    <img class="hint__image" src=${image.trim()} alt=${title.trim()}/>
                                    <div>
                                        <a class="map-link" href="tel:${phone.trim()}">${phone.trim()}</a>
                                    </div>
                                </div>
                                `,  
                },
                options: {
                    iconLayout: "default#image",
                    iconImageHref: "https://img.icons8.com/?size=512&id=63653&format=png",
                    iconImageSize: [40, 40],
                    iconImageOffset: [-10, -10],                            
                    balloonCloseButton: true,
                },
            }
        }

        axios.post('http://localhost:4000/restaurants', newRestaurant)
            .then((response) => {             
                if (response.status === 200) {
                    if (title && image && description && location && phone) {
                        dispatch({
                            type: 'ADD_RESTAURANT', 
                            payload: newRestaurant
                        })
                        notification.open({
                            message: 'Отлично!',
                            description: 'Вы успешно добавили ресторан'
                        })   
                        setTimeout(() => {
                            navigate('/restaurants')
                        }, 3000)
                    }            
                }        
            })
            .catch((err) => {
                if (err.response.status === 404) { 
                    setStatusOfResponse(404) 
                    setMessageOfResponse('Извините, данная страница не существует')              
                } else if (err.response.status === 500) {
                    setStatusOfResponse(500)    
                    setMessageOfResponse('Извините, ошибка на стороне сервера')
                } else if (err.response.status === 401) {
                    notification.open({
                        message: err.response.data
                    })
                }
            })
    }
    
    return (
        statusOfResponse === 200 ? (
                <section className={styles.wrapper}>
                    <div className={styles.intro}>
                        <Title level={2} className={styles.heading}>Добавь свой ресторан</Title>
                        <HelpToolTip color='geekblue' title="отметь ресторан на карте"/>
                    </div>

                    <div className={styles.data}>
                        <YMaps>
                            <Map
                                className={styles.map}
                                defaultState={{
                                center: [55.755246, 37.617779],
                                zoom: 12,
                                controls: ["zoomControl", "fullscreenControl"],
                                behaviors: ["drag", "dblClickZoom"]
                                }}
                                modules={["control.ZoomControl", "control.FullscreenControl"]}
                                options={{
                                    dragCursor:  'pointer'
                                }}
                                onClick={(e) => setCoordinates(e.get('coords'))}
                                
                            >
                                <Placemark
                                    modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                                    geometry={coordinates}    
                                    options={{
                                        iconLayout: "default#image",
                                        iconImageHref: "https://img.icons8.com/?size=512&id=63653&format=png",
                                        iconImageSize: [40, 40],
                                        iconImageOffset: [-10, -10],                            
                                        balloonCloseButton: true,
                                    }}                    
                                />
                                <GeolocationControl 
                                        options={{ float: "left" }}
                                        data={{title: 'это ты'}}
                                />
                                <RouteButton options={{ float: "right"}}/>
                                <SearchControl options={{ float: "right", provider: 'yandex#search', placeholderContent: 'найти ресторан'}}/>
                            </Map>
                        </YMaps>  

                        <Form 
                            form={form}
                            onFinish={handleSubmit}
                            className={styles.form}
                            labelCol={{span: 8}}
                            wrapperCol={{span: 16}}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="on"            
                        >

                            <Form.Item
                                name='название'
                                label="Название"                   
                                className={styles.form__item}
                            >
                                <Input 
                                    placeholder="Название" 
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </Form.Item>
                            
                            <Form.Item
                                name="Фото"
                                label="Фото"
                                className={styles.form__item}
                            >
                                <Input 
                                    placeholder="url фото" 
                                    onChange={(e) => setImage(e.target.value)}
                                    value={image}
                                    />
                            </Form.Item>

                            <Form.Item
                                label="Описание"
                                name="описание"
                                tooltip="Опишите свои впечатления"
                                className={styles.form__item}
                                >
                                <Input 
                                    placeholder='описание'
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Локация"
                                name="локация"
                                className={styles.form__item}
                                >
                                <Input 
                                    placeholder='адрес'
                                    onChange={(e) => setLocation(e.target.value)}
                                    value={location}
                                    />
                            </Form.Item>

                            <Form.Item
                                label="Телефон"
                                name="телефон"
                                className={styles.form__item}
                                >
                                <Input 
                                    placeholder='телефон'
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 11,
                                    span: 16,
                                }}
                            >
                                <Button 
                                    type="primary" 
                                    htmlType="submit">
                                    Сохранить
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>  
                </section>
            ) : ( statusOfResponse === 404) ? (
                <Error statusOfResponse={statusOfResponse} messageOfResponse={messageOfResponse}/>
            ) : ( statusOfResponse === 500 ) ? (
                <Error statusOfResponse={statusOfResponse} messageOfResponse={messageOfResponse}/>
            ) : ''
        
    );
}

export default AddRestaurant;


