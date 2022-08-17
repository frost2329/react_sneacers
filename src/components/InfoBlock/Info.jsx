import styles from "./Info.module.scss";

const Info = (props) =>  {
    return (
        <div className={styles.info + " d-flex align-center justify-center flex-column flex"}>
            <img className="mb-20" width="120" height="120" src={props.images} alt="Empty"/>
            <h2>{props.title}</h2>
            <p className="opacity-6">{props.message}</p>
            <button onClick={props.toggleOpenCart} className={styles.greenButton}>
                <img src="/img/arrow.svg" alt="Arrow"/>
                Вернуться назад
            </button>
        </div>
    );
}

export default Info;
