import styled from 'styled-components';
import CardTimes from '../CardTimes'

export const TimeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.backColor || "#FFF"};
  padding: 20px 10px;
  
  & h3{
    padding: 0;
    margin: 0;
  }
  
  & hr{
    margin: 5px 0 20px 0;
    width: 20px;
    border: 1px solid ${props => props.color || "#000"};
    border-radius: 50px;
  }
`;

const SessaoTimes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const Time = (props)=>{
  return(
      (props.colaborador.length > 0) ? <TimeContainer 
      color={props.color}
      backColor={props.backColor}
      >
        <h3>{props.nome}</h3>
        <hr color={props.cor}/>
        <SessaoTimes>
          {props.colaborador.map( colab=>(
            <CardTimes 
            cor={props.color}
            nome={colab.nome}
            cargo={colab.cargo}
            imagem={colab.imagem}
            />
          ))}
        </SessaoTimes>
        
      </TimeContainer>
      : ''
    )
}

export default Time;
