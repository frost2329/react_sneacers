import Card from "../../components/Card/Card";
import styles from "./Home.module.scss"
import {useState} from "react";
import SmallButton from "../../components/buttons/SmallButton";




const Home = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const onChangeSearch = (e) => {
        setSearchValue(e.target.value)
    }
    let sneakersCards = props.items
        .filter(item=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item)=> {
        return <div key={item.id} className={"mb-20 mr-20"}>
            <Card  addCartItem={props.addCartItem}
                   addFavoriteItem={props.addFavoriteItem}
                   item={item}/>
        </div>
    })
    return (
        <div className={styles.content}>
            <div className="searchBlock mb-30 d-flex justify-between align-center">
                <h1>{searchValue.length>0 ?`Поиск по запросу:  "${searchValue}"`: 'Все кроссовки'}</h1>
                <div className={styles.search + " d-flex align-center"}>
                    <img className="mr-15" src="/img/search.svg" alt="Поиск"/>
                    <input onChange={onChangeSearch} value={searchValue} placeholder='Поиск' type="text"/>
                    {searchValue.length > 0 &&
                        <SmallButton imageUrl={"/img/remove.svg"}  btnCallback={()=>{setSearchValue('')}}/>}
                </div>
            </div>
            <div className={styles.sneakers +" d-flex flex-wrap"}>
                {sneakersCards }
            </div>
        </div>
    );
}

export default Home;

