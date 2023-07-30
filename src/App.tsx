import "./App.scss";
import "./styles/scss/Font.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes/routes";
import SubNavbar from "./components/Navbar/SubNavbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const isBrowser = typeof window !== "undefined";

function App() {
  return (
    <>
      {isBrowser && (
        <>
          <Router>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Pages = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <div>
                        {route.path === "/sign-in" ||
                        route.path === "/sign-up" ? null : (
                          <>
                            <SubNavbar />
                            <Navbar />
                          </>
                        )}
                        <Pages />
                        {route.path === "/sign-in" ||
                        route.path === "/sign-up" ? null : (
                          <Footer />
                        )}
                      </div>
                    }
                  />
                );
              })}
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
