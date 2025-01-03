import styled from 'styled-components';

export const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  & label{
    font-weight: normal;
    text-transform: capitalize;
    margin: 0 0 0 10px;
  }
`;

const CampoInput = styled.input`
  border: none;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 5px 10px rgba(0,0,0,.1);
  
  padding: 20px;
  margin: 0 0 15px 0;
  
  & placeholder{
    color: gray;
  }
`;


function CampoTexto(props) {
  
  const aoDigitar=(e)=>{
    props.aoAlterar(e.target.value);
  }

  return(
      <CampoContainer>
        <label>{props.label}</label>
        <CampoInput
        value={props.valor}
        onChange={aoDigitar}
        type="text"
        placeholder={props.placeholder}
        required={props.obrigatorio}
        />
      </CampoContainer>
    )
}

export default CampoTexto;