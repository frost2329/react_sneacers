function Drawer() {
    return (
        <div style={{display:'none'}} className="overlay" >
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img src="/img/remove.svg" alt="Remove"/>
                </h2>
                <div className="items mt-30">
                    <div className=" cartItem d-flex align-center">
                        <img className=" imgCartItem mr-10" src="/img/sneakers/1.jpg" alt="Sneakers"/>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                    </div>
                    <div className=" cartItem d-flex align-center">
                        <img className="imgCartItem mr-10" src="/img/sneakers/2.jpg" alt="Sneakers"/>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                    </div>
                    <div className=" cartItem d-flex align-center">
                        <img className="imgCartItem mr-10" src="/img/sneakers/3.jpg" alt="Sneakers"/>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="cartTotalItem d-flex">
                            <p>Итого: </p>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="cartTotalItem d-flex">
                            <p>Налог 5%: </p>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/perl.svg" alt="Perl"/></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
