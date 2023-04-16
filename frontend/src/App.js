import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ProductList from "./pages/productList/productList";
import SignUp from "./pages/signUpPage/signUp"
import Login from "./pages/loginPage/login"
import Product1 from "./pages/productDetailPage/product1"
import Product2 from "./pages/productDetailPage/product2"
import Product3 from "./pages/productDetailPage/product3"
import ShoppingCart from "./pages/checkoutPage/checkout"
import Confirmation from "./pages/confirmationPage/confirmation"
import Account from "./pages/accountPage/account"
import Address from "./pages/accountPage/address"
import Payment from "./pages/accountPage/payment"
import Wishlist from "./pages/accountPage/wishlist"
import History from "./pages/accountPage/history"
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
               <Route path='/checkout' element={<ShoppingCart />} />
               <Route path='/confirmation' element={<Confirmation />} />
               <Route path='/account' element={<Account />} />
               <Route path='/address' element={<Address />} />
               <Route path='/payment' element={<Payment />} />
               <Route path='/wishlist' element={<Wishlist />} />
               <Route path='/history' element={<History />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
