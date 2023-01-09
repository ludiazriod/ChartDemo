import React from "react";

//["#EAF6FF", "#C8E7FF", "#A0D6FF", "#73BFF9", "#479FF8", "#3274B5", "#1E4C7C", "#142E49"]
//["#E7FFF3","#C7FFE3", "#7EE7B2", "#5ECC95", "#57A980","#377E5B","#25553D", "#142D20"]
//["#FFEFDF", "#FDDAB1", "#F7C787", "#ECB561", "#DDA43F", "#945A21", "#6C3A15", "#421E0B"]
//["#F3B9DC", "#E89BC1", "#D97FA3", "#C76884", "#984253", "#7C3341", "#5F2530", "#41171F"]

type SliceProps = {
    angle: number,
    radius: number,
    style: {}
}

type DonutProps = {
    data: Array<number>
    radius: number
    color: string[]
}

const Slice = (props: SliceProps) => {
    const { angle, radius, ...rest } = props
    const r = radius
    const dx = r * Math.sin(angle)
    const dy = r * (1 - Math.cos(angle))
    
    return (
      <path
        id="Prueba"
        {...rest}
        d={`M${r} ${r}V0a${r} ${r} 0 0 1 ${dx} ${dy}z`}
      />
    )
  }
  
  const DonutMod = (props: DonutProps) => {
    const { data, radius } = props
    const total = 10*data.length
    const diameter = 2 * radius
    const radiusX = data.length > 4 ? radius-5  : radius-15 ;
    const radiusY = data.length > 4 ? radius+10 : radius+15;

    let rotate = 0.5 * Math.PI
    
    return (
      <svg
        width={diameter+100}
        height={diameter+100}
        viewBox={`0 0 ${diameter+100} ${diameter+100}`}
      >
        <g transform="translate(50,50)">
        {data.map((value, i: number) => {
          const angle = 2 * Math.PI * 10 / total
          const angle2 = (angle * value) / 10
          const transform = `rotate(${rotate}rad)`
          const transformOrigin = `${radiusX}px ${radiusY}px`
          rotate += angle
          
          return (
            <>
              <Slice
                angle={angle}
                radius={radius}
                style={{ fill: "#D9D9D9", transform, transformOrigin}}
              />
              <Slice
                angle={angle2}
                radius={radius}
                style={{ fill: props.color[i], transform, transformOrigin}}
              />
              <text y={rotate-angle}>Buenas</text>
            </>
          )
        })}
        <circle cx={radiusX} cy={radiusY} r={radius*0.6} fill="white"/>
        </g>
      </svg>
    )
  }
  
  export default DonutMod
  //        <circle cx={radius} cy={radius} r={radius} fill="transparent" stroke="white" strokeWidth={3}/>

  //const data = [6, 2, 1, 8, 10, 4, 5, 2, 7, 8, 12]
