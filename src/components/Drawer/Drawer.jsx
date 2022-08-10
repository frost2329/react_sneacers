import classes from "./Drawer.module.scss"
const Drawer = (props) => {
    let cartSneakersElements = props.cartSneakersData.map((s)=> {
        return (
                <div key={s.id} className={classes.cartItem  +"  d-flex align-center"}>
                    <img className={classes.imgCartItem + "  mr-10"} src={s.imgUrl} alt="Sneakers"/>
                    <div>
                        <p>{s.name}</p>
                        <b>{s.price + " руб."}</b>
                    </div>
                    <img className={classes.removeBtn} src="/img/remove.svg" alt="Remove"/>
                </div>
            )
    })
    return (
        <div style={{display:'none'}} className={classes.overlay} >
            <div className={classes.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img src="/img/remove.svg" alt="Remove"/>
                </h2>
                <div className={classes.cartItems +" mt-30"}>
                    {cartSneakersElements}
                </div>
                <div className={classes.cartTotalBlock}>
                    <ul>
                        <li className={"d-flex"}>
                            <p>Итого: </p>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className={"d-flex"}>
                            <p>Налог 5%: </p>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className={classes.greenButton}>Оформить заказ <img src="/img/perl.svg" alt="Perl"/></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
