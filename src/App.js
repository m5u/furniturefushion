import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import "./css/main.css";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  // Create a custom theme with updated typography
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      // fontFamily: "'Jost', sans-serif",
      fontSize: 14,
    },
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       body: {
    //         fontSize: "14px",
    //       },
    //     },
    //   },
    // },
  });
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
