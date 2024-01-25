import { useState, useEffect } from 'react';
import { SlideInWhenVisible } from './SlideInWhenVisible';

export const Experience = () => {
  const [screenWidth, setScreenWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(document.documentElement.clientWidth);
    });
  });
  return (
    <>
      {screenWidth > 768 ? (
        <section className="experience">
          <div className="container">
            <h3 className="experience__title">Мой опыт</h3>
            <div className="experience__items">
              <div className="experience__item">
                <SlideInWhenVisible>
                  <p className="experience__item-text">
                    <b>2018</b> - Прошел курсы по веб-дизайну от WDI Design
                    School, подработка на фрилансе в качестве дизайнера
                  </p>
                </SlideInWhenVisible>
              </div>
              <div className="experience__item">
                <SlideInWhenVisible>
                  <p className="experience__item-text">
                    <b>2019</b> - Изучил верстку, продолжил подрабатывать на
                    фрилансе, но уже в качестве верстальщика
                  </p>
                </SlideInWhenVisible>
              </div>
              <div className="experience__item">
                <SlideInWhenVisible>
                  <p className="experience__item-text">
                    <b>2020</b> (первая половина) - Прошел курсы на платформе
                    Udemy по Javascript, начал увлекаться фронтенд разработкой
                  </p>
                </SlideInWhenVisible>
              </div>
              <div className="experience__item">
                <SlideInWhenVisible>
                  <p className="experience__item-text">
                    <b>2020</b> (вторая половина) - Активное изучение фронтенд
                    направления, глубокое изучение JavaScript, погружение в
                    React и его составляющие
                  </p>
                </SlideInWhenVisible>
              </div>
              <div className="experience__item">
                <SlideInWhenVisible>
                  <p className="experience__item-text">
                    <b>2021</b> - Фронтенд-разработчик
                  </p>
                </SlideInWhenVisible>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="experience">
          <div className="container">
            <h3 className="experience__title">Мой опыт</h3>
            <div className="experience__items">
              <div className="experience__item">
                <p className="experience__item-text">
                  <b>2018</b> - Прошел курсы по веб-дизайну от WDI Design
                  School, подработка на фрилансе в качестве дизайнера
                </p>
              </div>
              <div className="experience__item">
                <p className="experience__item-text">
                  <b>2019</b> - Изучил верстку, продолжил подрабатывать на
                  фрилансе, но уже в качестве верстальщика
                </p>
              </div>
              <div className="experience__item">
                <p className="experience__item-text">
                  <b>2020</b> (первая половина) - Прошел курсы на платформе
                  Udemy по Javascript, начал увлекаться фронтенд разработкой
                </p>
              </div>
              <div className="experience__item">
                <p className="experience__item-text">
                  <b>2020</b> (вторая половина) - Активное изучение фронтенд
                  направления, глубокое изучение JavaScript, погружение в React
                  и его составляющие
                </p>
              </div>
              <div className="experience__item">
                <p className="experience__item-text">
                  <b>2021</b> - Фронтенд-разработчик
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
