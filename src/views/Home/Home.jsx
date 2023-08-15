import React from 'react';
import styles from './home.module.scss'
import { Typography } from 'antd';
import Gallery from '../../components/Gallery/Gallery';
const { Title, Paragraph } = Typography;

function Home(props) {
    return (
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

            <div className={styles.gallery}><Gallery/></div>           
        </section>
    );
}

export default Home;