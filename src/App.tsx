import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { About } from "./pages/about";
import { Navbar } from "./components/navbar";
import { CartProvider } from "./context/cartContext";
import "./App.css"

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
