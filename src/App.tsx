import { Card } from "./components/Card";
import { InputForm } from "./components/InputForm";
import { Btn } from "./components/UI/Button";

function App() {
  return (
    <div className="container">
      <Card
        header="Calculo de IMC"
        footer={<Btn onClick={() => console.log("apertado")}>Confirmar</Btn>}
      >
        <InputForm id="peso" label="Peso:" type="number" step={0.01} />
        <InputForm id="altura" label="Altura:" type="number" step={0.01} />
      </Card>
    </div>
  );
}

export default App;
