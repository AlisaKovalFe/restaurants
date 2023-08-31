import React from 'react';
import { Carousel } from 'antd';
import { gallery } from '../../data/gallery'

function Gallery(props) {
    return (
        <div>
            <Carousel autoplay> 
                {
                    gallery.map((el) => (
                        <div key={el.id}>
                            <img src={el.cover.src} alt={el.cover.alt}/>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Gallery;