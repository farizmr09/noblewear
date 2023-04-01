import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Homepage />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
