import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import rotanika from '../Rotanika.png'
import '../Styles/HomePage.css'
import lamp from '../lamp.png'

function GuessPage({ person, sessionId, setQuestion, setProgress }) {
    const navigate = useNavigate()

    const handleClick = () => {
        axios
            .post(`https://zcnj6e.deta.dev/continue/${sessionId}`)
            .then((response) => {
                console.log(response.data)
                console.log(response.data.done)
                if (response.data.done) {
                    navigate('/add-person')
                } else {
                    setQuestion(response.data.question)
                    const percentage = response.data.progress * 100
                    setProgress(`${percentage.toFixed(2)}%`)
                    navigate('/question')
                }
            })
    }
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 style={{ fontWeight: 'normal' }}> rotanika </h1>
                <div className='ana'>
                    <img src={rotanika} className='App-logo' alt='Rotanika' />
                    <div className='middle'>
                        <div className='card-guess'>
                            Eu acho que você pensou em...
                        </div>
                        <div className='character'>{person}</div>

                        <div className='row'>
                            <Link class to='/'>
                                <button className='button'>Acertou</button>
                            </Link>
                            <img className='lamp' src={lamp} alt='Rotanika' />
                            {/* <Link to='/add-person'> */}
                            <button className='button' onClick={handleClick}>
                                Errou
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default GuessPage
