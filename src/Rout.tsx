import { lazy, Suspense } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import { IItem } from "./Interfaces/IItem"
import { IOrder } from "./Interfaces/IOrder"

//Lazy loading
const Goods = lazy(() => import('./Pages/GoodsPage/GoodsPage'));
const BasketPage = lazy(() => import('./Pages/BasketPage/BasketPage'));
const OrderPage = lazy(() => import('./Pages/OrderPage/OrderPage'));

export const Rout =()=>{
  const ordered = useSelector((state:{order:{orderData:any,ordered:boolean}}) => state.order.ordered)
  const orderedItem = useSelector((state:{order:{orderData:IOrder,ordered:boolean,orderedItem:IItem}}) => state.order.orderedItem)
  const loading = useSelector((state:{order:{loading:boolean}}) => state.order.loading)
  if(loading){
      return(
        <div className="spinner-grow m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      )
  }

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