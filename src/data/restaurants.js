const optionsOfIcon = {
    iconLayout: "default#image",
    iconImageHref: "https://img.icons8.com/?size=512&id=63653&format=png",
    iconImageSize: [40, 40],
    iconImageOffset: [-10, -10],                            
    balloonCloseButton: true,
}

export const restaurants = [
    {
        id: 1,
        title: 'CEVICHERIA',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/CEVICHERIA_1440.jpg',
            alt: 'CEVICHERIA',
        },
        description: 'Перуанская кухня в сопровождении выдающихся вин',
        location: 'г. Москва, Пречистенская набережная 15, стр. 1',
        
        features:
                {
                    type: "Feature",
                    id: 1,
                    geometry: {
                        type: "Point",
                        coordinates: [55.738571, 37.605032]
                    },
                        properties: {
                            balloonContent: 
                                        `
                                        <div class="balloon balloon_small">
                                            <h5 class="balloon__heading">CEVICHERIA</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/CEVICHERIA_1440.jpg" alt="CEVICHERIA"/>
                                            <div>
                                                <a class="map-link" href="tel:+7 (495) 999-99-99">+7 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,             
                            hintContent: `
                                        <div class="hint">
                                            <h5 class="hint__heading">CEVICHERIA</h5>
                                            <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/CEVICHERIA_1440.jpg" alt="CEVICHERIA"/>
                                            <div>
                                                <a class="map-link" href="tel:+7 (495) 999-99-99">+7 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    },
                    options: optionsOfIcon,
            },
    },
    {
        id: 2,
        title: 'CUTFISH',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/catfish_1400.jpg',
            alt: 'CUTFISH',
        },
        description: 'Один из лучших проектов шефа Глена Баллиса – с отличными суши и японским грилем',
        location: 'г. Москва, Большой Козихинский переулок 17',
        features:
                {
                    type: "Feature",
                    id: 2,
                    geometry: {
                        type: "Point",
                        coordinates: [55.748179, 37.5402451]
                    },
                    properties: {
                        balloonContent: 
                                        `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">CUTFISH</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/catfish_1400.jpg" alt="CUTFISH"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 999-99-99">+8 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                    <div class="hint">
                                        <h5 class="hint__heading">CUTFISH</h5>
                                        <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/catfish_1400.jpg" alt="CUTFISH"/>
                                        <div">
                                            <a class="map-link" href="tel:+8 (495) 697-70-07">+8 (495) 697-70-07</a>
                                        </div>
                                    </div>
                                    `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    },
                    options: optionsOfIcon,
            },
    },
    {
        id: 3,
        title: 'GERALDINE',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/Interior_Geraldine_1440.jpg',
            alt: 'GERALDINE',
        },
        description: 'Нарядное необистро Александра Раппопорта и Владимира Познера',
        location: 'г. Москва, Остоженка ул., 27/2',
        features:
                {
                    type: "Feature",
                    id: 3,
                    geometry: {
                        type: "Point",
                        coordinates: [55.739042, 37.597199]
                    },
                    properties: {
                        balloonContent: 
                                        `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">GERALDINE</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/Interior_Geraldine_1440.jpg" alt="GERALDINE"/>
                                            <div>
                                                <a class="map-link"href="tel:+8 (495) 999-99-99">+8 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                    <div class="hint">
                                        <h5 class="hint__heading">GERALDINE</h5>
                                        <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/Interior_Geraldine_1440.jpg" alt="GERALDINE"/>
                                        <div>
                                            <a class="map-link" href="tel:+(495) 999-99-99">+8 (495) 999-99-99</a>
                                        </div>
                                    </div>
                                    `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    },   
                    options: optionsOfIcon,
            },
    },
    {
        id: 4,
        title: 'GRAND CRU',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/news/gc_1440.jpg',
            alt: 'GRAND CRU',
        },
        description: 'Один из лучших винных ресторанов Москвы на Патриарших прудах',
        location: 'г. Москва, Малая Бронная, 22, стр.2',
        features:
                {
                    type: "Feature",
                    id: 4,
                    geometry: {
                        type: "Point",
                        coordinates: [55.762981, 37.594980]
                    },
                    properties: {
                        balloonContent: 
                                        `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">GRAND CRU</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/news/gc_1440.jpg" alt="GRAND CRU"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 999-99-99">+8 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                    <div class="hint">
                                        <h5 class="hint__heading">GRAND CRU</h5>
                                        <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/news/gc_1440.jpg" alt="GRAND CRU"/>
                                        <div>
                                            <a class="map-link" href="tel:+(495) 999-99-99">+8 (495) 999-99-99"</a>
                                        </div>
                                    </div>
                                    `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    },  
                    options: optionsOfIcon,
            },
    },
    {
        id: 5,
        title: 'MARGARITA BISTRO',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/margarita_1440.jpg',
            alt: 'MARGARITA BISTRO',
        },
        description: 'Нарядный ресторан на Патриарших во главе с Гленом Баллисом и Даном Мироном',
        location: 'г. Москва, Малая Бронная, 28',
        features:
                {
                    type: "Feature",
                    id: 5,
                    geometry: {
                        type: "Point",
                        coordinates: [55.763624, 37.594288]
                    },
                    properties: {
                        balloonContent: 
                                        `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">MARGARITA BISTRO</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/margarita_1440.jpg" alt="MARGARITA BISTRO"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 999-99-99">+8 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                    <div class="hint">
                                        <h5 class="hint__heading">MARGARITA BISTRO</h5>
                                        <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/margarita_1440.jpg" alt="MARGARITA BISTRO"/>
                                        <div>
                                            <a class="map-link" href="tel:+(495) 999-99-99">+8 (495) 999-99-99"</a>
                                        </div>
                                    </div>
                                    `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    }, 
                    options: optionsOfIcon,
            },
    },
    {
        id: 6,
        title: 'MEGUMI',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/megumi_1.jpg',
            alt: 'MEGUMI',
        },
        description: 'Современная японская кухня при «Лотте Отель Москва»',
        location: 'г. Москва, Новинский бульвар, 8, стр. 2,',
        features:
                {
                    type: "Feature",
                    id: 6,
                    geometry: {
                        type: "Point",
                        coordinates: [55.750332, 37.583957]
                    },
                    properties: {
                        balloonContent: 
                                        `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">MEGUMI</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/megumi_1.jpg" alt="MEGUMI"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 999-99-99">+8 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                    <div class="hint">
                                        <h5 class="hint__heading">MEGUMI</h5>
                                        <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/megumi_1.jpg" alt="MEGUMIO"/>
                                        <div>
                                            <a class="map-link" href="tel:+(495) 999-99-99">+8 (495) 999-99-99</a>
                                        </div>
                                    </div>
                                    `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    }, 
                    options: optionsOfIcon,
            },
    },
    {
        id: 7,
        title: 'MØS',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/MOS_1440.jpg',
            alt: 'MØS',
        },
        description: 'Скандинавская кухня в минималистических интерьерах',
        location: 'г. Москва, ул. Трубецкая, 10',
        tel: '+8 (495) 999-99-99',
        features:
                {
                    type: "Feature",
                    id: 7,
                    geometry: {
                        type: "Point",
                        coordinates: [55.727328, 37.575792]
                    },
                    properties: {
                        balloonContent: `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">MØS</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/MOS_1440.jpg" alt="MØS"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 999-99-99">+8 (495) 999-99-99</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                        <div class="hint">
                                            <h5 class="hint__heading">MØS</h5>
                                            <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/MOS_1440.jpg" alt="MØS"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 697-70-07">+8 (495) 697-70-07</a>
                                            </div>
                                        </div>
                                        `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    },
                    options: optionsOfIcon,
            },
    },
    {
        id: 8,
        title: 'PATARA',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/patara_1440.jpg',
            alt: 'PATARA',
        },
        description: 'Камерное заведение с авторской современной грузинской кухней',
        location: 'г. Москва, Еромалаевский переулок, 7',
        features:
                {
                    type: "Feature",
                    id: 8,
                    geometry: {
                        type: "Point",
                        coordinates: [55.764237, 37.590470]
                    },
                    properties: {
                        balloonContent: 
                                        `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">PATARA</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/patara_1440.jpg" alt="PATARA"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 697-70-07">+8 (495) 697-70-07</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                        <div class="hint">
                                            <h5 class="hint__heading">PATARA</h5>
                                            <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/patara_1440.jpg" alt="PATARA"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 697-70-07">+8 (495) 697-70-07</a>
                                            </div>
                                        </div>
                                        `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    },
                    options: optionsOfIcon,
            },
    },
    {
        id: 9,
        title: 'SELFIE',
        cover: {
            src: 'http://www.spoonguide.ru/thumb/1440x450_5//images/news/_selfie_1440.jpg',
            alt: 'SELFIE',
        },
        description: 'Современная русская кухня глазами шефа Анатолия Казакова',
        location: 'г. Москва, Новинский бульвар, 31',
        features:
                {
                    type: "Feature",
                    id: 9,
                    geometry: {
                        type: "Point",
                        coordinates: [55.757830, 37.582520]
                    },
                    properties: {
                        balloonContent: 
                                        `
                                        <div class="balloon">
                                            <h5 class="balloon__heading">SELFIE</h5>
                                            <img class="balloon__image balloon__image_big" src="http://www.spoonguide.ru/thumb/1440x450_5//images/news/_selfie_1440.jpg" alt="SELFIE"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 697-70-07">+8 (495) 697-70-07</a>
                                            </div>
                                        </div>
                                        `,             
                        hintContent: `
                                        <div class="hint">
                                            <h5 class="hint__heading">SELFIE</h5>
                                            <img class="hint__image" src="http://www.spoonguide.ru/thumb/1440x450_5//images/restaurant/moscow/patara_1440.jpg" alt="SELFIE"/>
                                            <div>
                                                <a class="map-link" href="tel:+8 (495) 697-70-07">+8 (495) 697-70-07</a>
                                            </div>
                                        </div>
                                        `,
                        data: {
                            "organization": "restaurant",
                            "open": "9am - 9pm"
                        },    
                    },
                    options: optionsOfIcon,
            },
    },

]