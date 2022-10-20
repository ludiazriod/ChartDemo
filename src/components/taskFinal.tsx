import React from "react";
import victory, {VictoryAxis, VictoryBar, VictoryLabel, VictoryPie, VictoryScatter} from "victory";

type Props = {
    barData: Array<Array<{
        x: number,
        y: number,
        y0?:  number,
        completed: boolean
    }>>
    donutData: Array<{        
        x: number,
        y: number
    }>
    color?: string;
    transparencyScale?: Array<string>;
    axisPadding?: Array<{
        bottom: number,
        top: number,
        left: number,
        right: number
    }>
    barChartWidth?: number;
    barChartHeight?: number;
    donutChartWidth?: number;
    donutChartHeight?: number;
    whiteFillPos?: {x: number, y: number}
}

const TaskChartFinal = (props: Props) => {
    const domainPaddingY: number = 10;
    const domainPaddingX: number = 30;
    const domainPaddingBarX: number = 150;
    const barChartWidth: number = props.barChartWidth ? props.barChartWidth : 450;
    const barChartHeight: number = props.barChartHeight ? props.barChartHeight : 350;
    const donutChartWidth: number = props.donutChartWidth ? props.donutChartWidth : 2000;
    const donutChartHeight: number = props.donutChartHeight ? props.donutChartHeight : 300;
    const maxTickX: number = Math.max(...props.barData[0].map((elem) => {return elem.x;}))
    const maxTickY: number = Math.max(...props.barData[0].map((elem) => {return elem.y;}))
    const tickLabelX: number[] = Array.from({length: maxTickX}, (_,i) => i+1) 
    const tickLabelY: number[] = Array.from({length: maxTickY}, (_,i) => i+1)
    const tickeLabelSize: string = "10px"
    const axisPadding: {bottom: number,top: number,left: number,right: number}[] = props.axisPadding ? props.axisPadding : [{bottom: 113, top: 148, left: 50, right: 0}, {bottom: 63, left: 50, right: 50, top: 0}]
    const minScatterTransformValue: number = props.barChartWidth ? ((77 * props.barChartWidth)/450) : 77;
    const scatterTransformDecrement: number = (minScatterTransformValue * 23)/77;
    const simpleColor: string = props.color ? props.color : "#0B8EAB";
    const whiteFillPos: {x: number, y: number} = props.whiteFillPos ? props.whiteFillPos : {x:164.8, y:-0.7 }
    return(
        <svg viewBox={`0 0 ${barChartWidth} ${barChartHeight}`}>
            <g transform="translate(0, 40)">
                <VictoryAxis
                    dependentAxis
                    standalone={false}
                    domainPadding={{y: domainPaddingY}}
                    height={barChartHeight}
                    padding={axisPadding[0]}
                    domain={[1,maxTickY]}
                    tickValues={tickLabelY}
                    tickFormat={(elem) => {
                        return `Part#${(maxTickY+1)-elem}`
                    }}
                    orientation="left"
                    style={{
                        tickLabels: {fontSize: tickeLabelSize} 
                    }}
                />
                <VictoryAxis
                    standalone={false}
                    domainPadding={{x: domainPaddingX}}
                    width={barChartWidth}
                    padding={axisPadding[1]}
                    domain={[1,maxTickX]}
                    tickValues={tickLabelX}
                    tickFormat={(elem) => {
                        return `Task#${elem}`
                    }}
                    style={{
                        tickLabels: {fontSize: tickeLabelSize} 
                    }}
                />
                <VictoryBar
                    horizontal
                    domainPadding={{x: domainPaddingBarX}}
                    standalone={false}
                    barWidth={20}
                    data={[
                        {x: 1, y: 4, fill: props.transparencyScale ? props.transparencyScale[0] : "#0B8EAB66"},
                        {x: 2, y: 4, fill: props.transparencyScale ? props.transparencyScale[1] : "#0B8EAB4D"},
                        {x: 3, y: 4, fill: props.transparencyScale ? props.transparencyScale[2] : "#0B8EAB33"},
                        {x: 4, y: 4, fill: props.transparencyScale ? props.transparencyScale[3] : "#0B8EAB1A"}
                    ]}
                    style={{
                        data: {
                            fill: ({datum}) => datum.fill
                        }
                    }}
                />
                {tickLabelY.map((_, i) => {
                    return <g transform={`translate(0, ${minScatterTransformValue-(scatterTransformDecrement*i)})`}>
                        <VictoryScatter
                            standalone={false}
                            domainPadding={{x: domainPaddingX}}
                            symbol="square"
                            size={11}
                            data={tickLabelX.map((elem, j) => {
                                return {x: elem, y: maxTickY, fill: props.barData[i][j].completed ? simpleColor : "#AAAAAA"}
                            })}
                            style={{
                                data: {
                                    fill: ({datum}) => datum.fill
                                }
                            }}
                        />
                    </g>
                })}
                <g transform={`translate(${whiteFillPos.x}, ${whiteFillPos.y})`}>
                    <VictoryScatter
                        standalone={false}
                        domainPadding={{y: domainPaddingBarX+2}}
                        symbol="square"
                        size={12}
                        data={tickLabelY.map((elem, i) => {
                            return {x: maxTickY, y: elem, fill: "white"}
                        })}
                        style={{
                            data: {
                                fill: ({datum}) => datum.fill
                            }
                        }}
                    />
                </g>
            </g>
            <svg viewBox={`0 0 ${donutChartWidth} ${donutChartHeight}`}>
                <g transform="translate(980, -90)">
                    <VictoryPie
                        standalone={false}
                        width={donutChartWidth-200}
                        height={donutChartHeight-10}
                        data={props.donutData}
                        colorScale={["#D9D9D9", simpleColor]}
                        padAngle={2}
                        style={{labels: {fill: "transparent"}}}
                        innerRadius={120}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        x={donutChartWidth-1100}
                        y={donutChartHeight-165}
                        text={[`${props.donutData[1].y}%`, "success"]}
                        style={[
                            {fontSize: 45, fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 700, fill: simpleColor},
                        ]}
                    />
                </g>
            </svg>
        </svg>
    )
}

export default TaskChartFinal;