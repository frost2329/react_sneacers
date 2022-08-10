function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center ">
                <div className="mr-15"><img src="/img/image_4.svg" alt="logo"/></div>
                <div>
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <p className="opacity-5">Магазин лучших кроссовок </p>
                </div>
            </div>
            <div className="headerInfo">
                <ul className="d-flex align-center">
                    <li className="d-flex align-center mr-30 ">
                        <img className="mr-10" width={20} height={20} src="/img/likes.svg" alt="car"/>
                        <span>1205 руб.</span>
                    </li>
                    <li className="mr-30">
                        <img width={20} height={20} src="/img/car.svg" alt="like"/>
                    </li>
                    <li>
                        <img width={20} height={20} src="/img/union.svg" alt="union"/>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
