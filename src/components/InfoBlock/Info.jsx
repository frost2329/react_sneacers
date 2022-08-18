import styles from "./Info.module.scss";
import {NavLink} from "react-router-dom";

const Info = (props) => {
    debugger;
    return (
        <div className={styles.info + " d-flex align-center justify-center flex-column flex"}>
            <img className="mb-20" width="70" height="70" src={props.image} alt="Empty"/>
            <h2>{props.title}</h2>
            <p className="opacity-6">{props.message}</p>
            {props.link
                ? <NavLink to={props.link}>
                    <button onClick={props.callbackBtn} className={styles.greenButton}>
                        <img src="img/arrow.svg" alt="Arrow"/>
                        Вернуться назад
                    </button>
                </NavLink>
                : <button onClick={props.callbackBtn} className={styles.greenButton}>
                    <img src="img/arrow.svg" alt="Arrow"/>
                    Вернуться назад
                </button>
            }
        </div>
    );
}

export default Info;
