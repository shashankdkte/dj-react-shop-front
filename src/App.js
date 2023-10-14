import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
    <main className="App">
          <Container>
            <Routes>
              <Route  path="/" element={<HomeScreen />}  exact/>
              <Route  path="/product/:id" element={<ProductScreen />} />
              <Route  path="/cart/:id?" element={<CartScreen />} />
          </Routes>
          </Container>
     </main>
      <Footer/>
    </BrowserRouter>
  
        
  );
}

export default App;
