import { P } from './styles';

export type Props = {
  children: React.ReactNode;
  tipo?: 'principal' | 'secundario'
  fontSize?: number;
};

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
<P tipo={tipo} fontSize={fontSize}>{children} </P>
)


export default Paragrafo;
