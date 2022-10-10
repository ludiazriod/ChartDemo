import React from "react";
import victory, {VictoryAxis, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryPie, VictoryStack} from "victory";

const BarChartComplex = () => {
    //categories={{x:["Task#1","Task#2","Task#3","Task#4"], y:["Part#4", "Part#3", "Part#2", "Part#1"]}}
    return(
        <svg viewBox="0 0 400 350">
        <VictoryChart
            standalone={false}
            horizontal
            minDomain={{y:0.5, x: 0.5}}
            width={400}
            height={350}
        >
        <VictoryAxis
            dependentAxis
            tickValues={[0, 0.16, 0.64, 1.6 , 1.92]}
            standalone={false}  
            width={100} 
            height={200}
            maxDomain={{x: 0.5}}
        />
        <VictoryAxis
            tickValues={[1, 1.5, 0.5, 0]}
            width={20}
        />
        <VictoryStack
            colorScale={["#D9D9D9", "#0B8EAB"]}
        >
            <VictoryBar
            alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB66"}, {x: 0.3, y:0.16, fill: "#0B8EAB4D"}, {x: 0.6, y: 0.16, fill: "#0B8EAB33"}, {x: 0.9, y: 0.16, fill: "#0B8EAB1A"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB"}, {x: 0.3, y:0.16, fill: "#0B8EAB"}, {x: 0.6, y: 0.16, fill: "#0B8EAB"}, {x: 0.9 , y: 0.16, fill: "#0B8EAB"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB66"}, {x: 0.3, y:0.16, fill: "#0B8EAB4D"}, {x: 0.6, y: 0.16, fill: "#0B8EAB33"}, {x: 0.9, y: 0.16, fill: "#0B8EAB1A"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB"}, {x: 0.3, y:0.16, fill: "#0B8EAB"}, {x: 0.6, y: 0.16, fill: "#0B8EAB"}, {x: 0.9 , y: 0.16, fill: "#0B8EAB"}]}
            />
            <VictoryBar
            alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB66"}, {x: 0.3, y:0.16, fill: "#0B8EAB4D"}, {x: 0.6, y: 0.16, fill: "#0B8EAB33"}, {x: 0.9, y: 0.16, fill: "#0B8EAB1A"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB"}, {x: 0.3, y:0.16, fill: "#0B8EAB"}, {x: 0.6, y: 0.16, fill: "#0B8EAB"}, {x: 0.9 , y: 0.16, fill: "#0B8EAB"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB66"}, {x: 0.3, y:0.16, fill: "#0B8EAB4D"}, {x: 0.6, y: 0.16, fill: "#0B8EAB33"}, {x: 0.9, y: 0.16, fill: "#0B8EAB1A"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB"}, {x: 0.3, y:0.16, fill: "#0B8EAB"}, {x: 0.6, y: 0.16, fill: "#0B8EAB"}, {x: 0.9 , y: 0.16, fill: "#0B8EAB"}]}
            />
            <VictoryBar
            alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB66"}, {x: 0.3, y:0.16, fill: "#0B8EAB4D"}, {x: 0.6, y: 0.16, fill: "#0B8EAB33"}, {x: 0.9, y: 0.16, fill: "#0B8EAB1A"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB"}, {x: 0.3, y:0.16, fill: "#0B8EAB"}, {x: 0.6, y: 0.16, fill: "#0B8EAB"}, {x: 0.9 , y: 0.16, fill: "#0B8EAB"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB66"}, {x: 0.3, y:0.16, fill: "#0B8EAB4D"}, {x: 0.6, y: 0.16, fill: "#0B8EAB33"}, {x: 0.9, y: 0.16, fill: "#0B8EAB1A"}]}
            />
            <VictoryBar
             alignment="start"
                style={{
                    data: {
                        fill: ({datum}) => datum.fill
                    }
                }}
                data={[{x: 0, y: 0.16, fill: "#0B8EAB"}, {x: 0.3, y:0.16, fill: "#0B8EAB"}, {x: 0.6, y: 0.16, fill: "#0B8EAB"}, {x: 0.9 , y: 0.16, fill: "#0B8EAB"}]}
            />
        </VictoryStack>
    </VictoryChart>
    </svg>
    )
}

export default BarChartComplex;