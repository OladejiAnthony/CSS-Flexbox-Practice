import Ex from "../src/components/Examples/Ex"
import './App.css';
import Dra from "./components/Examples/Dra";
import Ges from "./components/Examples/Ges";
import KeyF from "./components/Examples/KeyF";
import Mv from "./components/Examples/Mv";

function App() {
  return (
    <div className="App">
      <Ex />
      <KeyF />
      <Ges />
      <Dra />
      <Mv /> 
    </div>
  );
}

export default App;

