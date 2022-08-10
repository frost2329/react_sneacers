import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Draver";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            {/*<div className="slider">
                SLIDER
            </div>*/}
            <div className="content">
                <div className="mb-30 d-flex justify-between align-center">
                    <h1>Все кросовки</h1>
                    <div className="search d-flex align-center">
                        <img className="mr-15" src="/img/search.svg" alt="Поиск"/>
                        <input placeholder='Поиск' type="text"/>
                    </div>
                </div>

                <div className="sneakers d-flex">
                    <Card className="mr-30"/>
                    <Card className="mr-30"/>
                    <Card className="mr-30"/>
                    <Card className/>
                </div>
            </div>
        </div>
    );
}

export default App;
