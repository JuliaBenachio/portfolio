import { Titulo as TituloEstilizado } from './styles';

export type Props = {
  children: string;
  fontSize?: number;
};

const Titulo = (props: Props) => (
  <TituloEstilizado fontSize={props.fontSize ?? 14}>{props.children} </TituloEstilizado>
)

export default Titulo;
