export function reducer(state, action) {
    switch(action.type) {
        case 'GET_RESTAURANTS': {
            const { restaurants } = action.payload
            return { ...state, list: restaurants}
        }

        case 'ADD_RESTAURANT': {
            const newRestaurant = action.payload
            return { ...state, list: [newRestaurant, ...state.list]}
        }

        case 'EDIT_RESTAURANT': {
            const { description, location, id, coordinates, balloonContent, hintContent } = action.payload
            const { src } = action.payload.cover
            
            return { ...state, list: state.list.map((el) => {
                if (el.id === id) {
                    return {
                        ...el, 
                        description: description,
                        location: location,
                        cover: {
                            src: src
                        },
                        features: {
                            ...el.features,
                            geometry: {
                                ...el.features.geometry,
                                coordinates: coordinates
                            },
                            properties: {
                                balloonContent: balloonContent,
                                hintContent: hintContent
                            }
                        }
                    }
                }
                return el
            })
        }} 

        case 'DELETE_RESTAURANT': {
            const { id } = action.payload
            return { ... state, list: state.list.filter((el) => el.id !== id)} 
        }

        default: {
            return state
        }
    }
}