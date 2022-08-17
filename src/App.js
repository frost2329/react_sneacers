import React from 'react';
import axios from "axios";
import styles from "./App.module.scss"
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import {useEffect, useState} from "react";
import Favorite from "./pages/Favorite/Favorite";
import {Route, Routes} from "react-router-dom";


const App = () => {
    const [openCart, setOpenCart] = useState(false)
    const [orderReady, setOrderReady] = useState(0)

    const [itemsArray, setItemsArray] = useState([])
    const [cartArray, setCartArray] = useState([])
    const [favoriteArray, setFavoriteArray] = useState([])
    const [ordersArray, setOrdersArray] = useState([])

    const cardItems = itemsArray.map((i) => {
        let favorite = false
        let selected = false
        if (cartArray.find(t => t.itemId === i.itemId)) {
            selected = true
        }
        if (favoriteArray.find(t => t.itemId === i.itemId)) {
            favorite = true
        }
        return {...i, selected: selected, favorite: favorite}
    })
    const addCardItems = cardItems.filter((i) => {
        if (cartArray.find(t => t.itemId === i.itemId)) {
            return 1
        }
    })
    const favoriteCardItems = cardItems.filter((i) => {
        if (favoriteArray.find(t => t.itemId === i.itemId)) {
            return 1
        }
    })
    const orderCardItems = ordersArray.map((i) => {
        return {
            ...i, orderItems: i.orderItems.map(t => {
                return cardItems.find(d => d.itemId === t.itemId)
            })
        }
    })

    const toggleOpenCart = () => {
        setOpenCart(!openCart)
        setOrderReady(0)
    }
    const addCartItem = async (item) => {
        if (cartArray.find(i => i.itemId === item.itemId)) {
            let cartItemObj = cartArray.find((i) => i.itemId === item.itemId)
            try {
                const response = await axios.delete(`https://62f53aa6ac59075124ce14b4.mockapi.io/cart/${cartItemObj.id}`)
                if (response.status === 200) {
                    setCartArray(cartArray.filter(i => i.id !== response.data.id))
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            let itemObj = itemsArray.find((i) => i.itemId === item.itemId)
            try {
                const response = await axios.post(`https://62f53aa6ac59075124ce14b4.mockapi.io/cart`, {itemId: itemObj.itemId})
                if (response.status === 201) {
                    setCartArray([...cartArray, response.data])
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    const addFavoriteItem = async (item) => {
        if (favoriteArray.find(i => i.itemId === item.itemId)) {
            let favoriteItemObj = favoriteArray.find((i) => i.itemId === item.itemId)
            try {
                const response = await axios.delete(`https://62f53aa6ac59075124ce14b4.mockapi.io/favorite/${favoriteItemObj.id}`)
                if (response.status === 200) {
                    setFavoriteArray(favoriteArray.filter(i => i.id !== response.data.id))
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            let itemObj = itemsArray.find((i) => i.itemId === item.itemId)
            try {
                const response = await axios.post(`https://62f53aa6ac59075124ce14b4.mockapi.io/favorite`, {itemId: itemObj.itemId})
                if (response.status === 201) {
                    setFavoriteArray([...favoriteArray, response.data])
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    const confirmTheOrder = async (orderSum) => {
        const respPost = await axios.post(`https://62f53aa6ac59075124ce14b4.mockapi.io/orders/`, {
            orderSum,
            orderItems: cartArray
        })
        if (respPost.status === 201) {
            setOrdersArray([...ordersArray, respPost.data]);
        }
        let iter = 0
        let handleCartItems = async () => {
            try {
                const respDel = await axios.delete(`https://62f53aa6ac59075124ce14b4.mockapi.io/cart/${cartArray[iter].id}`)
                if (respDel.status === 200) {
                    axios.get(`https://62f53aa6ac59075124ce14b4.mockapi.io/cart`).then((getResp) => {
                        console.log('попытка');
                        console.log(getResp.data);
                        if ((getResp.status = 200) && (getResp.data.length === 0)) {
                            console.log('попал');
                            console.log(getResp.data);
                            setCartArray([])
                            setOrderReady(respPost.data.id)
                        }
                    })
                }
            } catch (error) {
                console.log(error)
            }


            iter++;
            if (iter < cartArray.length) {
                setTimeout(handleCartItems, 100);
            }
        }
        handleCartItems();
    }

    useEffect(() => {
        axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/items')
            .then((response) => {
                setItemsArray(response.data)
            })
        axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/cart')
            .then((response) => {
                setCartArray(response.data)
            })
        axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/favorite')
            .then((response) => {
                setFavoriteArray(response.data)
            })
        axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/orders')
            .then((response) => {
                setOrdersArray(response.data)
            })
    }, [])
    return (
        <div className={styles.wrapper + " clear"}>
            {openCart && <Drawer toggleOpenCart={toggleOpenCart}
                                 cartItems={addCardItems}
                                 addCartItem={addCartItem}
                                 orderReady={orderReady}
                                 confirmTheOrder={confirmTheOrder}/>
            }
            <Header addCardItems={addCardItems} toggleOpenCart={toggleOpenCart}/>
            <Routes>
                <Route path='/' element={<Home addCartItem={addCartItem}
                                               addFavoriteItem={addFavoriteItem}
                                               items={cardItems}/>}/>
                <Route path='/favorite' element={<Favorite addCartItem={addCartItem}
                                                           addFavoriteItem={addFavoriteItem}
                                                           favoriteItems={favoriteCardItems}/>}/>
                <Route path='/orders' element={<Orders addCartItem={addCartItem}
                                                       addFavoriteItem={addFavoriteItem}
                                                       orderCardItems={orderCardItems}/>}/>
            </Routes>
        </div>
    );
}


export default App;
