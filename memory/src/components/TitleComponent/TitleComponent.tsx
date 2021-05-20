import React from 'react'

import "./TitleComponent.css"

interface IProps{
    title: string
}

function TitleComponent(props:IProps) {
    const {title} = props

    return (
        <div className="titleComponent">
            <p>
                {title}
            </p>  
        </div>
    )
}

export default TitleComponent
