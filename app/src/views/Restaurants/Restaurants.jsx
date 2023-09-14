import React, { useContext, useState } from 'react';
import styles from './restaurants.module.scss'
import { Typography, notification } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Error from '../../components/Error/Error'
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import { globalContext } from '../../context/globalContext';
const { Title, Paragraph } = Typography;
const { Meta } = Card;

function Restaurants() {
    const { state, dispatch } = useContext(globalContext)
    const [ statusOfResponse, setStatusOfResponse] = useState(200)
    const [ messageOfResponse, setMessageOfResponse] = useState('')

    async function handeleDelete(id) {

        const response = await fetch(`http://localhost:4000/restaurants/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
        if (response.status === 200) {
            dispatch({
                type: 'DELETE_RESTAURANT',
                payload: {
                    id: +id
                }
            })
            notification.open({
                message: 'Отлично!',
                description: 'Вы успешно удалили ресторан'
            }) 
        } else if (response.status === 404) { 
            setStatusOfResponse(404) 
            setMessageOfResponse('Извините, данная страница не существует')        

        } else if (response.status === 500) {
            setStatusOfResponse(500)    
            setMessageOfResponse('Извините, ошибка на стороне сервера')
        }
    }

    return (
        statusOfResponse === 200 ? (
            <section className={styles.wrapper}>
                <Title level={2}>Рестораны</Title>
                <div className={styles.restaurants}>
                    {
                        state.list.map((el) => (
                            <Card 
                                key={el.id}
                                className={styles.restaurant}
                                cover={<img alt={el.cover.alt} src={el.cover.src} className={styles.restaurant__image}/>}
                                actions={[
                                    <Link to={`/restaurants/restaurant-edit/${el.id}`}>
                                        <EditOutlined key="edit" />
                                    </Link>,
                                    <DeleteOutlined key="delete" onClick={()=> handeleDelete(el.id)}/>,
                                    <Link to={`/restaurants/restaurant-map/${el.id}`}>
                                        <PlusCircleOutlined key="map"/>
                                    </Link>
                                ]}
                                
                            >
                                <Meta
                                    className={styles.restaurant__description}
                                    title={el.title}
                                    description={el.description}
                                />
                                <Paragraph className={styles.restaurant__adress} disabled>{el.location}</Paragraph>
                            </Card>
                        ))
                    } 
                </div>
            </section>
        ) : ( statusOfResponse === 404) ? (
            <Error statusOfResponse={statusOfResponse} messageOfResponse={messageOfResponse}/>
        ) : ( statusOfResponse === 500 ) ? (
            <Error statusOfResponse={statusOfResponse} messageOfResponse={messageOfResponse}/>
        ) : ''
        
    );
}

export default Restaurants;