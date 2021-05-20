import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux"

import TitleComponent from "../../components/TitleComponent/TitleComponent"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"

import {RootState} from "../../index"
import "./ScoreBoardPage.css"

function ScoreBoardPage() {
    const dataFromRedux = useSelector((state:RootState) => state.reduxPointsCounter)

    const [headerTitle, setHeaderTitle] = useState<string>(`Your score is ${dataFromRedux.currentScore}`)
    const [buttonText, setButtonText] = useState<string>("RETURN TO MAIN MENU")
    const history = useHistory()

    const handleReturnToStart = () =>{
        history.push("/")
    }

    return (
        <div className="scoreBoardPage">
            <TitleComponent title={headerTitle}/>
            <ButtonComponent handleClick={handleReturnToStart} buttonText={buttonText}/>
        </div>
    )
}

export default ScoreBoardPage
