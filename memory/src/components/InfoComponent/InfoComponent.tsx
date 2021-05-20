import React from 'react'

import "./InfoComponent.css"

interface IProps{
    content: string
}

function InfoComponent(props: IProps) {
    const {content} = props

    return (
        <div className="infoComponent">
            <p>
                {content}
            </p>
        </div>
    )
}

export default InfoComponent
