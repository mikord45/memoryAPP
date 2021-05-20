import React from 'react'

import "./ButtonComponent.css"

interface IProps{
    handleClick: ()=>void,
    buttonText: string
}

function ButtonComponent(props:IProps) {
    const {handleClick, buttonText} = props

    return (
        <div onClick={handleClick} className="buttonComponent">
            <p>
                {buttonText}
            </p>
        </div>
    )
}

export default ButtonComponent
