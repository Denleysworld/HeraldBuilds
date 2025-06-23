import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import TroubleshootingPage from "./pages/TroubleshootingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/troubleshooting" element={<TroubleshootingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
