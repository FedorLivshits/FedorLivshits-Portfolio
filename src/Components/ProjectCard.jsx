import React from 'react'

const ProjectCard = ({title, tech, appImage, date, text, webSiteLink, githubLink}) => {
    return (
        <div className="works__item">
            <a className="works__item-link" href={webSiteLink}>
                <img src={appImage} alt="" className="works__item-img"/>
            </a>
            <div className="works__content">
                <a href={webSiteLink} className="works__content-link">
                    <h4 className="works__content-title">
                        {title}
                    </h4>
                </a>
                <div className="works__content-info">
                    <span className="works__date">
                        {date}
                    </span>
                    <span className="works__theme">
                        {tech}
                    </span>
                </div>
                <div className="works__text">
                    <p>
                        {text}
                    </p>
                </div>
                <div className='works__item-btns'>
                    <a className="works__item-btn" href={webSiteLink}>Перейти на сайт</a>
                    <a className="works__item-btn" href={githubLink}>Перейти к репозиторию github</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
