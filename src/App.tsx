import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CalcIMC } from "./Pages/CalcIMC";
import { Home } from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import { RegisterPage } from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/imc" Component={CalcIMC} />
        <Route path="/login" Component={CalcIMC} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
