import React, {useState, Dispatch, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"

import TitleComponent from "../../components/TitleComponent/TitleComponent"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"

import {actionInterfaceReduxPointsCounter} from "../../reducers/reduxPointsCounter"
import "./MainPage.css"

function MainPage() {
    const [headerTitle, setHeaderTitle] = useState<string>("Welcome to memory game!")
    const [buttonText, setButtonText] = useState<string>("START THE GAME!")
    const history = useHistory()

    const updateDataFromRedux = useDispatch<Dispatch<actionInterfaceReduxPointsCounter>>()

    useEffect(()=>{
        updateDataFromRedux({type: "setNewPointsValue", data: (50)})
    })

    const handleStartButtonClick = () =>{
        history.push("/game")
    }

    return (
        <div className="mainPage">
            <TitleComponent title={headerTitle}/>
            <ButtonComponent handleClick={handleStartButtonClick} buttonText={buttonText}/>
        </div>
    )
}
export default MainPage
