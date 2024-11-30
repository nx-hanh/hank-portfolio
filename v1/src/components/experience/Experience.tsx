import ExpSection from '@/components/experience/ExpSection'
import React, { FC } from 'react'
import { CareerPathValue as Data } from '@/lib/config'
import CareerPath from '@/types/CareerPath'

interface ExperienceProps {

}

const Experience: FC<ExperienceProps> = ({ }) => {
    const data = Data.items as CareerPath[]
    return <div
        id='experience'
        className='w-full h-full flex flex-col justify-center items-center mt-8'
    >
        <div className="w-full flex justify-center items-center mt-4 mb-10">
            <div
                className='text-4xl md:text-7xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-400 via-blueTwo to-blue-500
            animate-text'
            >
                <p>CAREER PATH</p>
            </div>
        </div>
        <div
            className='relative w-full flex flex-col justify-center items-center'
        >
            {
                data.map((item, index) => (
                    <ExpSection
                        key={index}
                        index={index}
                        item={item}
                    />
                ))
            }
            {/* line background */}
            <div
                className='absolute top-0 left-0 w-full h-full justify-end px-8  lg:justify-center items-center flex -z-10'
            >
                <div
                    className='relative w-[3px] h-full bg-foreground'
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent via-90% to-background mix-blend-multiply"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-transparent via-90% to-background mix-blend-multiply"></div>
                </div>
            </div>
        </div>
    </div>
}

export default Experience