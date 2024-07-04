import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconMV: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10405" width={width} height={height}>
            <path d="M85.333333 170.368A42.666667 42.666667 0 0 1 127.658667 128h768.682666c23.381333 0 42.325333 18.986667 42.325334 42.368v683.264a42.666667 42.666667 0 0 1-42.325334 42.368H127.658667A42.368 42.368 0 0 1 85.333333 853.632V170.368z m426.666667 348.928A128 128 0 1 0 597.333333 640V341.290667h128V256h-213.333333v263.253333z" p-id="10406"></path>
        </svg>
    )
})

export default IconMV
