import styles from "./SmallButton.module.scss"
const SmallButton = (props) => {
    return (
        <div className={styles.smallButton +' '+ props.classes}>
            <img onClick={props.btnCallback}  src={props.imageUrl} alt={"small button"}/>
        </div>
    );
}

export default SmallButton;
