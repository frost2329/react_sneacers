import Card from "../../components/Card/Card";
import styles from "../Home/Home.module.scss"
import {NavLink} from "react-router-dom";
import SmallButton from "../../components/buttons/SmallButton";
import Info from "../../components/InfoBlock/Info";

const Orders = (props) => {
    let orderItemsEl = props.orderCardItems.slice().reverse().map((order) => {
        return <div key={order.id} >
            <h3 className={"mb-20 opacity-8"}>Заказ #{order.id}</h3>
            <div className={"d-flex flex-wrap"}>
                {order.orderItems.map((orItem) => {
                    return <div >
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
            {orderItemsEl.length > 0
                ?<div className={"d-flex flex-column"}>
                    {orderItemsEl }
                </div>
                :<div className={"mt-50"}>
                    <Info title={'У вас нет заказов'}
                          message={'Вы нищеброд?  Оформите хотя бы один заказ.'}
                          image={'/img/smile_sad_2.png'}
                          link={"/"}/>
                </div>
            }
        </div>
    );
}

export default Orders;

