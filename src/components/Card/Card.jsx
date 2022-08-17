import styles from "./Card.module.scss"
import SmallButton from "../buttons/SmallButton";

const Card = (props) =>  {
    return (
        <div className={styles.sneakerCard}>
            <div className={styles.favorite}>
                <SmallButton imageUrl={props.item.favorite ?"/img/liked.svg" : "/img/unliked.svg"}
                             alt="Like"
                             classes={"pos"}
                             btnCallback={()=>{props.addFavoriteItem(props.item)}}/>
            </div>
            <img width={133} height={112}  src={props.item.imgUrl} alt="sneakers"/>
            <p className={styles.cardInfo + " mt-15"}>{props.item.name}</p>
            <div className={styles.cardPrice + " d-flex justify-between mt-15 align-center"}>
                <div>
                    <p>Цена:</p>
                    <span>{props.item.price} руб.</span>
                </div>
                <SmallButton imageUrl={!props.item.selected ? "/img/plus.svg" : "/img/selected.svg"}
                             alt={"Plus"}
                             btnCallback={()=>{props.addCartItem(props.item)}}/>
            </div>
        </div>
    );
}

export default Card;
