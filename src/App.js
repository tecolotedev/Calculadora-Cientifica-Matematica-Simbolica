import React,{useState} from 'react';
import {evaluate} from 'mathjs';
import Header from './Components/Header.jsx';
import Form from './Components/Form.jsx';

const App=()=> {
  const [resultado,setResultado] = useState(null);
  const [valorX,setValorX] = useState(null);
  let renRes,renNum = null
  if(resultado){
    
    renRes = <> 
              <h2>Resultado: </h2>
              {resultado.toString()}
            </>
    if(valorX){
      let scope={
        x:valorX
      }    
      let evaluacion = evaluate(resultado.toString(),scope)
      renNum=<>
              <h2>Resultado Numerico</h2>
              {evaluacion}
            </>
    }
  }
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form setResultado={setResultado} setValorX={setValorX}/>   
            {renRes}
            {renNum}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
