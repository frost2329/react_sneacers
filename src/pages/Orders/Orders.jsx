import Card from "../../components/Card/Card";
import styles from "../Home/Home.module.scss"
import {NavLink} from "react-router-dom";
import SmallButton from "../../components/buttons/SmallButton";

const Orders = (props) => {
    let orderItemsEl = props.orderCardItems.slice().reverse().map((order) => {
        return <div key={order.id} >
            <h3 className={"mb-20 opacity-8"}>Заказ #{order.id}</h3>
            <div className={" d-flex flex-wrap"}>
                {order.orderItems.map((orItem) => {
                    return <div className={"mb-20 mr-20"}>
                        <Card addCartItem={props.addCartItem}
                              addFavoriteItem={props.addFavoriteItem}
                              item={orItem}/>
                    </div>
                })}
            </div>
        </div>
    })
    return (
        <div className={styles.content}>
            <div className="searchBlock mb-30 d-flex align-center">
                <NavLink to={"/"} >
                    <SmallButton imageUrl={'/img/back.svg'} classes={'mr-20'} btnCallback={null}/>
                </NavLink>
                    <h1>{'Мои покупки'}</h1>
            </div>
            <div >
                {orderItemsEl}
            </div>
        </div>
    );
}

export default Orders;

