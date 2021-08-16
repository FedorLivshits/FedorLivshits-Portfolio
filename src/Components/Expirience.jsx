import React from 'react'
import SlideInWhenVisible from './SlideInWhenVisible'

const Experience = () => {
    return (
        <section className="experience">
            <div className="container">
                <h3 className="experience__title">
                    Мой опыт
                </h3>
                <div className="experience__items">
                    <div className="experience__item">
                        <SlideInWhenVisible transition={{duration: 2}}>
                            <p className="experience__item-text">
                                <b>2018</b> - Прошел курсы по веб-дизайну от WDI Design School, подработка на фрилансе в
                                качестве дизайнера
                            </p>
                        </SlideInWhenVisible>
                    </div>
                    <div className="experience__item">
                        <SlideInWhenVisible transition={{duration: 2}}>
                            <p className="experience__item-text">
                                <b>2019</b> - Изучил верстку, продолжил подрабатывать на фрилансе, но уже в качестве
                                верстальщика
                            </p>
                        </SlideInWhenVisible>
                    </div>
                    <div className="experience__item">
                        <SlideInWhenVisible transition={{duration: 2}}>
                            <p className="experience__item-text">
                                <b>2020</b> (первая половина) - Прошел курсы на платформе Udemy по Javascript, начал
                                увлекаться фронтенд
                                разработкой
                            </p>
                        </SlideInWhenVisible>
                    </div>
                    <div className="experience__item">
                        <SlideInWhenVisible transition={{duration: 2}}>
                            <p className="experience__item-text">
                                <b>2020</b> (вторая половина) - Активное изучение фронтенд направления, глубокое
                                изучение
                                JavaScript,
                                погружение в React и его составляющие
                            </p>
                        </SlideInWhenVisible>
                    </div>
                    <div className="experience__item">
                        <SlideInWhenVisible transition={{duration: 2}}>
                            <p className="experience__item-text">
                                <b>2021</b> - Фронтенд-разработчик
                            </p>
                        </SlideInWhenVisible>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
