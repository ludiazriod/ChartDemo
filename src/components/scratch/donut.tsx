import React from "react";

const aux = ["#F7D497", "#EDC173", "#AF7714", "#DDA43F"]
const aux2 = ["#73BFF9", "#479FF8", "#3274B5","#1E4C7C"]
//"#D9D9D9"
//Total = 10
const Slice = (props: any) => {
    const { angle, radius, ...rest } = props
    const r = radius
    const dx = r * Math.sin(angle)
    const dy = r * (1 - Math.cos(angle))
    
    return (
      <path
        {...rest}
        d={`M${r} ${r}V0a${r} ${r} 0 0 1 ${dx} ${dy}z`}
      />
    )
  }
  
  const Donut = (props: any) => {
    const { data, radius } = props
    const total = data.reduce((a: any, b: any) => a + b, 0)
    const diameter = 2 * radius
    
    let rotate = 0.5 * Math.PI
    
    return (
      <svg
        width={diameter+100}
        height={diameter+100}
        viewBox={`0 0 ${diameter+100} ${diameter+100}`}
      >
        <g transform="translate(50,50)">
        {data.map((value: number, i: number) => {
          const angle = 2 * Math.PI * value / total
          
          const transform = `rotate(${rotate}rad)`
          const transformOrigin = `${radius}px ${radius}px`

          rotate += angle
          
          return (
            <g>
                <Slice
                  angle={angle}
                  radius={radius}
                  style={{ fill: aux[i], transform, transformOrigin}}
                />
                <Slice
                  angle={angle/2}
                  radius={radius}
                  style={{ fill: aux2[i], transform, transformOrigin}}
                />
            </g>
          )
        })}
        <circle cx={radius} cy={radius} r={radius/1.9} fill="white" stroke="none"/>
        </g>
      </svg>
    )
  }
  
  export default Donut
  //        <circle cx={radius} cy={radius} r={radius} fill="transparent" stroke="white" strokeWidth={3}/>

  //const data = [6, 2, 1, 8, 10, 4, 5, 2, 7, 8, 12]

