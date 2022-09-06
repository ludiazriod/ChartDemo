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
                <div style={{width: "50%"}}>
                    <VictoryChart
                        domainPadding={{x: 50}}
                    >
                        <VictoryGroup 
                            offset={20}
                            colorScale={"qualitative"}
                        >
                            <VictoryBar
                                data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                                alignment="start"
                                barRatio={0.4}
                            />
                            <VictoryBar
                                data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                                alignment="start"
                                barRatio={0.4}
                            />
                            <VictoryBar
                                data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                                alignment="start"
                                barRatio={0.4}
                            />
                        </VictoryGroup>
                    </VictoryChart>
                </div>
                <div style={{width: "50%"}}>
                    <VictoryChart
                        domainPadding={{ x: 20 }}
                    >
                        <VictoryBar
                            horizontal
                            categories={{x: ["Task#4", "Task#3", "Task#2", "Task#1"], y:["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]}}
                            data={[
                                { x: "Task#1", y: aux[0], fill: "#73BFF9"}, 
                                { x: "Task#2", y: aux[1], fill: "#479FF8"}, 
                                { x: "Task#3", y: aux[2], fill: "#479FF8"}, 
                                { x: "Task#4", y: aux[3], fill: "#479FF8"}
                            ]}
                            barRatio={0.4}
                        />
                    </VictoryChart>
                </div>
            </div>
        </div>
    )
}

export default GroupChart;

//colorScale={["#73BFF9", "#479FF8", "#3274B5", "#1E4C7C"]}