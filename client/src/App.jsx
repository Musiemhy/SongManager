import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HOmePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "../src/pages/RegisterPage";
import ListPage from "../src/pages/ListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HOmePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/listpage" element={<ListPage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
