import React from "react"
import { VictoryBar, VictoryChart } from "victory";

const BarChar = () => {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "flex-end", width: "60%"}}>
           <VictoryChart
            height={200}
            width={600}
            domainPadding={20}
            categories={{
                x: ["Grammar", "Comprehension", "Vocabulary"], 
                y: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", " 12", "13", "14","15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
            }}
          >
            <VictoryBar
                horizontal
                style={{ data: { fill: "#0B8EAB" }}}
                data={[    
                  { x: 1, y: 2},
                  { x: 2, y: 3},
                  { x: 3, y: 25},
                  ]}
            />
        </VictoryChart>
        </div>
    )
}

export default BarChar;