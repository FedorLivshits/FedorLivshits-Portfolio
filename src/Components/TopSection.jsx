import React from 'react'
import photo from '../assets/images/profile-photo.jpg'
import {motion} from 'framer-motion'

const TopSection = () => {
    return (
        <section className="top">
            <div className="container">
                <div className="top__inner">
                    <div className="top__info">
                        <motion.h1 className="top__title"
                                   initial={{opacity: 0, x: -400}}
                                   animate={{
                                       opacity: 1,
                                       x: 0,
                                       transition: {delay: 0.2, duration: 0.4},
                                   }}>
                            Меня зовут Федор, <br/>
                            Я фронтенд-разработчик из Санкт-Петербурга
                        </motion.h1>
                        <motion.div className="top__text"
                                    initial={{opacity: 0, x: -400}}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {delay: 0.4, duration: 0.6},
                                    }}>
                            <p>
                                Разрабатываю отзывчивые, быстрые и удобные пользовательские интерфейсы,
                                основываясь на лучших
                                практиках использования современного JavaScript, TypeScript и React.
                            </p>

                        </motion.div>
                        <motion.button className="top__button"
                                       initial={{opacity: 0, x: -400}}
                                       animate={{
                                           opacity: 1,
                                           x: 0,
                                           transition: {delay: 0.6, duration: 0.8},
                                       }}>
                           Перейти к HeadHunter
                        </motion.button>
                    </div>
                    <motion.div className='top__image-wrapper'
                                initial={{opacity: 0, x: 400}}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {delay: 0.4, duration: 0.6},
                                }}>
                        <img className="top__image" src={photo} alt=""/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default TopSection
