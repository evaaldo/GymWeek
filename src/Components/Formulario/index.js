import Botao from './Botao'
import './style.css'

export default function Formulario() {
    return(
        <form>
            <label for='treino'>Treino</label>
            <input
                name='treino'
                type='text'
                id='treino'
                placeholder='Insira o seu treino aqui...'
            />
            <label for='dia'>Dia do treino</label>
            <input
                name='dia'
                type='text'
                id='dia'
                placeholder='Insira o dia do treino...'
            />
            <label for='exercicios'>Exercícios</label>
            <input
                name='exercicios'
                type='text'
                id='exercicios'
                placeholder='Insira os exercicios do treino...'
            />
            <Botao />
        </form>
    )
}