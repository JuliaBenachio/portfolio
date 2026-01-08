import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";

import { CardProjeto, LinkBotao } from "./styles";

const Projeto = () => (
  <CardProjeto>
    <Titulo>Projeto</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </CardProjeto>
)

export default Projeto;
