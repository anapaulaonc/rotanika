import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPersonPage from './Pages/AddPersonPage'
import GuessPage from './Pages/GuessPage'
import HomePage from './Pages/HomePage'
import QuestionPage from './Pages/QuestionPage'

import { useState } from 'react'

const RoutesComponent = () => {
    const [sessionId, setSessionId] = useState(null)
    const [person, setPerson] = useState('')
    const [question, setQuestion] = useState('')
    const [progress, setProgress] = useState('0%')

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <HomePage
                            sessionId={sessionId}
                            setSessionId={setSessionId}
                            setQuestion={setQuestion}
                            setProgress={setProgress}
                        />
                    }
                    path='/'
                    exact
                />
                <Route
                    element={
                        <QuestionPage
                            sessionId={sessionId}
                            setSessionId={setSessionId}
                            setPerson={setPerson}
                            question={question}
                            setQuestion={setQuestion}
                            progress={progress}
                            setProgress={setProgress}
                        />
                    }
                    path='/question'
                />
                <Route
                    element={
                        <AddPersonPage sessionId={sessionId} person={person} />
                    }
                    path='/add-person'
                />

                <Route
                    element={
                        <GuessPage
                            person={person}
                            sessionId={sessionId}
                            setQuestion={setQuestion}
                            setProgress={setProgress}
                        />
                    }
                    path='/guess'
                />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent
