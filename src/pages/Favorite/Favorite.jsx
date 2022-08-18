import Card from "../../components/Card/Card";
import styles from "../Home/Home.module.scss"
import {NavLink} from "react-router-dom";
import SmallButton from "../../components/buttons/SmallButton";
import Info from "../../components/InfoBlock/Info";

const Favorite = (props) => {
    let itemsFavorite = props.favoriteItems.map((item)=> {
        return <div key={item.id} className={"mb-20 mr-20"}>
            <Card  addCartItem={props.addCartItem}
                   addFavoriteItem={props.addFavoriteItem}
                   item={item}/>
        </div>
    })
    return (
        <div className={styles.content}>
            <div className="searchBlock mb-30 d-flex  align-center">
                <NavLink to={"/"} >
                    <SmallButton imageUrl={"/img/back.svg"} classes={'mr-20'} btnCallback={null}/>
                </NavLink>
                <h1>{'Мои закладки'}</h1>
            </div>
            {itemsFavorite.length > 0
                ?<div className="d-flex flex-wrap">
                    {itemsFavorite }
                </div>
                : <div className={"mt-50"}>
                    <Info title={'Закладок нет :('}
                          message={'Вы ничего не добавляли в закладки'}
                          image={'/img/smile_sad_1.png'}
                          link={"/"}/>
                </div>
            }
        </div>
    );
}

export default Favorite;

