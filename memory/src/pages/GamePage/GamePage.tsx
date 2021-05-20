import React, {useState, Dispatch} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"

import TitleComponent from "../../components/TitleComponent/TitleComponent"
import InfoComponent from "../../components/InfoComponent/InfoComponent"
import PointsComponent from "../../components/PointsComponent/PointsComponent"
import GameCardComponent from "../../components/GameCard/GameCardComponent"

import {actionInterfaceReduxPointsCounter} from "../../reducers/reduxPointsCounter"

import {RootState} from "../../index"
import "./GamePage.css"

import Picture1 from "../../img/obrazek1.jpg"
import Picture2 from "../../img/obrazek2.jpg"
import Picture3 from "../../img/obrazek3.jpg"
import Picture4 from "../../img/obrazek4.jpg"
import Picture5 from "../../img/obrazek5.jpg"
import Picture6 from "../../img/obrazek6.jpg"
import Picture7 from "../../img/obrazek7.jpg"
import Picture8 from "../../img/obrazek8.jpg"
import Picture9 from "../../img/obrazek9.jpg"
import Picture10 from "../../img/obrazek10.jpg"

function GamePage() {
    const [headerTitle, setHeaderTitle] = useState<string>("Good luck!")
    const [infoComponentContent, setInfoComponentContent] = useState<string>("At the begginnig you have 50 points, each round cause 1 point loss")
    const [numberOfCurrentOpenCards, setNumberOfCurrentOpenCards] = useState<number>(0)
    const [currentOpenCards, setCurrentOpenCards] = useState<HTMLImageElement[]>([] as HTMLImageElement[])
    const [imagesSrcOfCurrentOpenCards, setImagesSrcOfCurrentOpenCards] = useState<string[]>([])
    const [ableToClickSth, setAbleToClickSth] = useState<boolean>(true)
    const [tabOfAlreadyOpenedPictures, setTabOfAlreadyOpenPictures] = useState<string[]>([])
    const [tabOfAllPictures, setTabOfAllPictures] = useState<string[]>([Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10, Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10]
        .sort((a,b)=>{
            return(0.5 - Math.random())
        }))
   
    const dataFromRedux = useSelector((state:RootState) => state.reduxPointsCounter)
    const updateDataFromRedux = useDispatch<Dispatch<actionInterfaceReduxPointsCounter>>()

    const history = useHistory()
    
    const checkIfAreTheSame = () =>{
        updateDataFromRedux({type: "setNewPointsValue", data: (dataFromRedux.currentScore-1)})
        let prevTabOfAlreadyOpenedPictures: string[] = []
        if(imagesSrcOfCurrentOpenCards[0] == imagesSrcOfCurrentOpenCards[1]){
            prevTabOfAlreadyOpenedPictures = JSON.parse(JSON.stringify(tabOfAlreadyOpenedPictures)) 
            prevTabOfAlreadyOpenedPictures.push(imagesSrcOfCurrentOpenCards[0])
        }
        setTimeout(()=>{
            setAbleToClickSth(true)
            currentOpenCards[0].click()
            currentOpenCards[1].click()
            if(prevTabOfAlreadyOpenedPictures.length > 0){
                setAbleToClickSth(false)
            }
            resetAfterMove()
        },1000)
        setTimeout(()=>{
            if(prevTabOfAlreadyOpenedPictures.length > 0){
                setTabOfAlreadyOpenPictures(prevTabOfAlreadyOpenedPictures)
                setAbleToClickSth(true)
                if(prevTabOfAlreadyOpenedPictures.length == 10){
                    setTimeout(()=>{
                        history.push("score")
                    },500)
                }
            } 
        },2400)
    }

    const changeAbilityToClick = (target: HTMLImageElement, targetSrc: string) =>{
        const prevImagesSrcOfCurrentOpenCards = imagesSrcOfCurrentOpenCards
        prevImagesSrcOfCurrentOpenCards.push(targetSrc)
        const prevCurrentOpenCards = currentOpenCards
        prevCurrentOpenCards.push(target)
        setAbleToClickSth(false)
        if(numberOfCurrentOpenCards == 0){
            setNumberOfCurrentOpenCards(1)
            setTimeout(()=>{
                setAbleToClickSth(true)
            },1000)
        }
        else{
            setNumberOfCurrentOpenCards(2)
            checkIfAreTheSame()
        }
    }

    const resetAfterMove = () =>{
        setNumberOfCurrentOpenCards(0)
        setCurrentOpenCards([])
        setImagesSrcOfCurrentOpenCards([])
    }

    return (
        <div className="gamePage">
            <div className="gamePage__header">
                <TitleComponent title={headerTitle}/>
                <InfoComponent content={infoComponentContent}/>
                
            </div>
            <PointsComponent points={dataFromRedux.currentScore}/>
            <div className="gamePage__board">
                {tabOfAllPictures.map((elem, i)=>{
                    if(!tabOfAlreadyOpenedPictures.includes(elem)){
                        return(
                            <GameCardComponent imgSrc={elem} ableToBeClicked={ableToClickSth} toReportClick={changeAbilityToClick} key={i} done={false} numberOfCurrentOpenCards={numberOfCurrentOpenCards}/>
                        )
                    }
                    else{
                        return(
                            <GameCardComponent imgSrc={elem} ableToBeClicked={ableToClickSth} toReportClick={changeAbilityToClick} key={i} done={true} numberOfCurrentOpenCards={numberOfCurrentOpenCards}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default GamePage
