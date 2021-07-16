import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Details from "./pages/deatails";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Account from "./pages/account";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ffff",
    },
  },
});

function AppRouter() {
  return (
    <ThemeProvider theme={theme} style={{ overflow: "hidden" }}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route excat path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default AppRouter;
