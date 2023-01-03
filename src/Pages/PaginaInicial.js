import Cabecalho from '../Components/Cabecalho';
import Formulario from '../Components/Formulario';
import Treinos from '../Components/Treinos';
import '../Style/GlobalStyle.css'

function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <Formulario />
      <Treinos/>
    </>
  );
}

export default PaginaInicial;
