import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Pages/NotFound/NotFound";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import About from "./Components/Pages/About/About";
import ScrollToTop from "./Components/Pages/ScrollToTop/ScrollToTop";
import RouterChangeTop from "./Components/Pages/RouterChangeTop/RouterChangeTop";

function App() {
  return (
    <div>
      <RouterChangeTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
