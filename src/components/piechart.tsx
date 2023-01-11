import React from "react";
import victory, {VictoryLabel, VictoryPie} from "victory"
const data = [
    { x: 1, y: 2.5} ,{ x: 1.5, y: 22.5},
    { x: 2, y: 12.5},{ x: 2.5, y: 12.5},
    { x: 3, y: 12.5},{ x: 3.5, y: 12.5},
    { x: 4, y: 12.5},{ x: 4.5, y: 12.5}
]
const dataReduction = [
    { x: 1, y: 25},
    { x: 2, y: 25},
    { x: 3, y: 25},
    { x: 4, y: 25}
]
const PieChart = () => {
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex"}}>
                <div style={{width: "25%"}}>
                    <h3>Reading</h3>
                    <svg width={400} height={400}>
                        <VictoryPie
                            standalone={false}
                            //colorScale={["#73BFF9", "#479FF8", "#3274B5","#1E4C7C"]}
                            colorScale={["#73BFF9","#D9D9D9", "#479FF8", "#D9D9D9","#3274B5","#D9D9D9","#1E4C7C","#D9D9D9"]}
                            style={{
                                labels: {
                                    fill: "transparent"
                                },
                                data : {
                                    //stroke: ({datum}) => Number.isInteger(datum.x) ? "black" : "white",
                                    stroke: "black",
                                    strokeWidth: 2.5,
                                }

                            }}
                            innerRadius={90}
                            //data={dataReduction}
                            data={data}
                        />
                    </svg>
                </div>
                <div style={{width: "25%"}}>
                    <h3>Speaking</h3>
                    <VictoryPie
                        colorScale={["#F7D497", "#EDC173", "#AF7714", "#DDA43F"]}
                        style={{labels: {fontSize: 16, fill: "white"}}}
                        innerRadius={90}
                        labelRadius={100}
                        labels={({datum}) => `${datum.y}%`}
                        data={[
                          { x: "Part#1", y: 35 },
                          { x: "Part#2", y: 20 },
                          { x: "Part#3", y: 15 },
                          { x: "Part#4", y: 30 }
                        ]}
                    />
                </div>
                <div style={{width: "25%"}}>
                    <h3>Listening</h3>
                    <svg>
                        <VictoryPie
                            colorScale={["#5ECC95", "#4DA679", "#418C67", "#295941"]}
                            style={{labels: {fontSize: 16, fill: "white"}}}
                            innerRadius={90}
                            labelRadius={100}
                            labels={({datum}) => `${datum.y}%`}
                            data={[
                              { x: "Part#1", y: 35 },
                              { x: "Part#2", y: 20 },
                              { x: "Part#3", y: 15 },
                              { x: "Part#4", y: 30 }
                            ]}
                        />
                        <VictoryLabel
                            textAnchor="middle"
                            verticalAnchor="middle"
                            text="65%"
                            x={200}
                            y={200}
                            style={{fontSize: 110}}
                        />
                    </svg>
                </div>
                <div style={{width: "25%"}}>
                    <h3>Writing</h3>
                    <VictoryPie
                        colorScale={["#F9BAC7", "#F1899D", "#DE546F", "#B25365"]}
                        style={{labels: {fontSize: 16, fill: "white"}}}
                        innerRadius={90}
                        labelRadius={100}
                        labels={({datum}) => `${datum.y}%`}
                        data={[
                          { x: "Part#1", y: 35 },
                          { x: "Part#2", y: 20 },
                          { x: "Part#3", y: 15 },
                          { x: "Part#4", y: 30 }
                        ]}
                    />
                </div>
            </div>
            <div style={{display: "flex"}}>
                <div style={{width: "25%"}}>
                    <h3>Reading</h3>
                    <svg width={400} height={400}>
                        <VictoryPie
                            standalone={false}
                            colorScale={["#D9D9D9", "#0B8EAB"]}
                            padAngle={2}
                            style={{labels: {fill: "transparent"}}}
                            innerRadius={130}
                            data={[
                              { x: "Part#1", y: 35 },
                              { x: "Part#2", y: 65 },
                            ]}
                        />
                        <VictoryLabel
                            textAnchor="middle"
                            verticalAnchor="middle"
                            text="65%"
                            x={200}
                            y={200}
                            style={{fontSize: 110}}
                        />
                    </svg>
                </div>
                <div style={{width: "25%"}}>
                    <h3>Speaking</h3>
                    <svg width={400} height={400}>
                        <VictoryPie
                            standalone={false}
                            colorScale={["#D9D9D9", "#FFC152"]}
                            padAngle={2}
                            style={{labels: {fill: "transparent"}}}
                            innerRadius={130}
                            data={[
                              { x: "Part#1", y: 35 },
                              { x: "Part#2", y: 65 },
                            ]}
                        />
                        <VictoryLabel
                            textAnchor="middle"
                            verticalAnchor="middle"
                            text="65%"
                            x={200}
                            y={200}
                            style={{fontSize: 110}}
                        />
                    </svg>
                </div>
                <div style={{width: "25%"}}>
                    <h3>Listening</h3>
                    <svg width={400} height={400}>
                        <VictoryPie
                            standalone={false}
                            colorScale={["#D9D9D9", "#A2D9E7"]}
                            padAngle={2}
                            style={{labels: {fill: "transparent"}}}
                            innerRadius={130}
                            data={[
                              { x: "Part#1", y: 35 },
                              { x: "Part#2", y: 65 },
                            ]}
                        />
                        <VictoryLabel
                            textAnchor="middle"
                            verticalAnchor="middle"
                            text="65%"
                            x={200}
                            y={200}
                            style={{fontSize: 110}}
                        />
                    </svg>
                </div>
                <div style={{width: "25%"}}>
                    <h3>Writing</h3>
                    <svg width={400} height={400}>
                        <VictoryPie
                            standalone={false}
                            colorScale={["#D9D9D9", "#F93E63"]}
                            padAngle={2}
                            style={{labels: {fill: "transparent"}}}
                            innerRadius={130}
                            data={[
                              { x: "Part#1", y: 35 },
                              { x: "Part#2", y: 65 },
                            ]}
                        />
                        <VictoryLabel
                            textAnchor="middle"
                            verticalAnchor="middle"
                            text="65%"
                            x={200}
                            y={200}
                            style={{fontSize: 110}}
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default PieChart;

// "#73BFF9" "#479FF8" "#3274B5" "#1E4C7C" 
