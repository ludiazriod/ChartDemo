import React from "react";
import { VictoryChart, VictoryLine } from "victory";

const LineChar = () => {
    return(
        <VictoryChart
            categories={{x: ["Week 1", "", "Week 2", " ", "Week 3", "  " ,"Week 4"], y:["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]}}
        >
            <VictoryLine
                style={{data: {stroke: "#0B8EAB"}}}
                data={[
                  { x: 1, y: 1 },
                  { x: 2, y: 4.5 },
                  { x: 3, y: 2 },
                  { x: 4, y: 7 },
                  { x: 5, y: 2 },
                  { x: 6, y: 8.5 },
                  { x: 7, y: 8.5 }
                ]}
            />
        </VictoryChart>
    )
}

export default LineChar;