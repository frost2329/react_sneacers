import React from 'react';
import axios from "axios";
import styles from "./App.module.scss"
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import {useEffect, useState} from "react";
import Favorite from "./pages/Favorite";
import {Route, Routes} from "react-router-dom";
import {sneakersAPI} from "./sneakersAPI";


const App = () => {

    const [isLoading, setIsLoading] = useState(true)
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
                const response = await sneakersAPI.deleteCart(cartItemObj.id)
                if (response.status === 200) {
                    setCartArray(cartArray.filter(i => i.id !== response.data.id))
                }
            } catch (error) {
                alert('Ошибка во время удаления из карзины =(')
            }
        } else {
            let itemObj = itemsArray.find((i) => i.itemId === item.itemId)
            try {
                const response = await sneakersAPI.postCart({itemId: itemObj.itemId})
                if (response.status === 201) {setCartArray([...cartArray, response.data])}
            } catch (error) {
                alert('Ошибка во время добавления объекта в корзину =(')
            }
        }
    }
    const addFavoriteItem = async (item) => {
        if (favoriteArray.find(i => i.itemId === item.itemId)) {
            let favoriteItemObj = favoriteArray.find((i) => i.itemId === item.itemId)
            try {
                const response = await sneakersAPI.deleteFavorite(favoriteItemObj.id)
                if (response.status === 200) {
                    setFavoriteArray(favoriteArray.filter(i => i.id !== response.data.id))
                }
            } catch (error) {
                alert('Ошибка во время удаления из избранного =(')
            }
        } else {
            let itemObj = itemsArray.find((i) => i.itemId === item.itemId)
            try {
                const response = await  sneakersAPI.postFavorite({itemId: itemObj.itemId})
                if (response.status === 201) {
                    setFavoriteArray([...favoriteArray, response.data])
                }
            } catch (error) {
                alert('Ошибка во время добавления объекта в избранное =(')
            }
        }
    }
    const confirmTheOrder = async (orderSum) => {
        const respPost = await sneakersAPI.postOrders({orderSum, orderItems: cartArray})
        if (respPost.status === 201) {
            setOrdersArray([...ordersArray, respPost.data]);
        }
        let iter = 0
        let handleCartItems = async () => {
            try {
                const respDel = await sneakersAPI.deleteCart(cartArray[iter].id)
                if (respDel.status === 200) {
                    let getResp = await sneakersAPI.getCart()
                    if ((getResp.status = 200) && (getResp.data.length === 0)) {
                            console.log(getResp.data);
                            setCartArray([])
                            setOrderReady(respPost.data.id)
                        }
                }
            } catch (error) {
                alert('Ошибка во время оформления заказа =(')
            }


            iter++;
            if (iter < cartArray.length) {
                setTimeout(handleCartItems, 100);
            }
        }
        handleCartItems();
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                let itemsResponse = await sneakersAPI.getItems()
                let cartResponse = await sneakersAPI.getCart()
                let favoriteResponse = await sneakersAPI.getFavorite()
                let ordersResponse = await sneakersAPI.getOrders()

                setItemsArray(itemsResponse.data)
                setCartArray(cartResponse.data)
                setFavoriteArray(favoriteResponse.data)
                setOrdersArray(ordersResponse.data)

                setIsLoading(false)
            }catch (error) {
                alert("Ошибка во время загрузки данных")
            }
        }
        fetchData()
    }, [])
    return (
        <div className={styles.wrapper + " clear"}>
            <Drawer toggleOpenCart={toggleOpenCart}
                                 cartItems={addCardItems}
                                 addCartItem={addCartItem}
                                 orderReady={orderReady}
                                 confirmTheOrder={confirmTheOrder}
                                 openCart={openCart}/>

            <Header addCardItems={addCardItems} toggleOpenCart={toggleOpenCart}/>
            <Routes>
                <Route path='' element={<Home addCartItem={addCartItem}
                                               addFavoriteItem={addFavoriteItem}
                                               items={cardItems}
                                               isLoading={isLoading}/>}/>
                <Route path='favorite' element={<Favorite addCartItem={addCartItem}
                                                           addFavoriteItem={addFavoriteItem}
                                                           favoriteItems={favoriteCardItems}/>}/>
                <Route path='orders' element={<Orders addCartItem={addCartItem}
                                                       addFavoriteItem={addFavoriteItem}
                                                       orderCardItems={orderCardItems}/>}/>
            </Routes>
        </div>
    );
}


export default App;
