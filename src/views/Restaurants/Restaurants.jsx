import React, { useContext } from 'react';
import styles from './restaurants.module.scss'
import { Typography } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import { globalContext } from '../../context/globalContext';
const { Title, Paragraph } = Typography;
const { Meta } = Card;

function Restaurants() {
    const { state, dispatch } = useContext(globalContext)
    console.log(state)

    function handeleDelete(id) {
        dispatch({
            type: 'DELETE_RESTAURANT',
            payload: {
                id: id
            }
        })
    }

    return (
        <section className={styles.wrapper}>
            <Title level={2}>Рестораны</Title>
            <div className={styles.restaurants}>
                {
                    state.map((el) => (
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
                            <Paragraph className={styles.restaurant__adress} disabled>{el.features.geometry.coordinates}</Paragraph>
                        </Card>
                    ))
                } 
            </div>
        </section>
    );
}

export default Restaurants;