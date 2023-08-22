import React, { useContext } from 'react';
import styles from './torestaurantmap.module.scss'
import { useParams } from 'react-router-dom'
import { globalContext } from '../../context/globalContext';
import { Typography } from 'antd';
import { YMaps, Map, GeolocationControl, SearchControl, RouteButton, Placemark} from '@pbe/react-yandex-maps';
import { Card } from 'antd';
const { Meta } = Card;
const { Title, Paragraph } = Typography;

function ToRestaurantMap() {
    const { state } = useContext(globalContext)
    const { id } = useParams()

    const currentRestaurant = state.find((el) => el.id === +id)
    console.log(currentRestaurant)
    console.log(currentRestaurant.features.geometry.coordinates)

    return (
        <section className={styles.wrapper}>
            <Title level={2}>Ресторан на карте</Title>
            <div className={styles.profile}>    
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
                    >
                        <Placemark
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                            geometry={currentRestaurant.features.geometry.coordinates}                           
                            options={currentRestaurant.features.options}
                            properties={currentRestaurant.features.properties}    
                        />
                        <GeolocationControl 
                                options={{ float: "left" }}
                                data={{title: 'это ты'}}
                        />
                        <RouteButton options={{ float: "right"}}/>
                        <SearchControl options={{ float: "right", provider: 'yandex#search', placeholderContent: 'найти ресторан'}}/>
                    </Map>
                </YMaps>          
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
            
        </section>
    );
}

export default ToRestaurantMap;