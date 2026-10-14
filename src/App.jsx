import './App.css'
import Contador from './components/Contador';
import Info from './components/Info';
import Skills from './components/Skills';

function App() {
  const info = {
    nombre: "María Isabel Pérez Cruz",
    bio: "Soy principiante en programación web, me gusta el diseño y las bases de datos",
    edad: 21
  }

  return (
    <div className='contenedor'>
      <Info datos={info} />
      <Skills/>
      <Contador/>

    </div>
  );

}

export default App
