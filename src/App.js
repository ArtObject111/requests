import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MapBlockContainer from "./components/MapBlock/MapBlockContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <MapBlockContainer/>
            </div>
        </div>
    );
}

export default App;
