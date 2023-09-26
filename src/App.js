import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Main>
          <Container>
            <Routes>
              <Route  path="/" element={<HomeScreen />}  exact/>
              <Route  path="/product/:id" element={<ProductScreen />} />
          </Routes>
          </Container>
        
      </Main>
      <Footer/>
     </div>
    </BrowserRouter>
  );
}

export default App;
