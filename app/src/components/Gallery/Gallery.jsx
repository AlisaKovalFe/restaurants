import React from 'react';
import { Carousel } from 'antd';

function Gallery({ gallery }) {

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