export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT': {
            return [...state, action.payload]
        }

        case 'EDIT_RESTAURANT': {
            const { description, location, id } = action.payload
            const { src } = action.payload.cover
            return state.map((el) => {
                if (el.id === id) {
                    return {
                        ...el, 
                        description: description,
                        location: location,
                        cover: {
                            src: src
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