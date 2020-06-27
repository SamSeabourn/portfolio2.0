import React from 'react'

const TechCard = ( props ) => {
    return (
        <div className="tech-card drop-shadow m-top-5vh m-bottom-5vh">
            <img alt={ "tech card" }src={ props.source }></img>
        </div>
    )
}

export default TechCard