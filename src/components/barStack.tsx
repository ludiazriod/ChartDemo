import React from "react"
import { VictoryBar, VictoryChart, VictoryStack } from "victory";

const BarStack = () => {
    return(
        <VictoryChart
        categories={{x: ["Task#4", "Task#3", "Task#1", "Task#2" ], y:["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]}}
        horizontal
        >
            <VictoryStack
              colorScale={["#0B8EAB", "#D9D9D9"]}
            >
                <VictoryBar
                    data={[{x: 1, y: 5, fill: "#73BFF9"}, {x: 2, y: 3, fill: "#479FF8"}, {x: 3, y: 5, fill: "#3274B5"}, {x: 4, y: 8, fill: "#1E4C7C"}]}
                    style={{
                        data: {
                            fill: ({datum}) => datum.fill
                        }
                    }}
                />
                <VictoryBar
                    data={[{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}]}
                />
                <VictoryBar
                    data={[{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}]}
                />
                <VictoryBar
                    data={[{x: 1, y: 5}, {x: 2, y: 7}, {x: 3, y: 5}, {x: 4, y: 2}]}
                />
            </VictoryStack>
        </VictoryChart>
    )
}

export default BarStack;