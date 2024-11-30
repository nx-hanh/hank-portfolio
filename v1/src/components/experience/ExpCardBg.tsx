import React, { FC } from 'react'

interface ExpCardBgProps {
  isFlip: boolean
}

const ExpCardBg: FC<ExpCardBgProps> = ({ isFlip }) => {
  return <div
    className={`${isFlip ? `scale-x-[-1]` : ''}
                exp-card-background absolute top-0 left-0 w-full h-full -z-20 
                bg-gradient-to-br 
              from-[#82E0F9] via-[#8CEED6] to-[#93FABA]`}
  >
    <svg className="w-0 h-0">
      <clipPath id="exp-card-background-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M0,0.051 C0,0.023,0.022,0,0.049,0 H0.901 C0.928,0,0.95,0.023,0.95,0.051 V0.24 C0.95,0.261,0.956,0.282,0.969,0.299 L0.986,0.324 C1,0.349,1,0.383,0.988,0.409 L0.966,0.441 C0.956,0.458,0.95,0.477,0.95,0.497 V0.949 C0.95,0.977,0.928,1,0.901,1 H0.049 C0.022,1,0,0.977,0,0.949 V0.051"></path>      </clipPath>
    </svg>
    <div className="w-full h-full p-[2px]">
      <div className="w-full h-full  exp-card-background dark:bg-[#0F2333] bg-[#F9FAFB] "></div>
    </div>
  </div>
}

export default ExpCardBg