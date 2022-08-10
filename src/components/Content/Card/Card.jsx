import classes from "./Card.module.scss"

const Card = (props) =>  {
    return (
        <div className={classes.sneakerCard}>
            <img className={classes.favorite} src="/img/unliked.svg" alt="Like"/>
            <img width={133} height={112}  src={props.imgUrl} alt="sneakers"/>
            <p className={classes.cardInfo + " mt-15"}>{props.name}</p>
            <div className={classes.cardPrice + " d-flex justify-between mt-15 align-center"}>
                <div>
                    <p>Цена:</p>
                    <span>{props.price} руб.</span>
                </div>
                <button>
                    <img src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Card;
