
import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconSettingBase: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9785" width={width} height={height}><path d="M512 341.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m85.333333 170.666667a85.333333 85.333333 0 1 0-170.666666 0 85.333333 85.333333 0 0 0 170.666666 0z" p-id="9786"></path><path d="M889.386667 782.122667A96.597333 96.597333 0 0 0 938.666667 698.24v-372.48c0-34.602667-18.773333-66.56-49.28-83.882667l-328.106667-186.24a100.010667 100.010667 0 0 0-98.56 0L134.613333 241.92A96.554667 96.554667 0 0 0 85.333333 325.76v372.48c0 34.602667 18.773333 66.56 49.28 83.882667l328.106667 186.24a100.010667 100.010667 0 0 0 98.56 0l328.106667-186.24z m-370.218667 112a14.677333 14.677333 0 0 1-14.293333 0l-328.149334-186.197334A11.264 11.264 0 0 1 170.666667 698.24v-372.48c0-3.413333 1.834667-7.253333 6.058666-9.685333l328.106667-186.197334a14.677333 14.677333 0 0 1 14.293333 0l328.149334 186.197334a11.264 11.264 0 0 1 6.058666 9.685333v372.48c0 3.413333-1.834667 7.253333-6.058666 9.685333l-328.106667 186.197334z" p-id="9787"></path></svg>

    )
})

export default IconSettingBase

