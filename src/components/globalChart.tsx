import React, {useState} from "react";
import victory, {VictoryAxis, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryPie, VictoryScatter, VictoryStack} from "victory";

const GlobalChart = () => {
    const [displayed, setDisplayed] = useState<boolean[]>([true, false, false, false, false])
    
    const changeValue = (index: number) => {
        return displayed.map((elem,i) => {
            return index===0 ? (i===index ? true : false) : (i===index ? !elem : (i===0 ? false : elem))
        })
    }
    return(
        <svg viewBox="0 0 1000 350">
            <g transform="translate(0, 40)">
                <VictoryChart
                    standalone={false}
                    categories={{
                        x: ["Week 1", "Week 2", "Week 3", "Week 4"],
                        y: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
                    }}
                    domainPadding={20}
                >   
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        text={"Show all"}
                        events={{
                            onClick: (e) => setDisplayed(changeValue(0))
                        }}
                        style={{
                            fontSize: 11
                        }}
                        backgroundStyle={{
                            fill: displayed[0] ? "#D3CFCF" : "transparent",
                            stroke: "blue",
                        }}
                        backgroundPadding={{left: 15, right:8, top: 4, bottom: 4}}
                        x={110}
                        y={50}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        text="Reading"
                        events={{
                            onClick: (e) => setDisplayed(changeValue(1))
                        }}
                        style={{
                            fontSize: 11
                        }}
                        backgroundStyle={{
                            fill: displayed[1] ? "#D3CFCF" : "transparent"
                        }}
                        backgroundPadding={{left: 15, right:8, top: 4, bottom: 4}}
                        x={180}
                        y={50}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        text="Writing"
                        events={{
                            onClick: (e) => setDisplayed(changeValue(2))
                        }}
                        style={{
                            fontSize: 11
                        }}
                        backgroundStyle={{
                            fill: displayed[2] ? "#D3CFCF" : "transparent"
                        }}
                        backgroundPadding={{left: 15, right:8, top: 4, bottom: 4}}
                        x={250}
                        y={50}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        text="Speaking"
                        events={{
                            onClick: (e) => setDisplayed(changeValue(3))
                        }}
                        style={{
                            fontSize: 11
                        }}
                        backgroundStyle={{
                            fill: displayed[3] ? "#D3CFCF" : "transparent"
                        }}
                        backgroundPadding={{left: 15, right:8, top: 4, bottom: 4}}
                        x={320}
                        y={50}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        text="Listening"
                        events={{
                            onClick: (e) => setDisplayed(changeValue(4))
                        }}
                        style={{
                            fontSize: 11
                        }}
                        backgroundStyle={{
                            fill: displayed[4] ? "#D3CFCF" : "transparent", borderRadius: 10
                        }}
                        backgroundPadding={{left: 15, right:8, top: 4, bottom: 4}}
                        x={393}
                        y={50}
                    />
                    {(displayed[0] || displayed[1]) &&
                        <VictoryGroup
                            data={[
                                {x: 1, y: 1},
                                {x: 2, y: 9},
                                {x: 3, y: 2},
                                {x: 4, y: 5},
                            ]}
                            domainPadding={20}
                        >
                            <VictoryLine
                                style={{
                                    data: {stroke: "#0B8EAB"}
                                }}
                            />
                            <VictoryScatter
                                style={{
                                    data: {
                                        fill: "#0B8EAB"
                                    }
                                }}
                            />
                        </VictoryGroup>
                    }
                    {(displayed[0] || displayed[2]) &&
                        <VictoryGroup
                            data={[
                                {x: 1, y: 9},
                                {x: 2, y: 8},
                                {x: 3, y: 3},
                                {x: 4, y: 6},
                            ]}
                            domainPadding={20}
                        >
                            <VictoryLine
                                style={{
                                    data: {stroke: "#F93E63"}
                                }}
                            />
                            <VictoryScatter
                                style={{
                                    data: {
                                        fill: "#F93E63"
                                    }
                                }}
                            />
                        </VictoryGroup>
                    }
                    {(displayed[0] || displayed[3]) &&
                        <VictoryGroup
                            data={[
                                {x: 1, y: 7},
                                {x: 2, y: 3},
                                {x: 3, y: 10},
                                {x: 4, y: 2},
                            ]}
                            domainPadding={20}
                        >
                            <VictoryLine
                                style={{
                                    data: {stroke: "#FFC152"}
                                }}
                            />
                            <VictoryScatter
                                style={{
                                    data: {
                                        fill: "#FFC152"
                                    }
                                }}
                            />
                        </VictoryGroup>
                    }
                    {(displayed[0] || displayed[4]) &&
                        <VictoryGroup
                            data={[
                                {x: 1, y: 6},
                                {x: 2, y: 1},
                                {x: 3, y: 4},
                                {x: 4, y: 3},
                            ]}
                            domainPadding={20}
                        >
                            <VictoryLine
                                style={{
                                    data: {stroke: "#A2D9E7"}
                                }}
                            />
                            <VictoryScatter
                                style={{
                                    data: {
                                        fill: "#A2D9E7"
                                    }
                                }}
                            />
                        </VictoryGroup>
                    }
                </VictoryChart>
                <rect x={79} y={48.5} width={10} height={10} fill="#454545" onClick={(e) => setDisplayed(changeValue(0))}/>
                <rect x={151} y={49} width={10} height={10} fill="#0B8EAB" onClick={(e) => setDisplayed(changeValue(1))}/>
                <rect x={221} y={49} width={10} height={10} fill="#F93E63" onClick={(e) => setDisplayed(changeValue(2))}/>
                <rect x={289} y={49} width={10} height={10} fill="#FFC152" onClick={(e) => setDisplayed(changeValue(3))}/>
                <rect x={362} y={49} width={10} height={10} fill="#A2D9E7" onClick={(e) => setDisplayed(changeValue(4))}/>
            </g>
        </svg>
    )
}

export default GlobalChart;
