import React from "react";
import {connect} from "react-redux";
import s from "./MapBlock.module.scss"
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"
//import * as L from "leaflet";
import {map} from "leaflet/src/map";
import L from "leaflet";

//delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    //iconRetinaUrl: require('../../assets/images/marker_A_icon.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

//polyline
let polylinePoints = [
    [13.388798,
        52.517036],
    [13.397627,
        52.529432],
    [13.428549,
        52.523239],
    /*[37.780704, -122.403945],
    [37.780012, -122.404827]*/
];

//let polyline = L.polyline(polylinePoints).addTo(map);

/*const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
]*/
const polyline = [
    [55.698609, 37.53427],
    [53.098361, 39.415305]
]

class MapBlockContainer extends React.Component {
    render() {
        const center = [this.props.coordsDefault.lat, this.props.coordsDefault.lng]
        const position = [51.678100, 39.214558]
        return (
            <>
                <div className={s.mapBlockWrapper}>
                    <div className={s.mapWrapper}>
                        <MapContainer className={s.map} center={center} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={center}>
                                <Popup>
                                    A pretty CSS3 popup. <br/> Easily customizable.
                                </Popup>
                            </Marker>
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br/> Easily customizable.
                                </Popup>
                                {/*<Polyline positions={polylinePoints}/>*/}
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    coordsDefault: state.requests.coordsDefault
})


export default connect(mapStateToProps, {})(MapBlockContainer)