import React from 'react';
import styles from './edit.module.scss'
import { Button, Form, Input, notification } from 'antd';
import { useContext, useState } from 'react';
import { YMaps, Map, GeolocationControl, SearchControl, RouteButton, Placemark} from '@pbe/react-yandex-maps';
import Error from '../../components/Error/Error'
import { globalContext } from '../../context/globalContext'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography } from 'antd';
import { Card } from 'antd';
import { optionsOfIcon } from '../../data/restaurants'
const { Meta } = Card;
const { Title, Paragraph } = Typography;


function Edit() {
    const { state, dispatch } = useContext(globalContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const currentRestaurant = state.list.find((el) => el.id === +id)
    let initialNewPhone = currentRestaurant.features.properties.balloonContent.replace(/[^0-9]/g,"").substr(-11, 11)

    const [ newImage, setNewImage ] = useState(currentRestaurant.cover.src)
    const [ newDescription, setNewDescription ] = useState(currentRestaurant.description)
    const [ newLocation, setNewLocation ] = useState(currentRestaurant.location)
    const [ newCoordinates, setNewCoordinates ] = useState(currentRestaurant.features.geometry.coordinates)
    const [ newPhone, setNewPhone ] = useState(initialNewPhone)
    const [ statusOfResponse, setStatusOfResponse] = useState(200)
    const [ messageOfResponse, setMessageOfResponse] = useState('')

    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
    const validateMessages = {
        required: "Введите ${name}",
    }
    const regExpForPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

    async function handleSubmit() {
    
        const editedRestaurant = {
            id: +id, 
            cover: {
                src: newImage,
            },
            description: newDescription,
            coordinates: newCoordinates,
            location: newLocation,
            balloonContent: 
                            `
                            <div class="balloon balloon_small">
                                <h5 class="balloon__heading">${currentRestaurant.title}</h5>
                                <img class="balloon__image balloon__image_big" src=${newImage} alt=${currentRestaurant.title}/>
                                <div>
                                    <a class="map-link" href="tel:${newPhone}">${newPhone}</a>
                                </div>
                            </div>
                            `,   
            hintContent: 
                        `
                        <div class="hint">
                            <h5 class="hint__heading">${currentRestaurant.title}</h5>
                            <img class="hint__image" src=${newImage} alt=${currentRestaurant.title}/>
                            <div>
                                <a class="map-link" href="tel:${newPhone}">${newPhone}</a>
                            </div>
                        </div>
                        `,  
        }

        const response = await fetch(`http://localhost:4000/restaurants/restaurant-edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(editedRestaurant)
        })

        if (response.status === 200) {
            if (regExp.test(newDescription.trim()) && regExp.test(newLocation.trim()) && regExpForPhone.test(newPhone.trim())) {
                dispatch({
                    type: 'EDIT_RESTAURANT',
                    payload: editedRestaurant
                })
                notification.open({
                    message: 'Отлично!',
                    description: 'Вы успешно отредактировали ресторан'
                })   
                setTimeout(() => {
                    navigate('/restaurants')
                }, 3000)
            }
        } else if (response.status === 404) { 
            setStatusOfResponse(404) 
            setMessageOfResponse('Извините, данная страница не существует')        
            // navigate('/error')

        } else if (response.status === 500) {
            setStatusOfResponse(500)    
            setMessageOfResponse('Извините, ошибка на стороне сервера')
            // navigate('/error')
        }
        
    }

    return (
        statusOfResponse === 200 ? (
            <section className={styles.wrapper}>
                <div className={styles.intro}>
                    <Title level={2} className={styles.heading}>Отредактируй профиль ресторана</Title>

                    <Card 
                        key={currentRestaurant.id}
                        className={styles.restaurant}
                        cover={<img alt={currentRestaurant.cover.alt} src={currentRestaurant.cover.src} className={styles.restaurant__image}/>}
                    >
                        <Meta
                            className={styles.restaurant__description}
                            title={currentRestaurant.title}
                            description={currentRestaurant.description}
                            location={currentRestaurant.location}
                        />
                        <Paragraph disabled>{currentRestaurant.location}</Paragraph>
                    </Card>
                </div>

                <div className={styles.edit}>              
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
                            onClick={(e) => setNewCoordinates(e.get('coords'))}
                        >
                            <Placemark
                                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                                geometry={newCoordinates}    
                                options={optionsOfIcon}                    
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
                        name="basic"
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
                            name="Фото"
                            label="Фото"
                            initialValue={newImage}
                            rules={[
                                {
                                    required: false,
                                },
                                {
                                    type: 'url',
                                    warningOnly: true,
                                },
                                {
                                    type: 'string',
                                    min: 6,
                                },
                            ]}
                        >
                            <Input 
                                placeholder="url фото" 
                                onChange={(e) => setNewImage(e.target.value)}
                                value={newImage}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Описание"
                            name="Описание"
                            hasFeedback
                            initialValue={newDescription}
                            rules={[
                                { 
                                    required: true, 
                                    message: validateMessages.required,
                                    pattern: newDescription.trim() ? null : regExp
                                }]}
                            >
                            <Input 
                                placeholder='описание'
                                onChange={(e) => setNewDescription(e.target.value)}
                                value={newDescription}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Локация"
                            name="локация"
                            hasFeedback
                            initialValue={newLocation}
                            rules={[
                                {
                                    required: true, 
                                    message: validateMessages.required, 
                                    pattern: newLocation.trim() ? null : regExp 
                                }]}
                            >
                            <Input 
                                placeholder='адрес'
                                onChange={(e) => setNewLocation(e.target.value)}
                                value={newLocation}
                                />
                        </Form.Item>

                        <Form.Item
                            label="Телефон"
                            name="телефон"
                            hasFeedback
                            initialValue={newPhone}
                            rules={[
                                {
                                    required: true, 
                                    message: validateMessages.required, 
                                    pattern: newPhone.trim() ? null : regExpForPhone 
                                }]}
                            >
                            <Input 
                                placeholder='Телефон'
                                onChange={(e) => setNewPhone(e.target.value)}
                                value={newPhone}
                                />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
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

export default Edit;