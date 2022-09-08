import React from "react";
import victory, {VictoryBar, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryPie} from "victory";

const colors = ["#73BFF9", "#479FF8", "#3274B5", "#1E4C7C"]

const Prueba = (datum: any) => {
    if(datum.y === "Task#1"){
        
    }
}

const GroupChart = (): JSX.Element => {
    const aux: number[] = [5.5, 1, 6.4, 8.1]
    return(
        <div style={{display: "flex", flexDirection:"column"}}>
            <div style={{display: "flex"}}>
                <div style={{width: "100%"}}>
                    <VictoryChart
                        domainPadding={40}
                    >
                        <VictoryGroup 
                            offset={15}
                            colorScale={["#0B8EAB", "#F93E63", "#FFC152", "#A2D9E7"]}
                            categories={{x: ["Week 1", "Week 2", "Week 3", "Week 4"], y:["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]}}
                        >
                            <VictoryBar
                                data={[{ x: 1, y: 9 }, { x: 2, y: 9 }, { x: 3, y: 9 }, {x: 4, y: 9}]}                                
                            />
                            <VictoryBar
                                data={[{ x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, {x: 4, y: 6}]}
                            />
                            <VictoryBar
                                data={[{ x: 1, y: 4.5 }, { x: 2, y: 4.5 }, { x: 3, y: 4.5 }, {x: 4, y: 4.5}]}
                            />
                            <VictoryBar
                                data={[{ x: 1, y: 8 }, { x: 2, y: 8 }, { x: 3, y: 8 }, {x: 4, y: 8}]}
                            />
                        </VictoryGroup>
                    </VictoryChart>
                </div>
            </div>
        </div>
    )
}

export default GroupChart;

//colorScale={["#73BFF9", "#479FF8", "#3274B5", "#1E4C7C"]}