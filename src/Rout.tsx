import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Rout.sass";
import { Loader } from "./Components/Loader/Loader";

//Lazy loading
const Goods = lazy(() => import("./Pages/GoodsPage/GoodsPage"));
const BasketPage = lazy(() => import("./Pages/BasketPage/BasketPage"));
const OrderPage = lazy(() => import("./Pages/OrderPage/OrderPage"));

export const Rout = () => {
  const routes: { path: string; Component: any }[] = [
    { path: "/products", Component: Goods },
    { path: "/order", Component: OrderPage },
    { path: "/basket", Component: BasketPage },
  ];
  routes.map((elem) => console.log(elem));
  return (
    <Router>
      {routes.map(({ Component, path }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <Suspense fallback={<Loader />}>
              <CSSTransition
                timeout={1500}
                classNames="page"
                unmountOnExit
                in={match != null}
              >
                <Component />
              </CSSTransition>
            </Suspense>
          )}
        </Route>
      ))}
      <Redirect to="/products" />
    </Router>
  );
};
