
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Products from "./Component/Products/Products"
import Contact from "./Component/Contacts/Contact";
import SingleProduct from "./Component/SingleProduct/SingleProduct";
import Cart from "./Component/Cart/Cart";
import Error from "./Component/ErrorComponent/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
