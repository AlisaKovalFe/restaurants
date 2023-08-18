import { restaurants } from './restaurants'

let copy = [...restaurants]
let features = []
copy.map((el) => features.push(el.features))

export const restaurantsOnMap = {
    "type": "FeatureCollection",
    "features": features
}