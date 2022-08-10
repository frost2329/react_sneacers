import Card from "./Card/Card";
import classes from "./Content.module.scss"




const Content = (props) => {
    let sneakersCards = props.sneakersData.map((s)=> {
        return <div key={s.id} className={s.id%4 === 0 ? 'mr-0' : 'mr-30' }>
            <Card id={s.id} name={s.name} price={s.price} imgUrl={s.imgUrl}/>
        </div>
    })

    return (
        <div className={classes.content}>
            <div className="searchBlock mb-30 d-flex justify-between align-center">
                <h1>Все кросовки</h1>
                <div className={classes.search + " d-flex align-center"}>
                    <img className="mr-15" src="/img/search.svg" alt="Поиск"/>
                    <input placeholder='Поиск' type="text"/>
                </div>
            </div>
            <div className="sneakers d-flex">
                {sneakersCards }
            </div>
        </div>
    );
}

export default Content;
