import React from "react";
import victory, {VictoryAxis, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryPie, VictoryScatter, VictoryStack} from "victory";
import LineChar from "./linechar";
import PieChart from "./piechart";

const CustomAxis = (props: any) => {
    return (
      <svg>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="5"
            markerHeight="4"
            refX="0"
            refY="2"
            orient="auto"
            fill="#CCC"
          >
            <polygon points="0 0, 5 2, 0 4" />
          </marker>
        </defs>
        <line
          x1={props.x1}
          y1={props.y2} 
          x2={props.x2}
          y2={props.dimension === 'x' ? props.y2 : props.y1}
          stroke="#CCC"
          stroke-width="2"
          marker-end="url(#arrowhead)"
        />
      </svg>
    );
  };

const CustomChart = () => {
    const domainPadding: number = 40;
    const tickeLabelSize: string = "10px"
    return(
        <svg viewBox="0 0 450 350">
            <g transform="translate(0, 40)">
                <VictoryAxis
                    dependentAxis
                    standalone={false}
                    domainPadding={{y: 10}}
                    height={350}
                    padding={{bottom: 113, top: 148, left: 50}}
                    domain={[1,4]}
                    tickValues={[1,2,3,4]}
                    tickFormat={(elem) => {
                        return `Part#${5-elem}`
                    }}
                    orientation="left"
                    style={{
                        tickLabels: {fontSize: tickeLabelSize} 
                    }}
                />
                <VictoryAxis
                    standalone={false}
                    domainPadding={{x: 30}}
                    width={450}
                    padding={{bottom: 63, left: 50, right: 50, top: 0}}
                    domain={[1,4]}
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={(elem) => {
                        return `Task#${elem}`
                    }}
                    style={{
                        tickLabels: {fontSize: tickeLabelSize} 
                    }}
                />
                <VictoryBar
                    horizontal
                    domainPadding={{x: 150}}
                    standalone={false}
                    barWidth={20}
                    data={[
                        {x: 1, y: 4, fill: "#0B8EAB66"},
                        {x: 2, y: 4, fill: "#0B8EAB4D"},
                        {x: 3, y: 4, fill: "#0B8EAB33"},
                        {x: 4, y: 4, fill: "#0B8EAB1A"}
                    ]}
                    style={{
                        data: {
                            fill: ({datum}) => datum.fill
                        }
                    }}
                />

                <g transform="translate(0, 77)">
                    <VictoryScatter
                        standalone={false}
                        domainPadding={{x: 30}}
                        symbol="square"
                        size={11}
                        data={[
                            {x: 1, y: 4, fill: "#0B8EAB"},
                            {x: 2, y: 4, fill: "#0B8EAB"},
                            {x: 3, y: 4, fill: "#0B8EAB"},
                            {x: 4, y: 4, fill: "#AAAAAA"}
                        ]}
                        style={{
                            data: {
                                fill: ({datum}) => datum.fill
                            }
                        }}
                    />
                </g>
                <g transform="translate(0, 54)">
                    <VictoryScatter
                        standalone={false}
                        domainPadding={{x: 30}}
                        symbol="square"
                        size={11}
                        data={[
                            {x: 1, y: 4, fill: "#AAAAAA"},
                            {x: 2, y: 4, fill: "#0B8EAB"},
                            {x: 3, y: 4, fill: "#AAAAAA"},
                            {x: 4, y: 4, fill: "#0B8EAB"}
                        ]}
                        style={{
                            data: {
                                fill: ({datum}) => datum.fill
                            }
                        }}
                    />
                </g>
                <g transform="translate(0, 31)">
                    <VictoryScatter
                        standalone={false}
                        domainPadding={{x: 30}}
                        symbol="square"
                        size={11}
                        data={[
                            {x: 1, y: 4, fill: "#0B8EAB"},
                            {x: 2, y: 4, fill: "#0B8EAB"},
                            {x: 3, y: 4, fill: "#0B8EAB"},
                            {x: 4, y: 4, fill: "#0B8EAB"}
                        ]}
                        style={{
                            data: {
                                fill: ({datum}) => datum.fill
                            }
                        }}
                    />
                </g>
                <g transform="translate(0, 8)">
                    <VictoryScatter
                        standalone={false}
                        domainPadding={{x: 30}}
                        symbol="square"
                        size={11}
                        data={[
                            {x: 1, y: 4, fill: "#0B8EAB"},
                            {x: 2, y: 4, fill: "#0B8EAB"},
                            {x: 3, y: 4, fill: "#AAAAAA"},
                            {x: 4, y: 4, fill: "#0B8EAB"}
                        ]}
                        style={{
                            data: {
                                fill: ({datum}) => datum.fill
                            }
                        }}
                    />
                </g>
            </g>
            <svg viewBox="0 0 2000 300">
                <g transform="translate(980, -90)">
                    <VictoryPie
                        standalone={false}
                        width={1800}
                        height={290}
                        data={[
                            {x:2, y: 30},
                            {x:1, y: 70},
                        ]}
                        colorScale={["#AAAAAA", "#0B8EAB"]}
                        padAngle={2}
                        style={{labels: {fill: "transparent"}}}
                        innerRadius={120}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={900}
                        y={135}
                        text={["70%", "success"]}
                        style={[
                            {fontSize: 45, fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 700,fill: "#0B8EAB"},
                        ]}
                    />
                </g>
            </svg>
        </svg>
    )
}

export default CustomChart;