import styles from "./Drawer.module.scss"
import Info from "../InfoBlock/Info";
import SmallButton from "../buttons/SmallButton";

const Drawer = (props) => {
    let cartElements = props.cartItems.map((item) => {
        return (
            <div key={item.id} className={styles.cartItem + "  d-flex align-center"}>
                <img className={styles.imgCartItem + "  mr-10"} src={item.imgUrl} alt="Sneakers"/>
                <div>
                    <p>{item.name}</p>
                    <b>{item.price + " руб."}</b>
                </div>
                <SmallButton imageUrl={"img/remove.svg"} alt={"Remove"}  btnCallback={()=>{props.addCartItem(item)}}/>
            </div>
        )
    })
    let sum = 0;
    props.cartItems.forEach(i => {
        sum = +sum + i.price
    })

    return (
        <div className={`${styles.overlay} ${props.openCart && styles.overlayVisible}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30 ">
                    Корзина
                    <SmallButton imageUrl={"img/remove.svg"}  btnCallback={props.toggleOpenCart}/>
                </h2>
                {props.orderReady > 0
                    ? (<Info title={'Заказ оформлен!'}
                             message={`Ваш заказ #${props.orderReady} скоро будет передан курьерской доставке`}
                             image={'img/empty_cart.jpg'}
                             callbackBtn={props.toggleOpenCart}/>)
                    : (cartElements.length > 0
                        ? (<div className={styles.cartBlock}>
                            <div className={styles.cartItems + " mt-30"}>
                                {cartElements}
                            </div>
                            <div className={styles.cartTotalBlock}>
                                <ul>
                                    <li className={"d-flex"}>
                                        <p>Стоимость: </p>
                                        <div></div>
                                        <b>{sum + " руб."}</b>
                                    </li>
                                    <li className={"d-flex"}>
                                        <p>Налог 5%: </p>
                                        <div></div>
                                        <b>{ Math.ceil(sum *0.05) + " руб."}</b>
                                    </li>
                                    <li className={"d-flex"}>
                                        <p>Итого: </p>
                                        <div></div>
                                        <b>{ sum +Math.ceil(sum *0.05) + " руб."}</b>
                                    </li>
                                </ul>
                                <button onClick={()=>{props.confirmTheOrder(sum + Math.ceil(sum *0.05))}} className={styles.greenButton}>
                                    Оформить заказ
                                    <img src="img/perl.svg" alt="Perl"/>
                                </button>
                            </div>
                        </div>)
                        : <Info title={'Корзина пустая'}
                                message={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                                image={'img/empty_cart.jpg'}
                                callbackBtn={props.toggleOpenCart}/>
                    )
                }
            </div>
        </div>
    );
}

export default Drawer;
