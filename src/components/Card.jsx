

function Card() {
    return (
        <div className="card">
            <img width={133} height={112} className="imgSneakers" src="/img/sneakers/2.jpg" alt="sneakers"/>
            <p className="mt-15 cardInfo">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="cardPrice d-flex justify-between mt-15 align-center">
                <div>
                    <p>Цена:</p>
                    <span>12 999 руб.</span>
                </div>
                <button className="plus">
                    <img src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Card;
