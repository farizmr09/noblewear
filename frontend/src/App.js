import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ProductList from "./pages/ProductListPage/ProductList";
import Footer from "./layout/footer/footer";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Homepage />} />
               <Route path='/product-list' element={<ProductList />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
