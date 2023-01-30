let initialState = {
    requestsData: [
        {
            id: 1,
            coordsFromLat: 59.84660399,
            coordsFromLng: 30.29496392,
            coordsToLat: 59.82934196,
            coordsToLng: 30.42423701
        },
        {
            id: 2,
            coordsFromLat: 59.82934196,
            coordsFromLng: 30.42423701,
            coordsToLat: 59.82761295,
            coordsToLng: 30.41705607
        }
    ],
    coordsDefault: {
        lat: 55.702868,
        lng: 37.530867,
        zoom: 10
    }
}

const requestsReducer = (state = initialState) => {
    return {
        ...state
    }
}

export default requestsReducer