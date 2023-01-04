import BotaoFormulario from './BotaoFormulario'
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
            <h2 className='formulario-exercicios__titulo'>Exercícios</h2>
            <div className='formulario-exercicios'>
                <div className='formulario-exercicio'>
                    <label for='exercicio1'>Exercício 1</label>
                    <input
                        name='exercicio1'
                        type='text'
                        id='exercicio1'
                        placeholder='Supino reto...'
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio2'>Exercício 2</label>
                    <input
                        name='exercicio2'
                        type='text'
                        id='exercicio2'
                        placeholder='Supino inclinado...'
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio3'>Exercício 3</label>
                    <input
                        name='exercicio3'
                        type='text'
                        id='exercicio3'
                        placeholder='Peck deck...'
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio4'>Exercício 4</label>
                    <input
                        name='exercicio4'
                        type='text'
                        id='exercicio4'
                        placeholder='Crossover...'
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio5'>Exercício 5</label>
                    <input
                        name='exercicio5'
                        type='text'
                        id='exercicio5'
                        placeholder='Pullover...'
                    />
                </div>
            </div>
            <p className='formulario__dica'>Dica: Segue a dica de que o recomendado é colocar entre quatro e cinco exercícios</p>
            <BotaoFormulario />
        </form>
    )
}