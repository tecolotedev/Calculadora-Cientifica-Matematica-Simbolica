import React,{useState} from  'react';
import axios from 'axios';
const Form = ({setResultado,setValorX}) =>{
  const [expresion,setExpresion] = useState(null);
  const [operacion,setOperacion] = useState("simplify");
  const hacerConsulta = (e)=>{
    e.preventDefault();
    let url = `https://newton.now.sh/${operacion}/${expresion}`;
    axios.get(url).then(res=>{setResultado(res.data.result);});

  }
  let inputX=null;
  if(operacion==='derive'||operacion==='integrate'){
    inputX = <div className="form-group col-2 d-flex align-items-center">
                <input className="form-control" placeholder="valor de x" onChange={e=>{setValorX(e.currentTarget.value)}}/>
              </div>
  }else inputX = null;

  return(
    <form onSubmit={hacerConsulta}>
      <div className="row">
        <div className="form-group col-4">
          <label>Expresión a usar: </label>
          <input className="form-control " type="text" placeholder="5(2x+5/x)" onChange={e=>{setExpresion(e.currentTarget.value);}}/>
        </div>
        <div className="form-group col-4">
          <label>Operacion Matematica: </label>
          <select className="form-control" placeholder="elija una opcion" onChange={e=>{setOperacion(e.currentTarget.value);}}>
            <option value="simplify">Simplificar "2^2+2(2)"</option>
            <option value="factor">Factorizar "x^2 + 2x"</option>
            <option value="derive">Derivar "x^2 + 2x"</option>
            <option value="integrate">Integar "x^2+2x"</option>
            <option value="zeroes">Encontrar raiz "x^2+2x"</option>
            <option value="tangent">Encontrar Tangente "2lx^3"</option>
            <option value="area">Area bajo la curva "2:4lx^3"</option>
            <option value="cos">Coseno "pi"</option>
            <option value="sin">Seno "0"</option>
            <option value="tan">Tangente "0"</option>
            <option value="arccos">Coseno Inverso "1"</option>
            <option value="arcsin">Seno Inverso "0"</option>
            <option value="arctan">Tangente Inverso "0"</option>
            <option value="abs">Valor Absoluto "-1"</option>
            <option value="log">Logaritmo "2l8"</option>
          </select>
          <small className="form-text text-muted"> **En cada opcion hay un ejemplo de input</small>
        </div>
        {inputX}
        <div className="form-group col-2 d-flex align-items-center">
          <button className="btn btn-primary btn-block">Calcular</button>
        </div>
      </div>
    </form>
  );
}

export default Form;