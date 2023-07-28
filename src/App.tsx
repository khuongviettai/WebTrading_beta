import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import NotFound from "./components/Error/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes/mainRoutes";
import "./styles/scss/app.scss";

const isBrowser = typeof window !== "undefined";

function App() {
  return (
    <>
      <SubNavbar />
      <Navbar />
      {isBrowser && (
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Pages = route.component;
              return (
                <Route key={index} path={route.path} element={<Pages />} />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
      <Footer />
    </>
  );
}

export default App;
