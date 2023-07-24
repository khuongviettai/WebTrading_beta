import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import "./styles/scss/app.scss";

function App() {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
