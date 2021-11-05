import React from 'react'
import {
    Route, Switch
} from 'react-router-dom'

import TopHeader from '../shop/layout/TopHeader'
import Menu from '../shop/layout/Menu'
import Footer from '../shop/layout/Footer'

import ShopIndex from '../shop/ShopIndex'
import Shop from '../shop/Shop'
import ProductDetails from '../shop/ProductDetails'
import Contact from '../Contact'
import Cart from '../shop/Cart'
import Checkout from '../shop/Checkout'
import Confirmation from '../shop/Confirmation'

import ProtectedRoute from './ProtectedRoute'

function ShopRoute() {

    return (
        <div>
            <TopHeader />
            <Menu />
            <Switch>
                <Route path='/' exact component={ShopIndex} />
                <Route path='/shop' exact component={Shop} />
                <Route path='/product-details' exact component={ProductDetails} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/cart' exact component={Cart} />
                <ProtectedRoute path='/checkout' exact component={Checkout} />
                <ProtectedRoute path='/confirmation' exact component={Confirmation} />
            </Switch>
            <Footer />
        </div>
    )
}

export default ShopRoute
