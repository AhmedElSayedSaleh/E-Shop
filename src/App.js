import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="min-vh-100 wrapper">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
