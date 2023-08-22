export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT': {
            console.log(action.payload)
            return [action.payload, ...state,]
        }

        case 'EDIT_RESTAURANT': {
            const { description, id } = action.payload
            const { balloonContent } = action.payload.features.properties.balloonContent
            const { hintContent } = action.payload.features.properties.hintContent
            const { coordinates } = action.payload.features.geometry.coordinates
            const { src } = action.payload.cover
            console.log(action.payload)
            
            return state.map((el) => {
                if (el.id === id) {
                    return {
                        ...el, 
                        description: description,
                        cover: {
                            src: src
                        },
                        features: {
                            ...el.features,
                            geometry: {
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
        }

        case 'DELETE_RESTAURANT': {
            const { id } = action.payload
            return state.filter((el) => el.id !== id)
        }

        default: {
            return state
        }
    }
}