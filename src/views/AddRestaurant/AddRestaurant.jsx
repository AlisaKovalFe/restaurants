import React, { useContext, useState } from 'react';
import styles from './addRestaurant.module.scss'
import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';
import { globalContext } from '../../context/globalContext';
import { useNavigate } from 'react-router-dom'
import { YMaps, Map, GeolocationControl, SearchControl, RouteButton, Placemark} from '@pbe/react-yandex-maps';
import { optionsOfIcon } from '../../data/restaurants'
const { Title } = Typography;

function AddRestaurant(props) {
    const { dispatch } = useContext(globalContext)
    const [form] = Form.useForm();
    let [ title, setTitle ] = useState('')
    const [ image, setImage ] = useState('https://api.interior.ru/media/images/DESIGN/Modnoe%20Mesto/Russki_restaurant/cover_RUSKI_interior_5.jpg')
    const [ description, setDescription ] = useState('')
    const [ phone, setPhone ] = useState('')
    const navigate = useNavigate()
    const [ coordinates, setCoordinates ] = useState()

    console.log(coordinates)

    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
    const validateMessages = {
        required: "Введите ${name}",
    }
    const regExpForPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

    function handleSubmit() {
        if (regExp.test(title.trim()) && regExp.test(description.trim()) && regExpForPhone.test(phone.trim())) {
            dispatch({
                type: 'ADD_RESTAURANT',
                payload: {
                    id: Date.now(),
                    title: title,
                    cover: {
                        src: image,
                        alt: title,
                    },
                    description: description,
                    features: {
                        type: "Feature",
                        id: title,
                        geometry: {
                            type: "Point",
                            coordinates: coordinates
                        },
                        properties: {
                            balloonContent: 
                                        `
                                        <div class="balloon balloon_small">
                                            <h5 class="balloon__heading">${title}</h5>
                                            <img class="balloon__image balloon__image_big" src=${image} alt=${title}/>
                                            <div>
                                                <a class="map-link" href="tel:${phone}">${phone}</a>
                                            </div>
                                        </div>
                                        `,             
                            hintContent: `
                                        <div class="hint">
                                            <h5 class="hint__heading">${title}</h5>
                                            <img class="hint__image" src=${image} alt=${title}/>
                                            <div>
                                                <a class="map-link" href="tel:${phone}">${phone}</a>
                                            </div>
                                        </div>
                                        `,  
                        },
                        options: optionsOfIcon,
                    }
                }
            })
            navigate('/restaurants')
        } 
    }
    
    return (
        <section className={styles.wrapper}>
            <Title level={2}>Добавь свой ресторан</Title>

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
                        onClick={(e) => {
                            setCoordinates(e.get('coords'))
                            console.log(e.originalEvent)
                        }}
                        
                    >
                        <Placemark
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                            geometry={coordinates}    
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
                    onFinish={handleSubmit}
                    className={styles.form}
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"   
                    validateMessages={validateMessages}             
                >

                    <Form.Item
                        name='название'
                        label="Название"                   
                        hasFeedback
                        className={styles.form__item}
                        rules={[
                            { 
                                required: true, 
                                message: validateMessages.required,
                                pattern: title.trim() ? null : regExp
                            }]}
                    
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
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                            />
                    </Form.Item>

                    <Form.Item
                        label="Описание"
                        name="описание"
                        hasFeedback
                        tooltip="Опишите свои впечатления"
                        className={styles.form__item}
                        rules={[
                            { 
                                required: true, 
                                message: validateMessages.required,
                                pattern: description.trim() ? null : regExp
                            }]}
                        >
                        <Input 
                            placeholder='описание'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Телефон"
                        name="телефон"
                        hasFeedback
                        className={styles.form__item}
                        rules={[
                            {
                                required: true, 
                                message: validateMessages.required, 
                                pattern: phone.trim() ? null : regExpForPhone 
                            }]}
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
    );
}

export default AddRestaurant;


