import React from "react";
import { VictoryAxis, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter } from "victory";

const LineChar = () => {
    return(
        <svg viewBox="0 0 1000 250">
            <VictoryChart
                domainPadding={{x: 10, y: 10}}
                standalone={false}
                width={1000}
                height={250}
            >
                <VictoryAxis
                    dependentAxis
                    domain={[10, 100]}
                    tickValues={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                    tickFormat={(elem) => {
                        return `${elem}%`
                    }}
                />
                <VictoryAxis
                    domain={[1, 4]}
                    tickValues={[1,2,3,4]}
                    tickFormat={(elem) => {
                        return `Week ${elem}`
                    }}
                />
                <VictoryGroup
                    data={[
                        {x: 1, y: 10},
                        {x: 1.5, y: 20},
                        {x: 2, y: 30},
                        {x: 2.5, y: 40},
                        {x: 3, y: 50},
                        {x: 3.5, y: 60},
                        {x: 4, y: 70},
                    ]}
                >
                    <VictoryLine
                        style={{data: {stroke: "#0B8EAB", strokeWidth: 5 ,fontFamily: "'Familjen Grotesk', sans-serif"}}}
                    />
                    <VictoryScatter
                        style={{data: {fill: "#0B8EAB"}}}
                        size={7}
                    />
                </VictoryGroup>
            </VictoryChart>
        </svg>
    )
}

export default LineChar;