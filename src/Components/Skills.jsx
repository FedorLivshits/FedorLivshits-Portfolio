import React from 'react'
import htmlLogo from '../assets/images/icons8-html-5-100.png'
import cssLogo from '../assets/images/icons8-css3-100.png'
import sassLogo from '../assets/images/icons8-sass-100.png'
import jsLogo from '../assets/images/icons8-javascript-100.png'
import tsLogo from '../assets/images/icons8-typescript-100.png'
import reactLogo from '../assets/images/icons8-react-native-100.png'
import reduxLogo from '../assets/images/icons8-redux-100.png'
import gitLogo from '../assets/images/icons8-git-100.png'
import restLogo from '../assets/images/icons8-rest-api-100.png'
import materialLogo from '../assets/images/icons8-material-ui-100.png'
import FadeInWhenVisible from '../Components/FadeInWhenVisible'

const Skills = () => {
    return (
        <section className='skills'>
            <div className='container'>
                <h3 className='skills__title'>Стэк технологий</h3>
                <FadeInWhenVisible>
                    <div className='skills__inner'>
                        <div className='skills__item'>
                            <img src={htmlLogo} alt='' className='skills__logo'/>
                            <span>HTML5</span>
                        </div>
                        <div className='skills__item'>
                            <img src={cssLogo} alt='' className='skills__logo'/>
                            <span>CSS3</span>
                        </div>
                        <div className='skills__item'>
                            <img src={sassLogo} alt='' className='skills__logo'/>
                            <span>SASS/SCSS</span>

                        </div>
                        <div className='skills__item'>
                            <img src={jsLogo} alt='' className='skills__logo'/>
                            <span>JavaScript</span>

                        </div>
                        <div className='skills__item'>
                            <img src={tsLogo} alt='' className='skills__logo'/>
                            <span>TypeScript</span>

                        </div>
                        <div className='skills__item'>
                            <img src={reactLogo} alt='' className='skills__logo'/>
                            <span>React</span>

                        </div>
                        <div className='skills__item'>
                            <img src={reduxLogo} alt='' className='skills__logo'/>
                            <span>Redux</span>

                        </div>
                        <div className='skills__item'>
                            <img src={gitLogo} alt='' className='skills__logo'/>
                            <span>GIT</span>

                        </div>
                        <div className='skills__item'>
                            <img src={restLogo} alt='' className='skills__logo'/>
                            <span>REST-Api</span>
                        </div>
                        <div className='skills__item'>
                            <img src={materialLogo} alt='' className='skills__logo'/>
                            <span>Material-UI</span>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    )
}

export default Skills
