import { ProjectCard } from './ProjectCard';
import movieMain from '../assets/images/movie-app-1.png';
import shopMain from '../assets/images/shop-app-1.png';
import networkMain from '../assets/images/network-app-1.png';
import weatherMain from '../assets/images/weather-app-1.png';
import calculatorMain from '../assets/images/calculator-app-1.png';
import furnitureMain from '../assets/images/furniture-site-1.png';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section className="works" id="works-section">
      <div className="container">
        <motion.h3
          className="works__title"
          initial={{ opacity: 0, x: -400 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.4 },
          }}
        >
          Мое портфолио
        </motion.h3>
        <div className="works__items">
          <ProjectCard
            title={'Приложение MovieApp'}
            appImage={movieMain}
            tech={'React/Redux, JavaScript, SCSS, React-Bootstrap'}
            date={2021}
            text={
              <p>
                {' '}
                - Данное приложение использует открытое api TMDB. <br /> -
                Реализован роутинг, постраничная пагинация, запросы к api из
                поисковых строк. Реализован посимвольный запрос к базе данных в
                шапке сайта, отдельные GET-запросы(фильмы по категориям, детали
                конкретного фильма, информация об актерах).
                <br /> - Все компоненты проекта функциональные и для локального
                состояния используют хуки. Для связи с Redux использован HOC
                Connect.
                <br /> - Реализовано сохранение понравившихся фильмов в
                localStorage браузера.
                <br /> - Приложение адаптивное, сделан акцент на удобство
                мобильной версии, для анимаций использована библиотека
                framer-motion
              </p>
            }
            webSiteLink={'https://movie-app-react-redux.vercel.app'}
            githubLink={'https://github.com/FedorLivshits/MovieApp-React-Redux'}
          />
          <ProjectCard
            title={'Онлайн-магазин Everpress'}
            appImage={shopMain}
            tech={'React/Redux, TypeScript, Styled-Components'}
            date={2021}
            text={
              <p>
                {' '}
                - Приложение написано на TypeScript, для стилизации использована
                библиотека Styled-Components.
                <br />
                - Реализован роутинг, дозагрузка товара по кнопке,
                взаимодействие с избранным и корзиной, оформление товара. <br />
                - Для локального состояния компонент используются хуки useState,
                useEffect. Для связи с Redux использованы хуки useSelector и
                useDispatch.
                <br />
                - Реализована валидация формы оформления заказа при помощи
                библиотеки formic.
                <br />
                - Реализовано сохранение товара в избранном и товара в корзине в
                localStorage браузера.
                <br />- Приложение адаптивное, сделан акцент на удобство
                мобильной версии, для анимаций использована библиотека
                framer-motion
              </p>
            }
            webSiteLink={'https://designer-clothing-shop-react.vercel.app'}
            githubLink={
              'https://github.com/FedorLivshits/DesignerClothingShopReact'
            }
          />
          <ProjectCard
            title={'Социальная сеть'}
            appImage={networkMain}
            tech={'React/Redux, TypeScript, SCSS, React-Bootstrap'}
            date={2020}
            text={
              <p>
                - Приложение написано на TypeScript, для стилизации использован
                препроцессор SCSS и библиотека react-bootstrap.
                <br />
                - Реализована аутентификация пользователя, постраничная
                пагинация юзеров, &rdquo;бесконечная лента&ldquo; постов,
                возможность обновлять фотографию профиля, статус, редактировать
                информацию о себе, писать свои посты, добавлять пользователей в
                друзья и понравившиеся записи в сохранненное (localStorage).
                <br />
                - Для локального состояния используются хуки, для связи с Redux
                использованы useSelector и useDispatch.
                <br />
                - Реализована валидация формы логинизации при помощи библиотеки
                formic.
                <br />
                - Приложение адаптивное, сделан акцент на удобство мобильной
                версии.
                <br />- Для анимаций использована библиотека framer-motion.
              </p>
            }
            webSiteLink={'https://social-network-app-flame.vercel.app'}
            githubLink={'https://github.com/FedorLivshits/Social-Network'}
          />
          <ProjectCard
            title={'Погода с запросом геолокации'}
            appImage={weatherMain}
            tech={'React/Redux, JavaScript, Module-CSS'}
            date={2021}
            text={
              <p>
                - Взаимодействие с открытым api openWeatherMap.
                <br />
                - Все компоненты проекта функциональные, используются хуки.
                <br />
                - Добавлен кастомный хук для определения местоположения.
                <br />
                - Для стилизации выбраны css модули.
                <br />- Сделана адаптивная версия.
              </p>
            }
            webSiteLink={'https://weather-app-react-dusky.vercel.app'}
            githubLink={'https://github.com/FedorLivshits/Weather-App-React'}
          />
          <ProjectCard
            title={'Калькулятор с двумя темами'}
            appImage={calculatorMain}
            tech={'React, React-Hooks, TypeScript'}
            date={2021}
            text={
              <p>
                - Классическое приложение, написанное на TypeSctipt.
                <br />
                - Используются useState и useContext.
                <br />- Добавлена возможность переключать светлую/темную темы.
              </p>
            }
            webSiteLink={'https://react-calculator-ts.vercel.app'}
            githubLink={'https://github.com/FedorLivshits/React-CalculatorTS'}
          />
          <ProjectCard
            title={'Верстка с макета'}
            appImage={furnitureMain}
            tech={'Html/CSS, Gulp, VanillaJS, JQuery'}
            date={2021}
            text={
              <p>
                - Для стилизации использован препроцессор SCSS.
                <br />
                - Соблюдена методология БЭМ.
                <br />
                - Для сборки используется Gulp.
                <br />- Включены интерактивные элементы (слайдер, выпадающее
                меню, галерея фотографий) как на чистом JavaScript, так и на
                JQuery.
              </p>
            }
            webSiteLink={'http://s93130ya.beget.tech/index.html'}
            githubLink={
              'https://github.com/FedorLivshits/MultipageWebsite-gulp-scss'
            }
          />
        </div>
      </div>
    </section>
  );
};
