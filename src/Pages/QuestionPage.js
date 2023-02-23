import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import progressBar from '../Group.svg'
import rotanika from '../Rotanika.png'
import '../Styles/HomePage.css'

function QuestionPage({
    sessionId,
    setPerson,
    question,
    setQuestion,
    progress,
    setProgress,
}) {
    const navigate = useNavigate()

    const handleAnswer = (event) => {
        axios
            .post(`https://akinatorapi-1-g4100243.deta.app/answer/${sessionId}`, {
                answer: event.target.value,
            })
            .then((response) => {
                if (response.data.done) {
                    setPerson(response.data.question)
                    navigate('/guess')
                }
                const percentage = response.data.progress * 100
                setProgress(`${percentage.toFixed(2)}%`)
                setQuestion(response.data.question)
            })
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1 style={{ fontWeight: 'normal' }}> rotanika </h1>
                <div className='ana'>
                    <img src={rotanika} className='App-logo' alt='Rotanika' />
                    <div className='middle'>
                        <div className='card'>{question}</div>
                        <div className='collum'>
                            <button
                                className='question-button'
                                onClick={handleAnswer}
                                value={1}
                            >
                                Sim
                            </button>
                            <button
                                className='question-button'
                                onClick={handleAnswer}
                                value={-1}
                            >
                                Não
                            </button>
                            <button
                                className='question-button'
                                onClick={handleAnswer}
                                value={0}
                            >
                                Não sei
                            </button>
                        </div>
                    </div>
                    <img
                        src={progressBar}
                        className='App-logo'
                        alt='ProgressBar'
                    />
                </div>
                <div
                    className='progress-bar'
                    style={{
                        backgroundImage: `linear-gradient(90deg, #FFFFFF ${progress}, rgba(255, 255, 255, 0) ${progress})`,
                    }}
                ></div>
            </header>
        </div>
    )
}

export default QuestionPage
