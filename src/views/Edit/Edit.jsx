import React from 'react';
import styles from './edit.module.scss'
import { Button, Form, Input } from 'antd';
import { useContext, useState } from 'react';
import { globalContext } from '../../context/globalContext'
import { useParams, useNavigate } from 'react-router-dom'
import { Typography } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
const { Title, Paragraph } = Typography;


function Edit() {
    const { state, dispatch } = useContext(globalContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const currentRestaurant = state.find((el) => el.id === +id)
    let initialNewPhone = currentRestaurant.features.properties.balloonContent.replace(/[^0-9]/g,"").substr(-11, 11)

    const [ newImage, setNewImage ] = useState(currentRestaurant.cover.src)
    const [ newDescription, setNewDescription ] = useState(currentRestaurant.description)
    const [ newCoordinates, setNewCoordinates ] = useState(currentRestaurant.features.geometry.coordinates)
    const [newPhone, setNewPhone] = useState(initialNewPhone)

    function handleSubmit() {
        dispatch({
            type: 'EDIT_RESTAURANT',
            payload: {
                id: +id, 
                cover: {
                    src: newImage,
                },
                description: newDescription,
                coordinates: newCoordinates,
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
        })
        navigate('/restaurants')
    }

    return (
        <section className={styles.wrapper}>
            <Title level={2}>Отредактируй профиль ресторана</Title>

            <div className={styles.profile}>              
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
                    // autoComplete="off"                
                >

                    <Form.Item
                        name="Фото"
                        label="Фото"
                        initialValue={newImage}
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
                        initialValue={newDescription}
                        >
                        <Input 
                            placeholder='описание'
                            onChange={(e) => setNewDescription(e.target.value)}
                            value={newDescription}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Локация"
                        name="Локация"
                        initialValue={newCoordinates}
                        >
                        <Input 
                            placeholder='локация'
                            onChange={(e) => setNewCoordinates(e.target.value)}
                            value={newCoordinates}
                            />
                    </Form.Item>

                    <Form.Item
                        label="Телефон"
                        name="телефон"
                        initialValue={newPhone}
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
    );
}

export default Edit;