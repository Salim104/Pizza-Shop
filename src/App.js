

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './globalStyles'
import Hero from   './Components/Hero/index'
import Products from './Components/Products/index'
import { productData,productDataTwo} from './Components/Products/Data';
import Feature from './Components/Feature/index'
import Footer from './Components/Footer/index'
function App() {
  return (

    <Router>
      <GlobalStyle></GlobalStyle>
      <Hero></Hero>
      <Products heading='choose your favorite' data={productData}></Products>
      <Feature></Feature>
      <Products heading='Sweet Treats for you' data={productDataTwo}></Products>
      <Footer></Footer>
    </Router>
  );
}

export default App;
