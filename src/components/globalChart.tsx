import React, {useState} from "react";
import victory, {VictoryChart, VictoryGroup, VictoryLabel, VictoryLine,VictoryScatter} from "victory";

type Props = {
    data: Array<Array<{
        x: string | number,
        y: string | number,
        y0?: string |number
    }>>
    width?: number,
    height?: number,
    colorScale?: Array<string>,
    textArr?: Array<string>
}

const GlobalChart = (props: Props) => {
    const [displayed, setDisplayed] = useState<boolean[]>([true, false, false, false, false])
    const textArr: string[] = ["Show all", "Reading", "Writing", "Speaking" ,"Listening"]
    const colorArr: string[] = ["#454545", "#0B8EAB", "#F93E63", "#FFC152", "#A2D9E7"]
    const domainPadding: number = 20;
    const width: number = props.width ? props.width : 1000;
    const height: number = props.height ? props.height : 350;
    const changeValue = (index: number) => {
        return displayed.map((elem,i) => {
            return index===0 ? (i===index ? true : false) : (i===index ? !elem : (i===0 ? false : elem))
        })
    }

    return(
        <svg viewBox={`0 0 ${width} ${height}`}>
            <g transform="translate(0, 40)">
                <VictoryChart
                    standalone={false}
                    categories={{
                        x: ["Week 1", "Week 2", "Week 3", "Week 4"],
                        y: ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
                    }}
                    domainPadding={domainPadding}
                > 
                    {displayed.map((elem, i) => {
                        const text: string = props.textArr ? props.textArr[i] : textArr[i];
                        return (
                            <VictoryLabel key={i}
                                textAnchor="middle"
                                verticalAnchor="middle"
                                text={text}
                                events={{
                                    onClick: (e) => setDisplayed(changeValue(i))
                                }}
                                style={{
                                    fontSize: 11
                                }}
                                backgroundStyle={{
                                    fill: displayed[i] ? "#D3CFCF" : "transparent"
                                }}
                                backgroundPadding={{left: 15, right: 8, top: 4, bottom: 4}}
                                x={110+(70*i)}
                                y={50}
                            />
                        )
                    })}
                    {displayed.map((elem, i) => {
                        const color: string = props.colorScale ? props.colorScale[i] : colorArr[i]
                        console.log(props.data[i+1])
                        return(
                            (i!==0) && (displayed[0] || displayed[i]) &&
                                <VictoryGroup key={i}
                                    data={props.data[i-1]}
                                    domainPadding={domainPadding}
                                >
                                    <VictoryLine
                                        style={{
                                            data: {stroke: color}
                                        }}
                                    />
                                    <VictoryScatter
                                        style={{
                                            data: {
                                                fill: color
                                            }
                                        }}
                                    />
                                </VictoryGroup>
                        )
                    })}
                </VictoryChart>
                {/* {props.colorScale ? props.colorScale[] : colorArr[]} */}
                <rect x={79}  y={49} width={10} height={10} fill={props.colorScale ? props.colorScale[0] : colorArr[0]} onClick={(e) => setDisplayed(changeValue(0))}/>
                <rect x={151} y={49} width={10} height={10} fill={props.colorScale ? props.colorScale[1] : colorArr[1]} onClick={(e) => setDisplayed(changeValue(1))}/>
                <rect x={221} y={49} width={10} height={10} fill={props.colorScale ? props.colorScale[2] : colorArr[2]} onClick={(e) => setDisplayed(changeValue(2))}/>
                <rect x={289} y={49} width={10} height={10} fill={props.colorScale ? props.colorScale[3] : colorArr[3]} onClick={(e) => setDisplayed(changeValue(3))}/>
                <rect x={362} y={49} width={10} height={10} fill={props.colorScale ? props.colorScale[4] : colorArr[4]} onClick={(e) => setDisplayed(changeValue(4))}/>
            </g>
        </svg>
    )
}

export default GlobalChart;