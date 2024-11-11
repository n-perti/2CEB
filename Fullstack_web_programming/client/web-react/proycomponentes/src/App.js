// import logo from './logo.svg';
// import './App.css';
// // import Saludo from './components/Saludo';
// // import EligeBoton from './components/EligeBoton';
// import './styles/EligeBoton.css';
// // import Suma from './components/Suma';
// // import Mensaje from './components/Mensaje';
// // import Peoplelist from './components/Peoplelist';
// import Eventos from './components/Eventos';
// import Suma2 from './components/Suma2';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//           {/* <Saludo nombre="Juan" />
//           <Saludo nombre="Ana" />
//           <Saludo nombre="Pedro" />
//           <EligeBoton className= "button"/>
//           <Suma /> */}
//           {/* <Mensaje />
//           <Peoplelist /> */}
//           <Eventos />
//           <Suma2
//             numA={2}
//             numB={3}
//             />
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import Contador from './components/Contador';
import FormularioSimple from './components/FormularioSimple';
import Suma from './components/Suma';
import Suma2 from './components/Suma2';
function App() {
  const handleSumaResuelta = (resultado) => {
    console.log(`Se ha resuelto la suma con resultado: ${resultado}`);
  }

  const handleEnviaData = (data) => {
    console.log(`Se ha enviado el formulario con los datos: ${JSON.stringify(data)}`);
  }


  return (
    <div className="App">
      <Suma2 numA={3} numB={4} sumaResuelta={handleSumaResuelta} />
      <Suma2 numA={51} numB={93} sumaResuelta={handleSumaResuelta} />
      <Contador informaResultado={handleSumaResuelta} />
      <FormularioSimple enviaData={handleEnviaData} />
    </div>
  );
}

export default App;