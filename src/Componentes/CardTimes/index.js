import styled from 'styled-components';

const CardContainer = styled.div`
  width: 130px;
  height: 180px;
  background: white;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.01);
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0,0,0,.1);
`;

const FotoContainer= styled.div`
  background: linear-gradient(180deg, ${props => props.color || "lightgray"} 50%, #fff 50%);
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  
  & img{
    width: 80px;
    height: 80px;
    background: black;
    border-radius: 50%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 10x 10px 10px;
  
  & h4{
    font-size: 14px;
  }
  
  & h5 {
    padding: 5px 0 20px 0;
    font-size: 10px;
  }
  
  & h4,h5{
    margin: 0;
    padding: 0;
  }
`

const CardTimes = ({nome,cargo,imagem,cor})=>{
  return(
      <CardContainer>
        <FotoContainer color={cor}>
          <img src={imagem} alt={nome}/>
        </FotoContainer>
        <InfoContainer>
          <h4>{nome}</h4>
          <h5>{cargo}</h5>
        </InfoContainer>
      </CardContainer>
    )
}

export default CardTimes;

