export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT': {
            console.log(action.payload)
            return [action.payload, ...state,]
        }

        case 'EDIT_RESTAURANT': {
            const { description, location, id, coordinates, balloonContent, hintContent } = action.payload
            const { src } = action.payload.cover
            
            return state.map((el) => {
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