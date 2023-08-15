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
    const [ newImage, setNewImage ] = useState(currentRestaurant.cover.src)
    const [ newDescription, setNewDescription ] = useState(currentRestaurant.description)
    const [ newLocation, setNewLocation ] = useState(currentRestaurant.location)

    function handleSubmit() {
        dispatch({
            type: 'EDIT_RESTAURANT',
            payload: {
                id: +id, 
                cover: {
                    src: newImage,
                },
                description: newDescription,
                location: newLocation
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
                    onFinish={handleSubmit}
                    className={styles.form}
                    // name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"                
                >

                    <Form.Item
                        name="Фото"
                        label="Фото"
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
                        >
                        <Input 
                            placeholder='локация'
                            onChange={(e) => setNewLocation(e.target.value)}
                            value={newLocation}
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