import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Footer from "./layout/footer/footer";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Homepage />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
