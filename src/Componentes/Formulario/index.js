import styled from 'styled-components';
import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'

const FormularioContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
`;

const TagForm = styled.form`
  background: rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  
  width: 80%;
`;

const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bolder;
  user-select: none;
`;

function Formulario(props) {
  
  const aoEnviar =(e)=>{
  e.preventDefault();
  alert(`o colaborador ${nome}, no cargo de ${cargo} do time de ${time}, foto '${imagem}' \n Fez o envio do formulario`);
  props.aoCadastrar({
    nome,
    cargo,
    imagem,
    time
  });
  setNome("");
  setCargo("");
  setImagem("");
  setTime("");
  }
  
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  
  return(
      <FormularioContainer>
        <TagForm onSubmit={aoEnviar}>
          <Titulo>Preencha com os dados para criar um card do colaborador</Titulo>
          
          <CampoTexto 
          label="nome:"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={valor=>setNome(valor)}
          obrigatorio="true"
          />
          <CampoTexto 
          label="cargo:"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={valor=>setCargo(valor)}
          obrigatorio="true"
          />
          <CampoTexto 
          label="URL da Foto:"
          placeholder="URL: https://..."
          valor={imagem}
          aoAlterar={valor=>setImagem(valor)}
          />
          
          <ListaSuspensa 
          label="Times:"
          itens={props.times}
          valor={time}
          aoAlterar={valor=>setTime(valor)}
          obrigatorio="true"
          />
          
          <Botao
          cor="#FFFFFF"
          >
            Criar Card
          </Botao>
          
        </TagForm>
      </FormularioContainer>
    )
}

export default Formulario;