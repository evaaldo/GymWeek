import Botao from './Botao'
import './style.css'

export default function Formulario() {
    return(
        <form className='formulario'>
            <div className='formulario-treino-dia'>
                <div className='formulario-treino'>
                    <label for='treino'>Treino</label>
                    <input
                        name='treino'
                        type='text'
                        id='treino'
                        placeholder='Peito...'
                    />
                </div>
                <div className='formulario-dia'>
                    <label for='dia'>Dia do treino</label>
                    <input
                        name='dia'
                        type='text'
                        id='dia'
                        placeholder='Segunda-feira...'
                    />
                </div>
            </div>
            <label for='exercicios'>Exercícios</label>
            <input
                name='exercicios'
                type='text'
                id='exercicios'
                placeholder='Supino reto...'
            />
            <Botao />
        </form>
    )
}