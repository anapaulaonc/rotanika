import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import rotanika from '../Rotanika.png'
import '../Styles/HomePage.css'

function QuestionPage({ sessionId, person }) {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const feature = e.target[1].value

        const data = {
            name,
            feature,
        }

        axios
            .post(`https://zcnj6e.deta.dev/person/${sessionId}`, data)
            .then((res) => {
                navigate('/')
            })
    }
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 style={{ fontWeight: 'normal' }}> rotanika </h1>
                <div className='ana'>
                    <img src={rotanika} className='App-logo' alt='Rotanika' />
                    <div className='middle'>
                        <div className='card'>
                            Poxa, ajude-me a acertar na próxima
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                className='text'
                                type='text'
                                placeholder='Nome da pessoa que você pensou'
                            />
                            <textarea
                                className='text2'
                                placeholder={`Escreva uma característica que diferencie essa pessoa do(a) ${person}`}
                            />
                            <button className='question-button' type='submit'>
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default QuestionPage
