import React, {useState} from "react";
import victory, {VictoryAxis, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryPie, VictoryScatter, VictoryStack} from "victory";

const styleDiv = {
    border: "1px solid green",
    borderRadius: "5px",
    width: "auto",
    fontSize: "15px"
}

const DoubleBarChart = () => {
    return(
        <svg viewBox="0 0 500 350">
            <g transform="translate(10, 50)">
                <VictoryAxis
                    dependentAxis
                    standalone={false}
                    domain={[0.9,2]}
                    height={350}
                    padding={{top: 80, bottom: 100, left: 50}}
                    domainPadding={{y: 25}}
                    tickValues={[0.5, 1, 1.5, 2, 2.5]}
                    tickFormat={(elem) => {
                        return Number.isInteger(elem) ? `Block ${elem}` : " "
                    }}
                />
                <VictoryAxis
                    standalone={false}
                    width={500}
                    domain={[10, 100]}
                    tickValues={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                    tickFormat={(elem) => {
                        return `${elem}%`
                    }}
                />
                <g transform="translate(0, 20)">
                    <VictoryStack
                    colorScale={["#D9D9D9", "#1E4C7C"]}
                    standalone={false}
                    width={500}
                    horizontal
                    domainPadding={{x: 30}}
                    >
                        <VictoryBar
                            style={{
                                data: {
                                    fill: ({datum}) => datum.fill
                                },
                                labels: {
                                    fill: "white"
                                }
                            }}
                            // X values -5.
                            // Y values +5.
                            data={[{x: 1, y: 45, fill: "#A2D9E7"}, {x: 1.7, y: 35, fill: "#FFC152"}, {x: 3.3, y: 75, fill: "#F93E63"}, {x: 4 , y: 25, fill: "#0B8EAB"}]}
                            labels={({datum}) => `${datum.y+5}%`}
                            labelComponent={<VictoryLabel dx={-30}/>}
                        />
                        <VictoryBar
                            style={{
                                data: {
                                    fill: ({datum}) => datum.fill
                                }
                            }}
                            data={[{x: 1, y: 55, fill: "#D9D9D9"}, {x: 1.7, y: 65, fill: "#D9D9D9"}, {x: 3.3, y: 25, fill: "#D9D9D9"}, {x: 4, y: 75, fill: "#D9D9D9"}]}
                        />
                    </VictoryStack>
                </g>
                <foreignObject y="115" x="-10" width={50} height={160}>
                        <div style={styleDiv}>
                            60%
                        </div>
                </foreignObject>
                <foreignObject y="225" x="-10" width={50} height={160}>
                        <div style={styleDiv}>
                            61%
                        </div>
                </foreignObject>
            </g>
        </svg>
    )
}

export default DoubleBarChart;

/**
 * 
const StackBarLabelChart = (props: Props) => {
    const categories=props.categories ? props.categories : {
        x: props.categoriesX, 
        y:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", " 12", "13", "14","15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
    }

    return(
        <svg viewBox="0 0 1000 270">
           <g transform="translate(-50, 0)">
                <VictoryChart
                     categories={props.categories ? props.categories : {
                         x: props.categoriesX, 
                         y:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", " 12", "13", "14","15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
                     }}
                     standalone={false}
                     horizontal
                     domain={{x: [1, 3], y: [1, 25]}}
                     domainPadding={{x: 20}}
                     padding={{ top: 40,  left:140}}
                     width={1000}
                     height={220}
                 >
                     <VictoryStack
                         colorScale={["#D9D9D9", props.color]}  
                     >
                         <VictoryBar //colored data
                             padding={{ top: 20, left:200, right: 0}}
                             style={{
                                 data: {
                                     fill: ({datum}) => datum.fill
                                 },
                                 labels: {
                                     fill: props.textColor
                                 }
                             }}
                             labels={({datum}) => datum.y + 'pts'}
                             labelComponent={<VictoryLabel dy={0} dx={-40} angle={0}/>}
                             data={
                                 props.data.map((elem) => {
                                     return(
                                         {x: elem.x, y: elem.y, fill: props.color}
                                     )
                                 })
                             }
                         />
                         <VictoryBar //left to end bar
                             style={{
                                 data: {
                                     fill: ({datum}) => datum.fill
                                 }
                             }}
                             data={
                                 props.data.map((elem) => {
                                     return(
                                         {x: elem.x, y: Number(categories.y[categories.y.length-1]) - elem.y, fill: "#D9D9D9"}
                                     )
                                 })
                             }
                         />
                     </VictoryStack>
                 </VictoryChart>
           </g>
        </svg>
    )
}

export default StackBarLabelChart
 * 
 */