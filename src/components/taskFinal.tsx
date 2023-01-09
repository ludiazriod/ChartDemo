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
    console.log(props.barData)
    const barChartWidth: number = props.barChartWidth ? props.barChartWidth : 450;
    const barChartHeight: number = props.barChartHeight ? props.barChartHeight : 250;
    const donutChartWidth: number = props.donutChartWidth ? props.donutChartWidth : 2000;
    const domainPaddingY: number = 10;
    const domainPaddingX: number = 30;
    //para 2: 100
    //para 3: 130 
    //para 4: 150
    //para 5: 170
    const domainPaddingBarX: number = props.barData.length === 2 ? 100 : 
        (props.barData.length < 5 ? 
            (props.barData.length === 2 ? 100 : 
                props.barData.length === 3 ? 130 : 150) 
        : 0) 
    const donutChartHeight: number = props.donutChartHeight ? props.donutChartHeight : 300;
    const maxTickX: number = Math.max(...props.barData[0].map((elem) => {return elem.x;}))
    const maxTickY: number = Math.max(...props.barData[0].map((elem) => {return elem.y;}))
    const tickLabelX: number[] = Array.from({length: maxTickX}, (_,i) => i+1) 
    const tickLabelY: number[] = Array.from({length: maxTickY}, (_,i) => i+1)
    const tickeLabelSize: string = "10px"
    const axisPadding: {bottom: number,top: number,left: number,right: number}[] = props.barData.length < 5 ? 
        [{bottom: -37, top: 148, left: 50, right: 0}, {bottom: 63, left: 50, right: 50, top: 0}] : [{bottom: -37, top: 148, left: 50, right: 0}, {bottom: 33, left: 50, right: 50, top: 0}]
    const minScatterTransformValue: number = props.barChartWidth ? ((77 * props.barChartWidth)/450) : props.barData.length < 5 ? 77 : 106;
    //para 2: 66
    //para 3: 34
    //para 4: 23
    //para 5: 18
    const scatterTransformDecrement: number = (minScatterTransformValue * (props.barData.length < 5 ? (props.barData.length === 2 ? 66 : props.barData.length === 3 ? 34 : 23) : 20.7))/77;
    const simpleColor: string = props.color ? props.color : "#0B8EAB";
    // para 2 {x:165.5, y:43}
    // para 3 {x:165.5, y:11.2}
    // para 4 {x:164.8, y:-0.7}
    // para 5 {x:164.8, y:-0.7}
    const whiteFillPos: {x: number, y: number} = props.barData.length < 5 ? (props.barData.length === 2 ? {x:165.5, y:43} : (props.barData.length === 3 ? {x:165.5, y:11.2} : {x:164.8, y:-0.7})) : {x:167, y:28}
    let auxColor = props.transparencyScale ? parseInt(props.transparencyScale[0].split("#")[1], 16) : parseInt("0B8EAB66", 16)
    const transparencyScale = props.barData.map((_,i) => {
        if(i===0){
            return props.transparencyScale ? (props.transparencyScale[0].split("#")[1][0] === "0" ? `#0${auxColor.toString(16)}` : `#${auxColor.toString(16)}`) : `#${auxColor.toString(16)}`
        }
        auxColor -= parseInt((76 / props.barData.length-1).toString(), 16)
        return props.transparencyScale ? (props.transparencyScale[0].split("#")[1][0] === "0" ? `#0${auxColor.toString(16)}` : `#${auxColor.toString(16)}`) : `#${auxColor.toString(16)}`
    })
    return(
        <svg viewBox={`0 0 ${barChartWidth} ${barChartHeight}`}>
            <g transform="translate(0, -30)">
                <g transform="translate(0, -80)">
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
                </g>
                <g transform="translate(0, 20)">
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
                </g>
                {/* para 2: 44 */}
                {/* para 3: 12 */}
                {/* para 4: 0  */}
                {/* para 5: 31 */}
                <g transform={`translate(0, ${props.barData.length < 5 ? (props.barData.length === 2 ? 44 : props.barData.length === 3 ? 12 : 0) : 27})`}>
                    <VictoryBar
                        horizontal
                        domainPadding={{x: domainPaddingBarX}}
                        standalone={false}
                        barWidth={20}
                        data={props.barData.map((_,i) => {
                            return {
                                x: i+1,
                                y: props.barData.length,
                                fill: transparencyScale[i]
                            }
                        })}
                        style={{
                            data: {
                                fill: ({datum}) => datum.fill
                            }
                        }}
                    />
                </g>
                <g transform="translate(0, 20.5)">
                    {tickLabelY.map((_, i) => {
                        return <g transform={`translate(0, ${minScatterTransformValue-(scatterTransformDecrement*i)})`} key={i}>
                            <VictoryScatter
                                standalone={false}
                                domainPadding={{x: domainPaddingX}}
                                symbol="square"
                                size={11.6}
                                data={tickLabelX.map((elem, j) => {
                                    return {x: elem, y: maxTickY, fill: props.barData[i][j] ? (props.barData[i][j].completed ? simpleColor : "#AAAAAA") : "white"}
                                })}
                                style={{
                                    data: {
                                        fill: ({datum}) => datum.fill
                                    }
                                }}
                            />
                        </g>
                    })}
                </g>
                <g transform={`translate(${whiteFillPos.x}, ${whiteFillPos.y})`}>
                    <VictoryScatter
                        standalone={false}
                        domainPadding={{y: domainPaddingBarX+2}}
                        symbol="square"
                        size={props.barData.length < 5 ? 12 : 15}
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
                <g transform="translate(980, -600)">
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
                        text={[`${Math.floor(props.donutData[1].y)}%`, "success"]}
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