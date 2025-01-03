import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconArrowRight: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6550" width={width} height={height}>
            <path d="M300.992 896q15.008 0 27.008-10.016L752 544.992q16-12.992 16-34.016t-16-34.016L329.984 137.952q-14.016-11.008-32-8.992t-29.504 16-9.504 32 16 28.992l380 304.992L272.96 817.952q-14.016 11.008-16 28.992t8.992 32q14.016 16.992 35.008 16.992z" p-id="6551">
            </path>
        </svg>
    )
})

export default IconArrowRight
