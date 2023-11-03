import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductLists";
import Header from "./containers/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
