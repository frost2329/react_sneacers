import classes from "./App.module.scss"
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Content from "./components/Content/Content";

const sneakersData = [
    {id:1, name:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: "/img/sneakers/1.jpg"} ,
    {id:2, name:'Мужские Кроссовки Nike Air Max 270', price: 12999, imgUrl: "/img/sneakers/2.jpg"},
    {id:3, name:'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgUrl: "/img/sneakers/3.jpg"},
    {id:4, name:'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgUrl: "/img/sneakers/4.jpg"}
]
const  cartSneakersData = [
    {id:1, name:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: "/img/sneakers/1.jpg"} ,
    {id:2, name:'Мужские Кроссовки Nike Air Max 270', price: 12999, imgUrl: "/img/sneakers/2.jpg"}
]

const App = () => {
    return (
        <div className={classes.wrapper + " clear"}>
            <Drawer cartSneakersData={cartSneakersData}/>
            <Header/>
            <Content sneakersData={sneakersData}/>
        </div>
    );
}

export default App;
