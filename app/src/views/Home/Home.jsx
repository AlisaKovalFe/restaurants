import React, { useState, useEffect } from 'react';
import styles from './home.module.scss'
import { Typography } from 'antd';
import Gallery from '../../components/Gallery/Gallery';
import Error from '../../components/Error/Error'
const { Title, Paragraph } = Typography;


function Home() {
    const [ gallery, setGallery ] = useState([])
    const [ statusOfResponse, setStatusOfResponse] = useState(200)
    const [ messageOfResponse, setMessageOfResponse] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/')
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else if (res.status === 404) {
                    setStatusOfResponse(404) 
                    setMessageOfResponse('Извините, данная страница не существует')    
                } else if (res.status === 500) {
                    setStatusOfResponse(500)    
                    setMessageOfResponse('Извините, ошибка на стороне сервера')
                }
                
            })
            .then((res) => setGallery(res))
    }, [])

    return (
            statusOfResponse === 200 ? (
                <section className={styles.wrapper}>
                    <div className={styles.description}>
                        <Title>Ресто Гид</Title>
                        <Title level={2}>О проекте</Title>
                        <Paragraph className={styles.description__text}>
                            У Москвы есть образ модного совремееного города, что немудрено — это все же столица. Здесь каждую неделю открываются новые интересные места и заведения. Для того, чтобы разобраться во всем этом многообразии создан Ресто гид.
                        </Paragraph>

                        <Paragraph className={styles.description__text}>
                            Ресто Гид - современный путеводитель по ресторанному миру Москвы. На этом русскоязычном портале собраны рекомендации лучших модных ресторанов города. Рекомендации составлены на основе мнений экспертов индустрии, которые, с одной стороны, давно живут в Москве и знают ее изнутри, а с другой – не теряют связи с родиной и знают, что именно может заинтересовать гостей из России. 
                        </Paragraph>   
                    </div>
                    <div className={styles.gallery}><Gallery gallery={gallery}/></div>          
                </section>
            ) : ( statusOfResponse === 404) ? (
                    <Error statusOfResponse={statusOfResponse} messageOfResponse={messageOfResponse}/>
                ) : ( statusOfResponse === 500 ) ? (
                    <Error statusOfResponse={statusOfResponse} messageOfResponse={messageOfResponse}/>
                ) : ''
             
    );
}

export default Home;