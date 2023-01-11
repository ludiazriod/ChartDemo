import React, {useState} from "react";

import "./mockCambridge.css"

const MockCambridge = () => {
    return(
        <svg viewBox="0 0 550 350">
            <g transform="translate(20, 20)">
                <path
                    fill="none"
                    stroke="black"
                    d="M10,290.6 h 500" 
                />
                <g>
                    <text x={90}  y={320}>Reading</text>
                    <text x={180} y={320}>UOE</text> {/* 80 + 10 */}
                    <text x={250} y={320}>Writing</text>
                    <text x={330} y={320}>Speaking</text>
                    <text x={410} y={320}>Listening</text>
                </g>
                <g>
                    <rect x="90" y="230" width="60" height="60" fill="#DCDCDC"/>
                    <rect x="90" y="179" width="60" height="51" fill="#7A7A7A"/>
                    <rect x="90" y="146" width="60" height="33" fill="#CEF1B8"/>
                    <rect x="90" y="127" width="60" height="19" fill="#96D86C"/>
                    <rect x="90" y="92"  width="60" height="35" fill="#4C8B54"/>
                </g>
                <g>
                    <rect x="170" y="230" width="60" height="60" fill="#DCDCDC"/>
                    <rect x="170" y="179" width="60" height="51" fill="#7A7A7A"/>
                    <rect x="170" y="146" width="60" height="33" fill="#CEF1B8"/>
                    <rect x="170" y="127" width="60" height="19" fill="#96D86C"/>
                    <rect x="170" y="92"  width="60" height="35" fill="#4C8B54"/>
                </g>
                <g>
                    <rect x="250" y="230" width="60" height="60" fill="#DCDCDC"/>
                    <rect x="250" y="179" width="60" height="51" fill="#7A7A7A"/>
                    <rect x="250" y="146" width="60" height="33" fill="#CEF1B8"/>
                    <rect x="250" y="127" width="60" height="19" fill="#96D86C"/>
                    <rect x="250" y="92"  width="60" height="35" fill="#4C8B54"/>
                </g>
                <g>
                    <rect x="330" y="230" width="60" height="60" fill="#DCDCDC"/>
                    <rect x="330" y="179" width="60" height="51" fill="#7A7A7A"/>
                    <rect x="330" y="146" width="60" height="33" fill="#CEF1B8"/>
                    <rect x="330" y="127" width="60" height="19" fill="#96D86C"/>
                    <rect x="330" y="92"  width="60" height="35" fill="#4C8B54"/>
                </g>
                <g>
                    <rect x="410" y="230" width="60" height="60" fill="#DCDCDC"/>
                    <rect x="410" y="179" width="60" height="51" fill="#7A7A7A"/>
                    <rect x="410" y="146" width="60" height="33" fill="#CEF1B8"/>
                    <rect x="410" y="127" width="60" height="19" fill="#96D86C"/>
                    <rect x="410" y="92"  width="60" height="35" fill="#4C8B54"/>
                </g>
                <g className="shadowElem">
                    <rect x="30" y="90" rx="5" ry="5" width="30" height="195" fill="white"/>
                </g>
                <g>
                    <text x="33" y="110" fontSize={13}>190</text>
                    <text x="33" y="140" fontSize={13}>180</text>
                    <text x="33" y="170" fontSize={13}>170</text>
                    <text x="33" y="195" fontSize={13}>160</text>
                    <text x="33" y="225" fontSize={13}>150</text>
                    <text x="33" y="250" fontSize={13}>140</text>
                    <text x="33" y="275" fontSize={13}>130</text>
                </g>
                <g>
                    <path
                        strokeDasharray="5,5"
                        fill="none"
                        stroke="#4DA679"
                        d="M -75,127.5 h 550" 
                    />
                    <path
                        strokeDasharray="5,5"
                        fill="none"
                        stroke="#479FF8"
                        d="M -75,180 h 550" 
                    />
                    <path
                        strokeDasharray="5,5"
                        fill="none"
                        stroke="#DE546F"
                        d="M -75,231 h 550" 
                    />
                </g>
                <g>
                    <text x="-10" y="120"   fill="#4DA679" fontSize={16}>C1</text>
                    <text x="-10" y="172.5" fill="#479FF8" fontSize={16}>B2</text>
                    <text x="-10" y="223.5" fill="#DE546F" fontSize={16}>B1</text>
                </g>
                <g>
                    <path
                        fill="white"
                        d="M 110 102.75 
                           L 110 102.75 
                           L 110 102.75 
                           L 110 102.75 
                           H 110 
                           Z 
                           V 102.75 
                           L 110 102.75 
                           L 102.5 110.25 
                           L 110 117.75 
                           H 132.5 
                           H 132.5 
                           H 132.5 
                           V 102.75 
                           Z"
                    />
                    <path
                        fill="white"
                        d="M 190 137.75 
                           L 190 137.75 
                           L 190 137.75 
                           L 190 137.75 
                           H 190 Z 
                           V 137.75 
                           L 190 137.75 
                           L 182.5 145.25 
                           L 190 152.75 
                           H 212.5 
                           H 212.5 
                           H 212.5 
                           V 137.75 
                           Z"
                    />
                    <path
                        fill="white"
                        d="M 270 102.75 
                           L 270 102.75 
                           L 270 102.75 
                           L 270 102.75 
                           H 270 Z 
                           V 102.75 
                           L 270 102.75 
                           L 262.5 110.25 
                           L 270 117.75 
                           H 292.5 
                           H 292.5 
                           H 292.5 
                           V 102.75 
                           Z"
                    />
                    <path
                        fill="white"
                        d="M 350 102.75 
                           L 350 102.75 
                           L 350 102.75 
                           L 350 102.75 
                           H 350 Z 
                           V 102.75 
                           L 350 102.75 
                           L 342.5 110.25 
                           L 350 117.75 
                           H 372.5 
                           H 372.5 
                           H 372.5 
                           V 102.75 
                           Z"
                    />
                    <path
                        fill="white"
                        d="M 430 102.75
                           L 430 102.75
                           L 430 102.75 
                           L 430 102.75 
                           H 430 Z 
                           V 102.75 
                           L 430 102.75 
                           L 422.5 110.25 
                           L 430 117.75 
                           H 452.5 
                           H 452.5 
                           H 452.5 
                           V 102.75 
                           Z"
                    />
                </g>
            </g>
        </svg>
    )
}

export default MockCambridge;