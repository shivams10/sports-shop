import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { About } from "./pages/about";

function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
