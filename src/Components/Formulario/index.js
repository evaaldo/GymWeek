import { useState } from 'react'
import './style.css'
import BotaoTreinos from './BotaoTreinos'
import './style.css'
import Peito from './Treino-de-peito.jpeg'

export default function Formulario() {

    const [treino, setTreino] = useState()
    const [dia, setDia] = useState()
    const [primeiro, setPrimeiro] = useState()
    const [segundo, setSegundo] = useState()
    const [terceiro, setTerceiro] = useState()
    const [quarto, setQuarto] = useState()
    const [quinto, setQuinto] = useState()

    return(
        <>
        <form className='formulario' onSubmit={console.log(treino)}>
            <div className='formulario-treino-dia'>
                <div className='formulario-treino'>
                    <label for='treino'>Treino</label>
                    <input
                        name='treino'
                        type='text'
                        id='treino'
                        placeholder='Peito...'
                        onChange={(e) => setTreino(e.target.value)}
                    />
                </div>
                <div className='formulario-dia'>
                    <label for='dia'>Dia do treino</label>
                    <input
                        name='dia'
                        type='text'
                        id='dia'
                        placeholder='Segunda-feira...'
                        onChange={(e) => setDia(e.target.value)}
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
                        onChange={(e) => setPrimeiro(e.target.value)}
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio2'>Exercício 2</label>
                    <input
                        name='exercicio2'
                        type='text'
                        id='exercicio2'
                        placeholder='Supino inclinado...'
                        onChange={(e) => setSegundo(e.target.value)}
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio3'>Exercício 3</label>
                    <input
                        name='exercicio3'
                        type='text'
                        id='exercicio3'
                        placeholder='Peck deck...'
                        onChange={(e) => setTerceiro(e.target.value)}
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio4'>Exercício 4</label>
                    <input
                        name='exercicio4'
                        type='text'
                        id='exercicio4'
                        placeholder='Crossover...'
                        onChange={(e) => setQuarto(e.target.value)}
                    />
                </div>
                <div className='formulario-exercicio'>
                    <label for='exercicio5'>Exercício 5</label>
                    <input
                        name='exercicio5'
                        type='text'
                        id='exercicio5'
                        placeholder='Pullover...'
                        onChange={(e) => setQuinto(e.target.value)}
                    />
                </div>
            </div>
            <p className='formulario__dica'>Dica: Segue a dica de que o recomendado é colocar entre quatro e cinco exercícios</p>
            <button type='submit' className='botao__formulario'>Adicionar</button>
        </form>
        <h1 className='treinos__titulo'>Treinos da semana</h1>
        <div className='treinos'>
            <div className='treinos-container'>
                <h2 className='treinos-container__treino'>{treino}</h2>
                <img className='treinos-container__imagem' src={Peito} alt='Peito'/>
                <h4 className='treinos-container__data'>{dia}</h4>
                <ul className='treinos-container__lista'>
                    <li className='treinos-container__item'>{primeiro}</li>
                    <li className='treinos-container__item'>{segundo}</li>
                    <li className='treinos-container__item'>{terceiro}</li>
                    <li className='treinos-container__item'>{quarto}</li>
                    <li className='treinos-container__item'>{quinto}</li>
                </ul>
                <BotaoTreinos className='treinos__botao-remover'/>
            </div>
        </div>
        </>
    )
}