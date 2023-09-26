import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <HomeScreen />
      </Main>
      <Footer/>
     </div>
  );
}

export default App;
