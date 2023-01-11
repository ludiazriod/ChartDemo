import React from "react";
import victory, {VictoryBar, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryPie, VictoryStack} from "victory";

const BarStack = () => {
    return(
    
        <VictoryChart
            categories={{x:["Task#4", "Task#3", "Task#2", "Task#1"], y:["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]}}
            horizontal
            domainPadding={{x: 40}}
        >
            <VictoryStack
                colorScale={["#D9D9D9", "#1E4C7C"]}
                
            >
                <VictoryBar
                    style={{
                        data: {
                            fill: ({datum}) => datum.fill
                        }
                    }}
                    data={[{x: 1, y: 5, fill: "#1E4C7C"}, {x: 2, y:4, fill: "#3274B5"}, {x: 3, y: 8, fill: "#479FF8"}, {x: 4 , y: 3, fill: "#73BFF9"}]}
                />
                <VictoryBar
                    style={{
                        data: {
                            fill: ({datum}) => datum.fill
                        }
                    }}
                    data={[{x: 1, y: 5, fill: "#D9D9D9"}, {x: 2, y: 6, fill: "#D9D9D9"}, {x: 3, y: 2, fill: "#D9D9D9"}, {x: 4, y: 7, fill: "#D9D9D9"}]}
                />
            </VictoryStack>
        </VictoryChart>
      
    )
}

export default BarStack