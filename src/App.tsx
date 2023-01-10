import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import victory, {VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryPie} from "victory";
import PieChart from './components/piechart';
import GroupChart from './components/groupchart';
import LineChar from './components/linechar';
import BarChar from './components/barChar';
import BarStack from './components/barStack';

function App() {
  const [showPieChars, setShowPieChars] = useState<boolean>(false)
  const [showGroupBarChar, setShowGroupBarChar] = useState<boolean>(false)
  const [showLineChar, setShowLineChar] = useState<boolean>(false)
  const [showBarChar, setShowBarChar] = useState<boolean>(false)
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
      <BarStack/>
    </div>
  );
}

export default App;
