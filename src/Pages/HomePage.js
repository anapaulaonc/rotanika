import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import rotanika from '../Rotanika.png'
import '../Styles/HomePage.css'

function HomePage({ setSessionId, setQuestion, setProgress }) {
    const navigate = useNavigate()

    const handleClick = () => {
        axios.get('http://127.0.0.1:8000/start').then((response) => {
            setSessionId(response.data.session_id)
            setQuestion(response.data.question.question)
            setProgress('0%')
            navigate('/question')
        })
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1 style={{ fontWeight: 'normal' }}> rotanika </h1>
                <div className='ana'>
                    <div className='home-card'>Olá, eu sou rotanika!</div>
                    <img src={rotanika} className='App-logo' alt='Rotanika' />
                    <div className='home-card'>
                        Pense em uma pessoa, eu irei adivinhá-la.
                    </div>
                </div>
                <button className='home-button' onClick={handleClick}>
                    Jogar
                </button>
            </header>
        </div>
    )
}

export default HomePage
