import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Competences from "./pages/Competences";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/notFound/NotFound";
import "./styles/main.css";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <BrowserRouter>
         <AnimatePresence >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
