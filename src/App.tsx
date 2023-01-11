import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import victory, {VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryPie} from "victory";
import PieChart from './components/piechart';
import GroupChart from './components/groupchart';
import LineChar from './components/linechar';
import BarChar from './components/barChar';
import BarChartSimple from './components/barChartSimple';
import BarStack from './components/barStack';
import TaskChart from './components/taskChart';
import GlobalChartBad from './components/globalChartBad';
import GlobalChart from './components/globalChart';
import TaskChartFinal from './components/taskFinal';
import MockDele from './components/mockDele';
import MockCambridge from './components/mockCambridge';
import styled from "styled-components"
import Donut from './components/scratch/donut/donut';
import DonutMod from './components/scratch/donut/donutMod';
import TaskChartMod from './components/scratch/tasks/taskChart';
//{<GlobalChart data={[[{x: 1, y: 1},{x: 2, y: 9},{x: 3, y: 2},{x: 4, y: 5}],[{x: 1, y: 9},{x: 2, y: 8},{x: 3, y: 3},{x: 4, y: 6}],[{x: 1, y: 7},{x: 2, y: 3},{x: 3, y: 10},{x: 4, y: 2}],[{x: 1, y: 6},{x: 2, y: 1},{x: 3, y: 4},{x: 4, y: 3}]]}/>}
const yValue = 8
const xValue = 10
const data: Array<Array<{x: number,y: number, y0?: number,completed: boolean}>> = []
const dataTask: Array<{
  total: number,
  completed: number,
  passed: number
}> = [
  {total: 10, completed: 0.5, passed: 0.5},
  {total: 10, completed: 0.5, passed: 0.5},
  {total: 10, completed: 0.5, passed: 0.5},
  {total: 10, completed: 0.5, passed: 0.5},
  {total: 10, completed: 0.5, passed: 0.5},
  {total: 10, completed: 0.5, passed: 0.5},
  {total: 10, completed: 0.5, passed: 0.5},
  {total: 10, completed: 0.5, passed: 0.5}
]

for(let i: number = 0; i < yValue; i++){
  const auxArr: Array<{x: number,y: number,y0?:  number,completed: boolean}> = []
  for(let j: number = 0; j < xValue; j++){
    auxArr.push({x: j+1, y: yValue, completed: (Math.random() < 0.5)})
  }
  data.push(auxArr)
}

const donutData = [
  {x: 2, y: 30},
  {x: 1, y: 70}
]


function App() {
  const [showPieChars, setShowPieChars] = useState<boolean>(false)
  const [showGroupBarChar, setShowGroupBarChar] = useState<boolean>(false)
  const [showLineChar, setShowLineChar] = useState<boolean>(false)
  const [showBarChar, setShowBarChar] = useState<boolean>(false)
  
  const [numPie, setNumPie] = useState<number>(8)
  const dataPie = [...new Array(numPie).fill(10)]
  const radiusPie = 150
  return (
    <div className="App">
      <div>
        <button onClick={(e) => [setShowPieChars(true), setShowGroupBarChar(false), setShowLineChar(false), setShowBarChar(false)]}>Pie Charts</button>
        <button onClick={(e) => [setShowGroupBarChar(true), setShowPieChars(false), setShowLineChar(false), setShowBarChar(false)]}>Group Bar Chart</button>
        <button onClick={(e) => [setShowLineChar(true), setShowPieChars(false), setShowGroupBarChar(false), setShowBarChar(false)]}>Line Chart</button>
        <button onClick={(e) => [setShowLineChar(false), setShowPieChars(false), setShowGroupBarChar(false), setShowBarChar(true)]}>Bar Char</button>
      </div>
      {showPieChars && <PieChart/>}
      {showGroupBarChar && <GroupChart/>}
      {showLineChar && <LineChar/>}
      {showBarChar && <BarChar/>}
    </div>
  );
}

export default App;
/*
<TaskChartFinal 
  barData={data} 
  donutData={[
    {x: 2, y: 70},
    {x: 1, y: 30},
  ]}
  transparencyScale={["#0B8EAB66", "#4DA679", "#418C67", "#295941"]}
  barChartHeight={data.length < 5 ? 200 : 330}
/>
*/

/**
 *       <div>
        <DonutMod
          data={[...new Array(numPie).fill(1)].map(() => Math.floor(Math.random() * 10)+1)}
          radius={radiusPie}
          color={["#EAF6FF", "#C8E7FF", "#A0D6FF", "#73BFF9", "#479FF8", "#3274B5", "#1E4C7C", "#142E49"]}
        />
        <DonutMod
          data={[...new Array(numPie).fill(1)].map(() => Math.floor(Math.random() * 10)+1)}
          radius={radiusPie}
          color={["#E7FFF3","#C7FFE3", "#7EE7B2", "#5ECC95", "#57A980", "#377E5B","#25553D", "#142D20"]}
        />
        <DonutMod
          data={[...new Array(numPie).fill(1)].map(() => Math.floor(Math.random() * 10)+1)}
          radius={radiusPie}
          color={["#FFEFDF", "#FDDAB1", "#F7C787", "#ECB561", "#DDA43F", "#945A21", "#6C3A15", "#421E0B"]}
        />
        <DonutMod
          data={[...new Array(numPie).fill(1)].map(() => Math.floor(Math.random() * 10)+1)}
          radius={radiusPie}
          color={["#F3B9DC", "#E89BC1", "#D97FA3", "#C76884", "#984253", "#7C3341", "#5F2530", "#41171F"]}
        />
        <DonutMod
          data={dataPie}
          radius={radiusPie}
          color={["#EAF6FF", "#C8E7FF", "#A0D6FF", "#73BFF9", "#479FF8", "#3274B5", "#1E4C7C", "#142E49"]}
        />
        <DonutMod
          data={dataPie}
          radius={radiusPie}
          color={["#E7FFF3","#C7FFE3", "#7EE7B2", "#5ECC95", "#57A980", "#377E5B","#25553D", "#142D20"]}
        />
        <DonutMod
          data={dataPie}
          radius={radiusPie}
          color={["#FFEFDF", "#FDDAB1", "#F7C787", "#ECB561", "#DDA43F", "#945A21", "#6C3A15", "#421E0B"]}
        />
        <DonutMod
          data={dataPie}
          radius={radiusPie}
          color={["#F3B9DC", "#E89BC1", "#D97FA3", "#C76884", "#984253", "#7C3341", "#5F2530", "#41171F"]}
        />
      </div>
 */

const Main = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #0B8EAB;
        animation: Main 1.2s linear infinite;
    }
    div:nth-child(1){
        top: 8px;
        left: 8px;
        animation-delay: 0s;
    }
    div:nth-child(2){
        top: 8px;
        left: 32px;
        animation-delay: -0.4s;
    }
    div:nth-child(3){
        top: 8px;
        left: 56px;
        animation-delay: -0.8s;
    }
    div:nth-child(4){
        top: 32px;
        left: 8px;
        animation-delay: -0.4s;
    }
    div:nth-child(5){
        top: 32px;
        left: 32px;
        animation-delay: -0.8s;
    }
    div:nth-child(6){
        top: 32px;
        left: 56px;
        animation-delay: -1.2s;
    }
    div:nth-child(7){
        top: 56px;
        left: 8px;
        animation-delay: -0.8s;
    }
    div:nth-child(8){
        top: 56px;
        left: 32px;
        animation-delay: -1.2s;
    }
    div:nth-child(9){
        top: 56px;
        left: 56px;
        animation-delay: -1.6s;
    }
    @keyframes Main {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`
