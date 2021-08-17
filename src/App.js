import React from 'react'
import './App.scss'
import Header from './Components/Header'
import TopSection from './Components/TopSection'
import Skills from './Components/Skills'
import Experience from './Components/Expirience'
import Projects from './Components/Projects'
import github from './assets/images/icons8-github-50.png'
import telegram from './assets/images/icons8-telegram-app-50.png'
import whatsapp from './assets/images/icons8-whatsapp-50.png'
import vk from './assets/images/icons8-vk-circled-50.png'
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
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__links">
                            <a className="footer__link" href="https://github.com/FedorLivshits">
                                <img src={github} alt="" className="footer__link-img"/>
                            </a>
                            <a className="footer__link" href="https://t.me/FedorLivshits">
                                <img src={telegram} alt="" className="footer__link-img"/>
                            </a>
                            <a className="footer__link" href="https://wa.me/79218864572">
                                <img src={whatsapp} alt="" className="footer__link-img"/>
                            </a>
                            <a className="footer__link" href="https://vk.com/fedorlivshits">
                                <img src={vk} alt="" className="footer__link-img"/>
                            </a>
                        </div>
                        <p className="footer__text">
                            Fedor Livshits Portfolio ©2021
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
