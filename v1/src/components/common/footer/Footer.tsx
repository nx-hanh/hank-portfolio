'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <footer
        id='footer'
        className='w-full h-60 flex flex-col justify-start items-center gap-10 my-16 lg:my-4'
    >
        {/* social icons */}
        <div
            className='flex flex-row justify-center items-center gap-6'
        >
            <Image
                src='/github.svg'
                alt='github'
                width={32}
                height={32}
                className='cursor-pointer dark:invert'
                onClick={() => window.open("https://github.com/nx-hanh", "_blank")}
            />
            <Image
                src='/linkedin.svg'
                alt='linkedin'
                width={32}
                height={32}
                className='cursor-pointer dark:invert'
                onClick={() => window.open("https://www.linkedin.com/in/nxhanh", "_blank")}
            />
            <Image
                src='/facebook.svg'
                alt='facebook'
                width={32}
                height={32}
                className='cursor-pointer dark:invert'
                onClick={() => window.open("https://www.facebook.com/nx.hanh18/", "_blank")}
            />
            <Image
                src='/reddit.svg'
                alt='reddit'
                width={32}
                height={32}
                className='cursor-pointer dark:invert'
                onClick={() => window.open("https://www.reddit.com/user/nxhanh/", "_blank")}
            />
        </div>
        {/* footer text */}
        <div
            className='flex flex-col lg:flex-row justify-center items-center gap-5'
        >
            <Link href='#about'>
                About
            </Link>
            <Link href='#skills'>
                Skills
            </Link>
            <Link href='#experience'>
                Experience
            </Link>
            <Link href='#projects'>
                Projects
            </Link>
        </div>
    </footer>
}

export default Footer