import React, { FC } from 'react'

interface BannerBgProps {

}

const BannerBg: FC<BannerBgProps> = ({ }) => {
    return <div
        className="banner-background absolute top-0 left-0 w-full h-full -z-10 dark:bg-[#0F354E] bg-[#F9FAFB]"
    >
        <svg className="w-0 h-0">
            <clipPath id="banner-background-clip-path" clipPathUnits="objectBoundingBox">
                <path d="M0,0 C0,0,0.159,0,0.172,0 L0.934,0 C0.965,0,0.981,0,0.99,0.023 C1,0.046,1,0.083,1,0.158 L1,0.842 C1,0.917,1,0.954,0.99,0.977 C0.981,1,0.965,1,0.934,1 L0.516,1 C0.504,1,0.341,1,0.326,1 L0.141,1 C0.125,1,0,1,0,1 L0,0"></path>
            </clipPath>
        </svg>
        <div className="absolute top-6 right-1/4 bg-[#1D6750] w-1/3 h-1/3 rounded-full"></div>
        <div className="absolute bottom-4 right-4 bg-[#915DFF] w-1/4 h-1/3 rounded-full"></div>
        <div className="absolute bottom-4 left-4 bg-[#1371A7] w-1/4 h-1/3 rounded-full"></div>

    </div>
}

export default BannerBg