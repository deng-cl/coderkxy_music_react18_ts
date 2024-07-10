import React, { FC, memo } from 'react'
import type { ISvgProps } from '../type'

const IconLyricNormal: FC<ISvgProps> = memo((props: ISvgProps) => {
    const { width = 16, height = 16 } = props
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2634" width={width} height={height}><path d="M405.333333 85.333333a42.666667 42.666667 0 1 0 0 85.333334h426.666667v550.784c0 36.949333-8.32 61.781333-18.645333 78.762666a101.418667 101.418667 0 0 1-38.72 36.565334c-14.762667 8.106667-29.973333 12.373333-41.792 14.506666a135.978667 135.978667 0 0 1-16.938667 2.026667l-0.469333 0.021333a42.666667 42.666667 0 0 0 0.256 85.333334v-42.666667c0 42.666667 0 42.666667 0.042666 42.666667H716.885333l1.088-0.042667 1.066667-0.021333a221.461333 221.461333 0 0 0 29.162667-3.349334 225.685333 225.685333 0 0 0 67.498666-23.68 186.709333 186.709333 0 0 0 70.613334-67.072C905.770667 812.394667 917.333333 771.797333 917.333333 721.450667V170.666667a85.333333 85.333333 0 0 0-85.333333-85.333334H405.333333z m310.101334 768h0.170666-0.170666zM296.832 275.498667a42.666667 42.666667 0 0 1-60.330667 0c-9.92-9.92-19.050667-19.797333-28.096-29.589334-24.341333-26.368-48.298667-52.309333-86.549333-77.76a42.666667 42.666667 0 1 1 47.274667-71.04c47.594667 31.658667 81.322667 68.266667 106.837333 95.936 7.637333 8.298667 14.549333 15.786667 20.864 22.122667a42.666667 42.666667 0 0 1 0 60.330667zM64 405.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h149.333333a42.666667 42.666667 0 0 1 42.666667 42.666666v352.298667l34.261333-17.130667a42.666667 42.666667 0 0 1 38.144 76.330667l-128 64a42.666667 42.666667 0 0 1-49.237333-68.330667l19.498666-19.498666V448H106.666667a42.666667 42.666667 0 0 1-42.666667-42.666667z" p-id="2635"></path><path d="M448 256a42.666667 42.666667 0 1 0 0 85.333333h277.333333a42.666667 42.666667 0 1 0 0-85.333333H448zM501.333333 426.666667h170.666667a96 96 0 0 1 96 96v149.333333a96 96 0 0 1-96 96h-170.666667a96 96 0 0 1-96-96v-149.333333a96 96 0 0 1 96-96z m0 85.333333a10.666667 10.666667 0 0 0-10.666666 10.666667v149.333333a10.666667 10.666667 0 0 0 10.666666 10.666667h170.666667a10.666667 10.666667 0 0 0 10.666667-10.666667v-149.333333a10.666667 10.666667 0 0 0-10.666667-10.666667h-170.666667z" p-id="2636"></path></svg>
    )
})

export default IconLyricNormal