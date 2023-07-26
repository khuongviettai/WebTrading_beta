import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes/mainRoutes";

import "./styles/scss/app.scss";

function App() {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Pages = route.component;
            return <Route key={index} path={route.path} element={<Pages />} />;
          })}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
