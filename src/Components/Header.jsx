import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Header = () => {
    return (
        <motion.header className="header"
                       initial={{opacity: 0}}
                       animate={{
                           opacity: 1,
                           transition: {delay: 0.2, duration: 0.4},
                       }}>
            <div className="header__container">
                <div className="header__inner">
                    <nav className="header__menu">
                        <ul className='header__menu-list'>
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="https://github.com/FedorLivshits">GitHub</a>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="#">Headhunter</a>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-link" href="#works-section">Портфолио</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
