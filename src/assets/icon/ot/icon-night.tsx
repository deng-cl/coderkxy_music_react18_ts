import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconNight: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1901" width={width} height={height}><path d="M512 512m-410 0a410 410 0 1 0 820 0 410 410 0 1 0-820 0Z" fill="#262A3C" p-id="1902"></path><path d="M548.685 541.204c-81.5 70.5-204.6 62-275.6-18.9-0.4-0.4-0.7-0.8-1-1.2 7.4 132.4 120.7 233.8 253.2 226.5 132.4-7.4 233.8-120.7 226.5-253.2-5.7-103-76.6-190.8-176.1-218.2 62.8 81.4 51 197.8-27 265z" fill="#FFDC00" p-id="1903"></path><path d="M427.285 423.604l15.5 28 31.4 6-21.9 23.4 4 31.8-29-13.6-29 13.6 4-31.8-21.9-23.4 31.4-6 15.5-28M426.685 292.204l10.5 20.1 21.4 4.3-14.9 16.8 2.7 22.8-19.7-9.8-19.7 9.8 2.7-22.8-14.9-16.8 21.4-4.3 10.5-20.1" fill="#FFDC00" p-id="1904"></path>
        </svg>
    )
})

export default IconNight
