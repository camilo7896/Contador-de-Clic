/* eslint-disable react/jsx-no-undef */
  import './App.css';
  import Boton from './componentes/boton';
  import Contador from './componentes/Contador'
  import  freeCodeCampLogo from './imagenes/0028_t_imperial-dragons-logo_7.png';
  import { useState } from 'react';

  function App() {

    const [numClic, setNumClics] = useState(0); 

    const manejarClic = () => {
      setNumClics(numClic + 1);
    }

    const reiniciarContador = () => {
      setNumClics(0);
    }

    return (
      <div className="App">
        <div className='freecodecamp-logo'>
      <img 
      className='freecodecamp-logo'
      src={freeCodeCampLogo}
      alt='logo de freecodecamp'
      />
        </div>

      <div className='contenedor-principal'>
      
      <Contador numClic={numClic}/>
     
        <div className="btns">
        <Boton
        className="boton"
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton
         className="boton"
        texto={'Reiniciar'}
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
        </div>
        </div>   
      </div>
    );
  }

  export default App;
