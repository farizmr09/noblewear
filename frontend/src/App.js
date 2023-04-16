import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ProductList from "./pages/productList/productList";
import SignUp from "./pages/signUpPage/signUp"
import Login from "./pages/loginPage/login"
import Product1 from "./pages/productDetailPage/product1"
import Product2 from "./pages/productDetailPage/product2"
import Product3 from "./pages/productDetailPage/product3"
import Footer from "./layout/footer/footer";


function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Homepage />} />
               <Route path='/product-list' element={<ProductList />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/login' element={<Login />} />
               <Route path='/product1' element={<Product1 />} />
               <Route path='/product2' element={<Product2 />} />
               <Route path='/product3' element={<Product3 />} />
               <Route path='/productlist' element={<ProductList />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
