import React from "react";
import victory, {VictoryBar, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryPie} from "victory";

const BarChartSimple = (): JSX.Element => {
    return(
        <div>
            <VictoryChart
                categories={{x: ["Reading", "Speaking", "Writing", "Listening"], y: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]}}
            >
                <VictoryBar
                    alignment="start"
                    data={[
                        {x: 1, y: 9, fill: "#0B8EAB"},
                        {x: 2, y: 7, fill: "#F93E63"},
                        {x: 3, y: 5, fill: "#FFC152"},
                        {x: 4, y: 8, fill: "#A2D9E7"}
                    ]}
                    style={{
                        data: {
                            fill: ({datum}) => datum.fill
                        }
                    }}
                />
            </VictoryChart>
        </div>
    )
}

export default BarChartSimple