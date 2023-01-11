import React from "react";

const aux = ["#F7D497", "#EDC173", "#AF7714", "#DDA43F"]
const aux2 = ["#73BFF9", "#479FF8", "#3274B5","#1E4C7C"]
//"#D9D9D9"
//Total = 10
  
  const Donut = (props: any) => {
    
    let rotate = 0.5 * Math.PI
    //"fill: rgb(217, 217, 217), transform: rotate(1.5708rad), transform-origin: 145px 160px," 
    return (
      <svg width="400" height="400" viewBox="0 0 400 400" overflow="visible" style={{border: "1px solid red"}}>
        <g>
          <line  x1="100" y1="0" x2="200" y2="0"/>
        </g>
        
</svg>
    )
  }
  
  export default Donut
  //        <circle cx={radius} cy={radius} r={radius} fill="transparent" stroke="white" strokeWidth={3}/>

  //const data = [6, 2, 1, 8, 10, 4, 5, 2, 7, 8, 12]

  /**<g transform="translate(50,50)">
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill: "rgb(217, 217, 217)", transform: "rotate(1.5708rad)", transformOrigin: "145px 160px"}}></path>
         0
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 88.16778784387097 28.64745084375788z" style={{fill: "rgb(234, 246, 255)", transform: "rotate(1.5708rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <g>
         <path id="part1" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill:" rgb(217, 217, 217)", transform: "rotate(2.35619rad)", transformOrigin: "145px 160px"}}></path>
         <use xlinkHref="#part1" fill="none"></use>
         <text fill="#000" x="179.09902576697317" dy="0">
            <textPath xlinkHref="#part1">Part 2</textPath>
         </text>
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 78.37478470739232 22.103975346886156z" style={{fill: "rgb(200, 231, 255)", transform: "rotate(2.35619rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <g>
         <path id="part2" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill: "rgb(217, 217, 217)", transform: "rotate(3.14159rad)", transformOrigin: "145px 160px"}}></path>
         <use xlinkHref="#part2" fill="none"></use>
         <text fill="#000" x="179.09902576697317" dy="0">
            <textPath xlinkHref="#part2">Part 3</textPath>
         </text>
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 78.37478470739232 22.103975346886156z" style={{fill: "rgb(160, 214, 255)", transform: "rotate(3.14159rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <g>
         <path id="part3" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill: "rgb(217, 217, 217)", transform: "rotate(3.92699rad)", transformOrigin: "145px 160px"}}></path>
         <use xlinkHref="#part3" fill="none"></use>
         <text fill="#000" x="179.09902576697317" dy="0">
            <textPath xlinkHref="#part3">Part 4</textPath>
         </text>
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 23.46516975603463 1.8467489107293344z" style={{fill: "rgb(115, 191, 249)", transform: "rotate(3.92699rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <g>
         <path id="part4" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill: "rgb(217, 217, 217)", transform: "rotate(4.71239rad)", transformOrigin: "145px 160px"}}></path>
         <use xlinkHref="#part4" fill="none"></use>
         <text fill="#000" x="179.09902576697317" dy="0">
            <textPath xlinkHref="#part4">Part 5</textPath>
         </text>
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 11.768864359176742 0.4623999400308054z" style={{fill: "rgb(71, 159, 248)", transform: "rotate(4.71239rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <g>
         <path id="part5" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill: "rgb(217, 217, 217)", transform: "rotate(5.49779rad)", transformOrigin: "145px 160px"}}></path>
         <use xlinkHref="#part5" fill="none"></use>
         <text fill="#000" x="179.09902576697317" dy="0">
            <textPath xlinkHref="#part5">Part 6</textPath>
         </text>
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 68.09857496093201 16.349021371744815z" style={{fill: "rgb(50, 116, 181)", transform: "rotate(5.49779rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <g>
         <path id="part6" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill: "rgb(217, 217, 217)", transform: "rotate(6.28319rad)", transformOrigin: "145px 160px"}}></path>
         <use xlinkHref="#part6" fill="none"></use>
         <text fill="#000" x="179.09902576697317" dy="0">
            <textPath xlinkHref="#part6">Part 7</textPath>
         </text>
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 11.768864359176742 0.4623999400308054z" style={{fill: "rgb(30, 76, 124)", transform: "rotate(6.28319rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <g>
         <path id="part7" d="M150 150V0a150 150 0 0 1 106.06601717798212 43.93398282201787z" style={{fill: "rgb(217, 217, 217)", transform: "rotate(7.06858rad)", transformOrigin: "145px 160px"}}></path>
         <use xlinkHref="#part7" fill="none"></use>
         <text fill="#000" x="179.09902576697317" dy="0" style={{transform: "rotate(7.06858rad)", transformOrigin: "145px 160px"}}>
            <textPath xlinkHref="#part7">Part 8</textPath>
         </text>
      </g>
      <g>
         <path id="" d="M150 150V0a150 150 0 0 1 88.16778784387097 28.64745084375788z" style={{fill: "rgb(20, 46, 73)", transform: "rotate(7.06858rad)", transformOrigin: "145px 160px"}}></path>
      </g>
      <text x="307.40000000000003" y="224">Part 1</text>
   </g> */

