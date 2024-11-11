import "./App.css";
import "./styles/Card.css";
import Card from "./components/Card";

function App() {
  // const persona_1 = {
  //   nombre: "Alicia",
  //   apellido: "Romero",
  //   edad: "34",
  // };
  // const nombreCompleto = (persona) => {
  //   return persona.nombre + " " + persona.apellido;
  // };
  // const saludar = (persona) => {
  //   return persona ? <h2>Hola, {nombreCompleto(persona)}!</h2> : <h2>Hola</h2>;
  // };

  // const user = {
  //   nombre: "Juan",
  //   avatar: "https://mighty.tools/mockmind-api/content/human/60.jpg",
  // };

  return (
    <div className="App">
      {/* {saludar(persona_1)}
      {saludar()}
      <img src={user.avatar} alt="User Avatar" /> */}
      <div className="cards-container">
        <Card
          name="Juan"
          rol="Desarrollador"
          email="ef@gm.com"
          phone="1234567890"
        ></Card>
        <Card
          name="Ana"
          rol="Diseñadora"
          email="fhiu@gmail.com"
          phone="0987654321"
        ></Card>
        <Card
          name="Carlos"
          rol="Gerente"
          email="carlos@empresa.com"
          phone="1122334455"
        ></Card>

      </div>
    </div>
  );
}

export default App;
