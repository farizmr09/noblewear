import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ProductList from "./pages/ProductListPage/ProductList";
import SignUp from "./pages/signUpPage/signUp"
import Footer from "./layout/footer/footer";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Homepage />} />
               <Route path='/product-list' element={<ProductList />} />
               <Route path='/signup' element={<SignUp />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
