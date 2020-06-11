import React from 'react'


const TechCard = (props) => {
    return (
        <div className="tech-card">
            <img src={ props.source }></img>
        </div>
    )
}

export default TechCard