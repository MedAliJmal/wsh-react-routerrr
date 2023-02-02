import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Second from "./components/second/Second";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNav from "./components/headerNav/HeaderNav";
import CarList from "./components/carList/CarList";
import Price from "./components/price/Price";

const cars = [
  { id: Math.random(), brand: "Mercedes", price: "224K" },
  { id: Math.random(), brand: "Audi", price: "150K" },
  { id: Math.random(), brand: "VW", price: "110K" },
];

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarList cars={cars} />} />
          <Route path="/car/:id" element={<Price cars={cars} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
