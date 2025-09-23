import { useState } from "react";
import { Card } from "./components/Card";
import { InputForm } from "./components/InputForm";
import { Btn } from "./components/UI/Button";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [imcCategory, setImcCategory] = useState("");

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (weight && height) {
      const alturaMetros = parseFloat(height) / 100;
      const imc = parseFloat(weight) / (alturaMetros * alturaMetros);
      setResult(imc.toFixed(2));
      setClassIMC(imc);
    }
  };

  const setClassIMC = (valorIMC: number) => {
    if (valorIMC < 18.5) {
      setImcCategory("Baixo peso");
    } else if (valorIMC >= 18.5 && valorIMC < 25) {
      setImcCategory("Peso normal");
    } else if (valorIMC >= 25 && valorIMC < 30) {
      setImcCategory("Sobrepeso");
    } else if (valorIMC >= 30 && valorIMC < 35) {
      setImcCategory("Obesidade grau 1");
    } else if (valorIMC >= 35 && valorIMC < 40) {
      setImcCategory("Obesidade grau 2");
    } else {
      setImcCategory("Obesidade grau 3");
    }
  };

  return (
    <div className="container">
      <Card imc={result} category={imcCategory}>
        <form onSubmit={formOnSubmit}>
          <InputForm
            id="peso"
            label="Peso:"
            type="number"
            placeholder="Ex: 70"
            value={weight}
            min={1}
            onChange={(e) => setWeight(e.target.value)}
            step={0.1}
            required
          />
          <InputForm
            id="altura"
            label="Altura em cm:"
            type="number"
            placeholder="Ex: 180 = 1,80m"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min={1}
            step={1}
            required
          />
          <Btn disabled={weight && height != "" ? false : true} type="submit">
            Calcular
          </Btn>
        </form>
      </Card>
    </div>
  );
}

export default App;
