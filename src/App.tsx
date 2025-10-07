import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CalcIMC } from "./Pages/CalcIMC";
import { Home } from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/imc" Component={CalcIMC} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
