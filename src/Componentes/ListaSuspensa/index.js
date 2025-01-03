import styled from 'styled-components';
import { CampoContainer } from '../CampoTexto';

const ListaContainer = styled.select`
  border: none;
  border-radius: 10px;
  background: white;
  box-shadow: 10px 10px 10px rgba(0,0,0,.1);
  
  padding: 20px;
  margin: 0 0 15px 0;
  
  color: gray;
`;

function ListaSuspensa(props) {
  
  return(
    <CampoContainer>
      <label>{props.label}</label>
      <ListaContainer 
      value={props.valor}
      onChange={e=>props.aoAlterar(e.target.value)}
      required={props.obrigatorio}
      >
        <option></option>
        {props.itens.map(equipe=>(
        <option>
          {equipe}
        </option>
        ))}
      </ListaContainer>
    </CampoContainer>
      
    )
}

export default ListaSuspensa;