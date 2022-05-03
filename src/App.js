import "./App.css";
import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main.js";
import { useInView } from "react-intersection-observer";
import Footer from "./Components/Footer";

function App() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    // initialInView: true,
  });
  return (
    <div className="App">
      <div ref={ref}>
        <Navbar inView={inView} />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
