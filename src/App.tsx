import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import victory, {VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryPie} from "victory";
import PieChart from './components/piechart';
import GroupChart from './components/groupchart';

function App() {
  const [showPieChars, setShowPieChars] = useState<boolean>(false)
  return (
    <div className="App">
      <div>
        <button onClick={(e) => setShowPieChars(true)}>Pie Charts</button>
      </div>
      {showPieChars && <PieChart/>}
      <GroupChart/>
    </div>
  );
}

export default App;
