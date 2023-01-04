import Botao from '../Formulario/BotaoFormulario'
import BotaoTreinos from './BotaoTreinos'
import './style.css'
import Peito from './Treino-de-peito.jpeg'

export default function Treinos() {
    return(
        <>
            <h1 className='treinos__titulo'>Treinos da semana</h1>
            <div className='treinos'>
                <div className='treinos-container'>
                    <h2 className='treinos-container__treino'>Treino de peito</h2>
                    <img className='treinos-container__imagem' src={Peito} alt='Peito'/>
                    <h4 className='treinos-container__data'>Segunda-feira</h4>
                    <ul className='treinos-container__lista'>
                        <li className='treinos-container__item'>Supino reto</li>
                        <li className='treinos-container__item'>Supino inclinado</li>
                        <li className='treinos-container__item'>Peck deck</li>
                        <li className='treinos-container__item'>Pull over</li>
                        <li className='treinos-container__item'>Crucifixo</li>
                    </ul>
                    <BotaoTreinos className='treinos__botao-remover'/>
                </div>
            </div>
        </>
    )
}