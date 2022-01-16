import "./App.css";
import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main.js";
import { useInView } from "react-intersection-observer";

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
    </div>
  );
}

export default App;
