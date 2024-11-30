import React, { FC } from 'react'

interface CTARightBgProps {

}

const CTARightBg: FC<CTARightBgProps> = ({ }) => {
    return <div
        className="cta-right-background absolute top-[-0.1px] left-0 w-full h-full -z-20 dark:bg-[#0F2333] bg-[#F9FAFB]"
    >
        <svg className="w-0 h-0">
            <clipPath id="cta-right-background-clip-path" clipPathUnits="objectBoundingBox">
                <path d="M0,0 L1,0 C0.938,0,0.907,0,0.881,0.036 C0.856,0.072,0.84,0.137,0.81,0.268 L0.703,0.732 C0.672,0.863,0.657,0.928,0.632,0.964 C0.606,1,0.575,1,0.513,1 L0.449,1 C0.371,1,0.332,1,0.303,0.949 C0.275,0.897,0.263,0.808,0.241,0.63 L0.208,0.37 C0.185,0.192,0.174,0.103,0.145,0.051 C0.116,0,0.078,0,0,0"></path>
            </clipPath>
        </svg>
    </div>
}

export default CTARightBg