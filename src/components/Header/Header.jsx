import {NavLink} from "react-router-dom";
import SmallButton from "../buttons/SmallButton";
import styles from "./Header.module.scss"

const Header = (props) => {
    let sum = 0;
    props.addCardItems.forEach(i => {
        sum = +sum + i.price
    })
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center ">
                <div className="mr-15">
                    <NavLink to='/'>
                        <img className={styles.logo} src="/img/image_4.svg" alt="logo"/>
                    </NavLink>
                </div>
                <div>
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <p className="opacity-5">Магазин лучших кроссовок </p>
                </div>
            </div>
            <div>
                <ul className="d-flex align-center">
                    <li onClick={props.toggleOpenCart} className="cu-p d-flex  mr-30 ">
                        <SmallButton imageUrl={"/img/car.svg"} alt="Cart" />
                        <span>{sum} руб.</span>
                    </li>
                    <li className={"mr-30 cu-p"}>
                        <NavLink to='/favorite'>
                            <SmallButton imageUrl={"/img/likes.svg"} alt="Favorite"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/orders'>
                            <SmallButton imageUrl={"/img/union.svg"} alt="Favorite" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
