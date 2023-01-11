import React from "react";
import styled from "styled-components";

type Props = {
    data: Array<{
        total: number,
        completed: number,
        passed: number
    }>
    color: string[],
    constAuxColor?: string
}

const TaskChartPercent = (props: Props) => {
    const maxWidth: number = 500;
    return(
        <MainDiv>
            <Legend colors={props.color}/>
            {props.data.map((elem, index) => {
                return <BarWrapper>
                    <span>{`Part ${index+1}`}</span>
                    <TotalData>
                        <TotalCompleted value={(maxWidth*elem.completed)/elem.total}>
                            <TotalPassed value={(((maxWidth*elem.completed)/elem.total)*elem.passed)/elem.completed} color={props.color[index]} colorText={index > 4 ? "#e2e1e1" : (props.constAuxColor ? props.constAuxColor : "#454545")}>
                                <span>{elem.passed}</span>
                            </TotalPassed>
                            <span style={{width: "50%"}}>{elem.completed}</span>
                        </TotalCompleted>
                        <span style={{width: "50%"}}>{elem.total}</span>
                    </TotalData>
                </BarWrapper>
            })}
        </MainDiv>
    )
}

export default TaskChartPercent


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
const Legend = styled.div<{colors: string[]}>`
    width: 70px;
    height: 70px;
    background-image: ${props => `linear-gradient(${props.colors.toString()})`};
`
const TotalData = styled.div`
    display: flex;
    text-align: end;
    align-items: center;
    border: none;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 500px;
    height: 35px;
    border-radius: 10px;
    margin: 20px 20px;
    overflow: hidden;
    padding-right: 5px;
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