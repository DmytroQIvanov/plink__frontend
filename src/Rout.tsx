import { lazy, Suspense } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import { IOrderSlice } from "./Interfaces/IOrderSlice"

//Lazy loading
const Goods = lazy(() => import('./Pages/GoodsPage/GoodsPage'));
const BasketPage = lazy(() => import('./Pages/BasketPage/BasketPage'));
const OrderPage = lazy(() => import('./Pages/OrderPage/OrderPage'));


// import { animated, useTransition } from 'react-spring'

export const Rout =()=>{
  const ordered = useSelector((state:IOrderSlice) => state.order.ordered)
  const orderedItem = useSelector((state:IOrderSlice) => state.order.orderedItem)
  const loading = useSelector((state:IOrderSlice) => state.order.loading)
 

  // --ORDERED--
  if(ordered){
      return(
        <Suspense fallback={<div className="spinner-grow m-5" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>}>
      <BasketPage/>
      </Suspense>

      )
  }
    return(<div>
        <Router>
            <Switch>

                {/* --GOODS-- */}
            <Route path="/products" exact>
            <Suspense fallback={<div className="spinner-grow m-5" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>}>
                <Goods/>
                </Suspense>
            </Route>

                {/* --ORDER-- */}
            {orderedItem.Product&&
            <Route path="/order">
                <Suspense fallback={<div className="spinner-grow m-5" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>}>
            <OrderPage/>
            </Suspense>
        </Route>
        }
            <Redirect to="/products"/>
            </Switch>
        </Router>

    </div>)
}