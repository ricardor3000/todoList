import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [Listado, setListado] = useState([]);
  const [textoInput, settextoInput] = useState("");

  function handleInputChange(e){
   // console.log()
    settextoInput(e.target.value)
  }

  function capturarEventoOnClick(e){

    if(textoInput.length > 0){
        
    let listaNueva = Array.from(Listado);
    listaNueva.push(textoInput);
    setListado(listaNueva)
    }

  };

  function capturarOnClickEliminar(index){
    let listaNueva = Array.from(Listado);
    listaNueva.splice(index, 1)
    setListado(listaNueva)
  }

  return (
    <>
     <h1>Todo list</h1>
     <input onChange={handleInputChange} type="text" />
     <button onClick={capturarEventoOnClick}>Agregar Item</button>

    <ul>
      {
        Listado.map((item, index)=>{
          return <li key={index}>{item} <button onClick={() => capturarOnClickEliminar(index)}>Eliminar elemento</button> </li>
        })
      }
    </ul>


    </>
  )
}

export default App
