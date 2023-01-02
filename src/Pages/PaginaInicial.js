import Formulario from '../Components/Formulario';
import Treinos from '../Components/Treinos';
import '../Style/GlobalStyle.css'

function PaginaInicial() {
  return (
    <>
      <h1>GymWeek</h1>
      <Formulario />
      <Treinos/>
    </>
  );
}

export default PaginaInicial;
