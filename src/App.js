import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Checkout from './components/Checkout/Checkout';
//import Switch from 'react-bootstrap/esm/Switch';


function App() {
  // const location = useLocation();
  // console.log(location.state)
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <div>
              <GlobalStyle />
              <Hero />


              <Products heading='Choose your favorite' data={productData} />
              <Feature />
              <Products heading='Sweet Treats for You' data={productDataTwo} />
              <Footer />
            </div>
          </Route>
          <Route exact path='/checkout'>
            
            <Checkout></Checkout>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;