import styles from "./Card.module.scss"
import SmallButton from "../buttons/SmallButton";
import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={220}
        height={260}
        viewBox="0 0 220 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="19" ry="19" width="140" height="120"/>
        <rect x="0" y="135" rx="14" ry="0" width="140" height="12"/>
        <rect x="0" y="150" rx="14" ry="0" width="120" height="12"/>
        <rect x="0" y="184" rx="11" ry="11" width="80" height="28"/>
        <rect x="114" y="184" rx="13" ry="8" width="28" height="28"/>
    </ContentLoader>
)
const Card = (props) => {

    return (
        <div className={styles.sneakerCard}>
            {props.isLoading
                ? <div >
                    <MyLoader/>
                </div>
                : (<div>
                    <div className={styles.favorite}>
                        <SmallButton imageUrl={props.item.favorite ? "/img/liked.svg" : "/img/unliked.svg"}
                                     alt="Like"
                                     classes={"pos"}
                                     btnCallback={() => {
                                         props.addFavoriteItem(props.item)
                                     }}/>
                    </div>
                    <img width={140} height={120} src={props.item.imgUrl} alt="sneakers"/>
                    <p className={styles.cardInfo + " mt-15"}>{props.item.name}</p>
                    <div className={styles.cardPrice + " d-flex justify-between mt-15 align-center"}>
                        <div>
                            <p>Цена:</p>
                            <span>{props.item.price} руб.</span>
                        </div>
                        <SmallButton imageUrl={!props.item.selected ? "/img/plus.svg" : "/img/selected.svg"}
                                     alt={"Plus"}
                                     btnCallback={() => {
                                         props.addCartItem(props.item)
                                     }}/>
                    </div>
                </div>)}
        </div>)
}
export default Card;
