import React from 'react'
import ProjectCard from './ProjectCard'
import movieMain from '../assets/images/movie-app-1.png'
import shopMain from '../assets/images/shop-app-1.png'
import networkMain from '../assets/images/network-app-1.png'
import weatherMain from '../assets/images/weather-app-1.png'
import calculatorMain from '../assets/images/calculator-app-1.png'
import furnitureMain from '../assets/images/furniture-site-1.png'
import {motion} from 'framer-motion'

const Projects = () => {
    return (
        <section className="works" id="works-section">
            <div className="container">
                <motion.h3 className="works__title"
                           initial={{opacity: 0, x: -400}}
                           animate={{
                               opacity: 1,
                               x: 0,
                               transition: {delay: 0.2, duration: 0.4},
                           }}>
                    Мое портфолио
                </motion.h3>
                <div className='works__items'>
                    <ProjectCard title={'Приложение MovieApp'} appImage={movieMain}
                                 tech={'React/Redux, JavaScript, SCSS, React-Bootstrap'} date={2021}
                                 text={'В этом приложении я использовал открытое API TMDB. Реализован роутинг, постраничная пагинация, запросы к api из поисковых строк. Реализован посимвольный запрос к базе данных в шапке сайта, отдельные GET-запросы(фильмы по категориям, детали конкретного фильма, информация об актерах), использованы хуки (useState, useEffect). Для связи с Redux использован HOC Connect, предоставляемый библиотекой react-redux. Реализовано сохранение понравившихся фильмов в localStorage браузера. Приложение адаптивное, сделан акцент на удобство мобильной версии, для анимаций использована библиотека framer-motion'}
                                 webSiteLink={'https://movie-app-react-redux.vercel.app/'}
                                 githubLink={'https://github.com/FedorLivshits/MovieApp-React-Redux'}/>
                    <ProjectCard title={'Онлайн-магазин Everpress'} appImage={shopMain}
                                 tech={'React/Redux, TypeScript, Styled-Components'} date={2021}
                                 text={'Данное приложение написано на TypeScript, для стилизации выбрана библиотека styled-components. Реализован роутинг, порционная выдача товара по кнопке, взаимодействие с избранным и корзиной. Использованы хуки (useState, useEffect). Для связи с Redux использованы хуки useSelector и useDispatch, предоставляемые библиотекой react-redux. Реализована валидация формы оформления заказа при помощи библиотеки formic. Реализовано сохранение товара в избранном и товара в корзине в localStorage браузера. Приложение адаптивное, сделан акцент на удобство мобильной версии, для анимаций использована библиотека framer-motion'}
                                 webSiteLink={'https://designer-clothing-shop-react.vercel.app/'}
                                 githubLink={'https://github.com/FedorLivshits/DesignerClothingShopReact'}/>
                    <ProjectCard title={'Социальная сеть'} appImage={networkMain}
                                 tech={'React/Redux, TypeScript, SCSS, React-Bootstrap'} date={2020}
                                 text={'Данное приложение написано на TypeScript, для стилизации использован препроцессор SCSS и библиотека react-bootstrap. Реализована, аутентификация пользователя, постраничная пагинация юзеров, "бесконечная лента" постов, возможность обновлять фотографию профиля, статус, редактировать информацию о себе, добавлять пользователей в друзья и понравившиеся посты в сохранненное. Для локального состояния используются хуки, для связи с Redux использованы useSelector и useDispatch, предоставляемые библиотекой react-redux. Реализована валидация формы логинизации при помощи библиотеки formic. Приложение адаптивное, сделан акцент на удобство мобильной версии, для анимаций использована библиотека framer-motion'}
                                 webSiteLink={'https://social-network-app-flame.vercel.app/login'}
                                 githubLink={'https://github.com/FedorLivshits/Social-Network'}/>
                    <ProjectCard title={'Погода с запросом геолокации'} appImage={weatherMain}
                                 tech={'React/Redux, JavaScript, Module-CSS'} date={2021}
                                 text={'Взаимодействие с открытым api openWeatherMap. Добавлен кастомный хук для определения местоположения, для стилизации выбраны css модули. Сделана адаптивная версия.'}
                                 webSiteLink={'https://weather-app-react-dusky.vercel.app/'}
                                 githubLink={'https://github.com/FedorLivshits/Weather-App-React'}/>
                    <ProjectCard title={'Калькулятор с двумя темами'} appImage={calculatorMain}
                                 tech={'React, React-Hooks, TypeScript'} date={2021}
                                 text={'Простое приложение, написанное на TypeSctipt. В качестве хранения состояния использована система хуков из useState и useContext. Добавлена возможность переключать светлую/темную темы.'}
                                 webSiteLink={'#'}
                                 githubLink={'https://github.com/FedorLivshits/React-CalculatorTS'}/>
                    <ProjectCard title={'Верстка с макета'} appImage={furnitureMain}
                                 tech={'Html/CSS, Gulp, VanillaJS, JQuery'} date={2021}
                                 text={'Пример верстки многостраничного сайта на препроцессоре SCSS по макету Figma с соблюдением методологии БЭМ. Для сборки используется Gulp. Включены интерактивные элементы как на чистом JavaScript, так и на JQuery.'}
                                 webSiteLink={'http://s93130ya.beget.tech/index.html'}
                                 githubLink={'https://github.com/FedorLivshits/MultipageWebsite-gulp-scss'}/>
                </div>
            </div>
        </section>
    )
}

export default Projects
