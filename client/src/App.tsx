import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Output from "./pages/Output";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Output />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}
