import React, { FC } from 'react'

interface LogoBgProps {

}

const LogoBg: FC<LogoBgProps> = ({ }) => {
    return <div
            className="logo-background absolute bottom-[-0.1px] left-0 w-full h-full -z-20 dark:bg-[#0F2333] bg-[#F9FAFB]"
        >
            <svg className="w-0 h-0">
                <clipPath id="logo-background-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.86 C0,0.86,0,0.271,0.059,0.144 C0.063,0.134,0.068,0.125,0.073,0.116 C0.137,0,0.236,0,0.434,0 L0.514,0 C0.574,0,0.604,0,0.63,0.015 C0.679,0.042,0.72,0.105,0.746,0.192 C0.759,0.238,0.767,0.296,0.782,0.412 C0.803,0.577,0.814,0.659,0.834,0.726 C0.87,0.849,0.929,0.94,0.999,1 C1,1,0,1,0,1 L0,0.86"></path>
                </clipPath>
            </svg>
        </div>
}

export default LogoBg