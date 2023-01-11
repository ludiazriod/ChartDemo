import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
    data: Array<{
        total: number,
        completed: number,
        passed: number
    }>
    color: string[]
}

const colorScale = (color: string, tam: number) => {
    let auxColor = parseInt(color.split("#")[1], 16)
    const colorScale = [...new Array(tam).fill(1)].map((_,i) => {
        if(i===0){
            return color.split("#")[1][0] === "0" ? `#0${auxColor.toString(16)}` : `#${auxColor.toString(16)}`
        }
        auxColor -= parseInt((76 / tam-1).toString(), 16)
        return color.split("#")[1][0] === "0" ? `#0${auxColor.toString(16)}` : `#${auxColor.toString(16)}`
    })
    return colorScale.reverse();
}

const TaskChartMod = (props: Props) => {
    const textColor = [ "#737373", "#8D8D8D", "#A6A6A6", "#C0C0C0", "#D9D9D9", "#DDDDDD", "#E1E1E1", "#E4E4E4", "#E8E8E8"]
    return(
        <MainDiv>
            {props.data.map((elem, index) => {
                return <BarWrapper>
                    <span>{`Part ${index+1}`}</span>
                    <TotalData>
                        <TotalCompleted value={500*elem.completed}>
                            <TotalPassed color={props.color[index]} colorText={index > 4 ? "#e2e1e1" : "#454545"} value={(500*elem.completed)*elem.passed}>
                                <span>{(elem.completed * elem.passed) * 100}%</span>
                            </TotalPassed>
                            <span style={{width: "50%"}}>{elem.completed*100}%</span>
                        </TotalCompleted>
                    </TotalData>
                </BarWrapper>
            })}
        </MainDiv>
    )
}

export default TaskChartMod;

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    span {
        font-weight: 700;
        font-size: 20px;
    }
`

const BarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const TotalData = styled.div`
    justify-content: flex-start;
    border: none;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 500px;
    height: 35px;
    border-radius: 10px;
    margin: 20px 20px;
    overflow: hidden;
   
`
const TotalCompleted = styled.div<{value: number}>`
    display: flex;
    align-items: center;
    text-align: center;
    border: none;
    background: #D9D9D9;
    height: 100%;
    border-radius: 10px;
    color: #454545;
    text-align: end;
    animation: TotalCompleted 1.5s ease-in-out forwards;
    padding-right: 5px;
    @keyframes TotalCompleted {
        0% {
            width: 0px;
        }
        100% {
            width: ${props => props.value}px;
        }
    } 
`
const TotalPassed = styled.div<{color: string, colorText: string, value: number}>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-end;
    border: none;
    color:  ${props => props.colorText};
    font-weight: 700;
    background: ${props => props.color};
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    padding-right: 5px;
    animation: TotalPassed 1.5s ease-in-out forwards;
    @keyframes TotalPassed {
        0% {
            width: 0px;
        }
        100% {
            width: ${props => props.value}px;
        }
    }
`

