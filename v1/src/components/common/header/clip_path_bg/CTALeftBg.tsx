import React, { FC } from 'react'

interface CTALeftBgProps {

}

const CTALeftBg: FC<CTALeftBgProps> = ({ }) => {
    return <div
        className="cta-left-background absolute top-[-0.1px] left-0 w-full h-full -z-20 dark:bg-[#0F2333] bg-[#F9FAFB]        "
    >
        <svg className="w-0 h-0">
            <clipPath id="cta-left-background-clip-path" clipPathUnits="objectBoundingBox">
                <path d="M0,0 L1,0 C0.886,0,0.829,0,0.789,0.058 C0.749,0.117,0.737,0.216,0.714,0.415 L0.69,0.62 C0.671,0.785,0.661,0.867,0.631,0.921 C0.623,0.936,0.615,0.948,0.605,0.959 C0.569,1,0.522,1,0.428,1 C0.246,1,0.155,1,0.092,0.914 C0.075,0.892,0.061,0.865,0.048,0.836 C0,0.724,0,0.561,0,0"></path>
            </clipPath>
        </svg>
    </div>
}

export default CTALeftBg