import Ex from "./components/Examples/Anim"
import './App.css';
import Dra from "./components/Examples/Dra";
import Ges from "./components/Examples/Ges";
import KeyF from "./components/Examples/KeyF";
import Mv from "./components/Examples/Mv";
import STA from "./components/Examples/STA";

function App() {
  return (
    <div className="App">
      <Ex />
      <KeyF />
      <Ges />
      <Dra />
      <Mv /> 
      <STA />
    </div>
  );
}

export default App;

