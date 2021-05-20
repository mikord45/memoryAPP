import React from 'react'

import "./PointsComponent.css"

interface IProps{
    points: number
}

function PointsComponent(props:IProps) {
    const {points} = props 

    return (
        <div className="pointsComponent">
            <p>
                {points}
            </p>
            
        </div>
    )
}

export default PointsComponent
