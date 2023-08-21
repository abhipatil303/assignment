import { Card } from "@mui/material";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <NavBar>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='products/:id' element={<ProductDetails />} />
          <Route path='products/category/:category_name' element={<HomePage />} />
        </Routes>
      </NavBar>
    </Router>
  );
}

export default App;
