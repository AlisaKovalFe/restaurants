import React, { useContext, useState } from 'react';
import styles from './addRestaurant.module.scss'
import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';
import { globalContext } from '../../context/globalContext';
import { useNavigate } from 'react-router-dom'
const { Title } = Typography;

function AddRestaurant(props) {
    const { dispatch } = useContext(globalContext)
    const [form] = Form.useForm();
    let [ title, setTitle ] = useState('')
    const [ image, setImage ] = useState('https://novate.ru/files/u9180/farma_02.jpg')
    const [ description, setDescription ] = useState('')
    const [ location, setLocation ] = useState('')
    const navigate = useNavigate()

    const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
    const validateMessages = {
        required: "Введите ${name}",
    }

    function handleSubmit() {
        if (regExp.test(title.trim()) && regExp.test(description.trim()) && regExp.test(location.trim()) ) {
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
                    location: location
                }
            })
            navigate('/restaurants')
        } 
    }
    
    return (
        <section className={styles.wrapper}>
            <Title level={2}>Добавь свой ресторан</Title>
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
                    label="Локация"
                    name="локацию"
                    hasFeedback
                    className={styles.form__item}
                    rules={[
                        {
                            required: true, 
                            message: validateMessages.required, 
                            pattern: location.trim() ? null : regExp 
                        }]}
                    >
                    <Input 
                        placeholder='локация'
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
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
        </section>
    );
}

export default AddRestaurant;


