import React from 'react'
import './App.scss'
import Header from './Components/Header'
import TopSection from './Components/TopSection'
import Skills from './Components/Skills'
import Experience from './Components/Expirience'
import Projects from './Components/Projects'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <TopSection/>
                <Skills/>
                <Experience/>
                <Projects/>
            </main>
            <footer className="footer">
                <p className="footer__text">
                    Fedor Livshits Portfolio Website ©2021
                </p>
            </footer>
        </div>
    )
}

export default App
