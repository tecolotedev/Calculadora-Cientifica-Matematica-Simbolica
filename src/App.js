import React,{useState} from 'react';

import Header from './Components/Header.jsx';
import Form from './Components/Form.jsx';

const App=()=> {
  const [resultado,setResultado] = useState(null);
  let renRes = null
  if(resultado)renRes = <> 
      <h2>Resultado: </h2>
      {resultado.toString()}
  </>
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form setResultado={setResultado}/>   
            {renRes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
