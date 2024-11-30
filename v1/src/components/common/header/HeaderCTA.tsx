'use strict'
import CTALeftBg from '@/components/common/header/clip_path_bg/CTALeftBg'
import CTARightBg from '@/components/common/header/clip_path_bg/CTARightBg'
import { CircleChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'

interface HeaderCTAProps {

}

const HeaderCTA: FC<HeaderCTAProps> = ({ }) => {
    return <div
        className='w-[95%] md:w-3/4 lg:w-1/2 flex flex-row'
    >
        <div className='relative w-1/5'>
            <CTALeftBg />
        </div>
        <Link
            href='/#contact'
            className='flex items-center gap-2 px-3 py-2 md:px-6 md:py-4 rounded-[16px] mb-2 mt-4
        bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black font-semibold'
        >
            <span>Get in touch</span>
            <CircleChevronRight size={24} />
        </Link>
        <div className='relative w-1/5'>
            <CTARightBg />
        </div>
    </div>
}

export default HeaderCTA