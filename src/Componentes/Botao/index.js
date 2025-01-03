import styled from 'styled-components';

const BotaoContainer = styled.button`
  align-self: end;
  background: #6276FD;
  border: none;
  border-radius: 10px;
  color: ${props => props.cor ||  "#000"};
  
  padding: 20px;
  font-weight: bolder;
`;

function Botao(props) {
  
  return(
      <BotaoContainer cor={props.cor}>
        {props.children}
      </BotaoContainer>
    )
}

export default Botao;