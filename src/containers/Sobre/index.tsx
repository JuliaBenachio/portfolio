import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">Meu nome é Julia Benachio, sou desenvolvedora front-end e estudante de ciência da computação.</Paragrafo>
    <Paragrafo tipo="principal">Tenho experiência com React, TypeScript, JavaScript, HTML e CSS.</Paragrafo>
    <Paragrafo tipo="principal">Adoro criar interfaces bonitas e funcionais!</Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=JuliaBenachio&show_icons=true&theme=synthwave" alt="GitHub stats"/>
      <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=JuliaBenachio&layout=compact&theme=synthwave" alt="Top languages"/>
    </GithubSecao>
  </section>
)

export default Sobre;
