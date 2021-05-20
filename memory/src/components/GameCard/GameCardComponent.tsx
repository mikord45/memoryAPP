import React, {CSSProperties, useState, useEffect} from 'react'

import "./GameCardComponent.css"

import BackImage from "../../img/reverse.jpg"
import DoneImage from "../../img/doneReverse.jpg"

interface IProps{
    imgSrc: string,
    ableToBeClicked: boolean,
    toReportClick: (e:HTMLImageElement, properSrc: string)=>void,
    done:boolean,
    numberOfCurrentOpenCards: number
}

function GameCard(props: IProps) {
    const {imgSrc, ableToBeClicked, toReportClick, done, numberOfCurrentOpenCards} = props

    const [classList, setClassList] = useState<string>("gameCardComponent")
    const [reversedStatus, setReversedStatus] = useState<boolean>(false)
    const [reverseImage, setReverseImage] = useState<string>("")


    useEffect(()=>{
        if(done){
            setReverseImage(DoneImage)
        }
        else{
            setReverseImage(BackImage)
        }
    })

    const reverseImg = (event:React.MouseEvent) =>{
        const target: HTMLImageElement = event.target as HTMLImageElement
        if(ableToBeClicked && !done){
            if(!reversedStatus){
                toReportClick(target, imgSrc)
                setClassList("gameCardComponent reverseGameCardComponent")
                setTimeout(()=>{
                    setReversedStatus(!reversedStatus)
                },200) 
            }
            else{
                if(numberOfCurrentOpenCards > 1){
                    setClassList("gameCardComponent comeBackGameCardComponent")
                    setTimeout(()=>{
                        setReversedStatus(!reversedStatus)
                    },200) 
                }
            }
        }
    }

    return (
        <div className={classList} onClick={(e)=>{reverseImg(e)}}>
            {reversedStatus ?
            <img src={imgSrc}/>
            :
            <img src={reverseImage}/>
            }
            
        </div>
    )
}

export default GameCard
