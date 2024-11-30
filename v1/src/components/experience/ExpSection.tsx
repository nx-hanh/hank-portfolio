'use client'
import ExpCard from '@/components/experience/ExpCard'
import React, { FC, useEffect, useState } from 'react'
import CareerPath from '@/types/CareerPath'
import Image from 'next/image'
import { useClientMediaQuery } from '@/hooks/useMediaQuery'

interface ExpSectionProps {
    index: number,
    item: CareerPath,
}

const ExpSection: FC<ExpSectionProps> = ({
    index,
    item,
}) => {
    const isMobile = useClientMediaQuery('(max-width: 768px)') as boolean
    const isFlip: boolean = !isMobile && index % 2 !== 0
    return <div
        className='grid grid-cols-9 md:grid-cols-11 gap-1 w-full mb-6 lg:mb-0'
    >
        <div
            className={`${isFlip ? 'col-start-7 order-3' : 'col-start-1 lg:col-start-2 order-1'} col-span-7 lg:col-span-4`}
        >
            <ExpCard data={item} isFlip={isFlip} />
        </div>
        {/* logo */}
        <div
            className='order-2 col-start-8 col-span-2 lg:col-start-6 lg:col-span-1 h-full flex justify-center'
        >
            <div
                className='mt-28 w-16 h-16 lg:mt-24 lg:w-24 lg:h-24 rounded-full border-2 bg-background border-foreground flex justify-center items-center'
            >
                <Image
                    width={80}
                    height={80}
                    src={item.logo}
                    alt={item.company}
                />
            </div>
        </div>
        {/* time */}
        <div
            className={`${isFlip ? 'col-start-2 order-1 justify-end' : 'col-start-7 order-3 justify-start'} hidden lg:flex col-span-4 h-full`}
        >
            <div
                className='mt-32 font-bold text-2xl'
            >
                {item.date}
            </div>
        </div>

    </div>
}

export default ExpSection