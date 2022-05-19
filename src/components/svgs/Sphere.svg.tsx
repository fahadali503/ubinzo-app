import * as React from "react"
import Svg, {
    SvgProps,
    Rect,
    G,
    RadialGradient,
    Stop,
    ClipPath,
    Path,
    Circle,
    Ellipse,
} from "react-native-svg"

export const Sphere = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/500/svg"
        width={1000}
        height={1000}
        xmlSpace="preserve"
        {...props}
    >
        <Rect width="100%" height="100%" fill="#fff" />
        <G>
            <G transform="matrix(.0923 0 0 .1761 536.598 254.742)" clipPath="url(#a)">
                <RadialGradient
                    id="b"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-1362.6602 797.6468 -794.5147 -1357.3095 570.404 504.435)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#f9c0c5",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="99.1%"
                        style={{
                            stopColor: "#ab4c5a",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="a">
                    <Path
                        transform="translate(-960 -540)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#b)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-960 -540)"
                    d="M0 0h1920v1080H0z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 493.97 174.915)" clipPath="url(#c)">
                <ClipPath id="c">
                    <Path
                        transform="translate(-498.159 -86.691)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#861f2a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={79.776}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 496.1 160.866)" clipPath="url(#d)">
                <RadialGradient
                    id="e"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(240.3729 112.5221 -109.2284 233.3366 -34.489 -24.385)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#e24171",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#7f212d",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="d">
                    <Path
                        transform="translate(-521.226 -6.915)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#e)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={117.748}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 496.1 160.866)" clipPath="url(#f)">
                <RadialGradient
                    id="g"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(90.575 -124.0183 138.6011 101.2254 -55.042 72.112)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="f">
                    <Path
                        transform="translate(-521.226 -6.915)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#g)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={117.748}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 496.1 160.866)" clipPath="url(#h)">
                <RadialGradient
                    id="i"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-201.007 0 0 -161.727 72.808 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="h">
                    <Path
                        transform="translate(-521.226 -6.915)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#i)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={117.748}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 496.92 151.413)"
                clipPath="url(#j)"
            >
                <ClipPath id="j">
                    <Path
                        transform="rotate(76.479 235.398 -359.704)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ff6a82",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={25.69}
                    ry={50.972}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 495.744 153.625)" clipPath="url(#k)">
                <ClipPath id="k">
                    <Path
                        transform="translate(-517.374 34.204)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-517.374 34.204)"
                    d="M486.804-40.333a5.988 5.988 0 0 0 2.512-1.677c.488-.549 1.491-.604 2.075-.16a4.632 4.632 0 1 0 .131-7.467c-.599.425-1.6.334-2.069-.23a6.023 6.023 0 0 0-10.317 5.832 6.021 6.021 0 0 0 7.668 3.702Zm23.51-3.78c-.239.241-.75.126-.862-.194a4.631 4.631 0 1 0-1.085 4.788c.239-.24.75-.125.861.195a4.632 4.632 0 0 0 5.899 2.848c.486-.17 1.057.003 1.424.365.916.905 2.421 1.237 3.864.734.198-.07.387-.151.566-.245.527-.275 1.271-.2 1.767.128.599.394 1.421.71 2.353.864 2.019.333 3.791-.214 3.958-1.224.167-1.01-1.334-2.098-3.353-2.432a7.11 7.11 0 0 0-1.249-.097c-.684.009-1.386-.63-1.611-1.276-.59-1.69-2.634-2.514-4.566-1.84a.077.077 0 0 1-.101-.061 4.633 4.633 0 0 0-7.865-2.553Zm45.374 21.584a4.632 4.632 0 1 1-8.965 2.14c-.091-.675-.739-1.272-1.416-1.34-1.284-.13-2.392-.885-2.8-2.057a2.83 2.83 0 0 1-.154-.751c-.049-.723-.601-1.554-1.317-1.667l-.058-.01c-2.019-.333-3.521-1.422-3.354-2.431.167-1.01 1.939-1.558 3.958-1.224 1.565.26 2.819.971 3.226 1.749.025.047.08.07.13.053 1.932-.674 3.976.15 4.566 1.84.087.251.137.506.154.762a.1.1 0 0 0 .132.088 4.631 4.631 0 0 1 5.898 2.848Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 500.345 172.393)" clipPath="url(#l)">
                <ClipPath id="l">
                    <Path
                        transform="translate(-567.218 -72.37)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-567.218 -72.37)"
                    d="M613.307-22.347s24.35 36.196 25.667 52.32c-29.616 164.858-182.217 153.319-134.256 107.602 59.599-56.811 108.589-58.908 108.589-159.922Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 483.408 312.95)" clipPath="url(#m)">
                <ClipPath id="m">
                    <Path
                        transform="translate(-383.723 -870.535)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#a52e3a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={151.511}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 472.11 296.806)" clipPath="url(#n)">
                <RadialGradient
                    id="o"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(456.5179 213.7029 -207.4477 443.1555 -65.501 -46.313)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="n">
                    <Path
                        transform="translate(-261.318 -778.861)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#o)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={223.628}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 472.11 296.806)" clipPath="url(#p)">
                <RadialGradient
                    id="q"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(172.0212 -235.5371 263.2323 192.248 -104.536 136.956)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="p">
                    <Path
                        transform="translate(-261.318 -778.861)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#q)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={223.628}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 472.11 296.806)" clipPath="url(#r)">
                <RadialGradient
                    id="s"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-381.755 0 0 -307.152 138.278 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="r">
                    <Path
                        transform="translate(-261.318 -778.861)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#s)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={223.628}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 473.668 278.853)"
                clipPath="url(#t)"
            >
                <ClipPath id="t">
                    <Path
                        transform="rotate(76.479 568.613 161.959)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={48.79}
                    ry={96.806}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 462.645 288.3)" clipPath="url(#u)">
                <ClipPath id="u">
                    <Path
                        transform="translate(-158.766 -730.564)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={7.278}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 468.066 270.79)"
                clipPath="url(#v)"
            >
                <ClipPath id="v">
                    <Path
                        transform="rotate(9.886 3757.475 -942.105)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={5.868}
                    ry={4.034}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 469.8 270.213)"
                clipPath="url(#w)"
            >
                <ClipPath id="w">
                    <Path
                        transform="rotate(9.886 3747.94 -1052.359)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={9.536}
                    ry={6.235}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 471.435 283.053)" clipPath="url(#x)">
                <ClipPath id="x">
                    <Path
                        transform="translate(-254 -700.763)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-254 -700.763)"
                    d="M195.944 689.128a11.389 11.389 0 0 0 4.772-3.186c.926-1.042 2.83-1.146 3.94-.303a8.796 8.796 0 0 0 13.636-9.894 8.796 8.796 0 0 0-13.387-4.286c-1.139.805-3.039.633-3.93-.439-2.962-3.563-7.93-5.102-12.562-3.486-5.963 2.079-9.111 8.599-7.031 14.562 2.079 5.963 8.599 9.112 14.562 7.032Zm44.65-7.179c-.453.457-1.424.238-1.636-.37a8.796 8.796 0 1 0-16.611 5.793 8.796 8.796 0 0 0 11.202 5.409 8.755 8.755 0 0 0 3.348-2.107c.453-.458 1.424-.239 1.636.369a8.796 8.796 0 0 0 11.202 5.409c.925-.322 2.008.006 2.705.694 1.739 1.718 4.598 2.349 7.338 1.393a8.098 8.098 0 0 0 1.075-.464c1.002-.523 2.413-.38 3.357.242 1.136.749 2.697 1.347 4.468 1.64 3.834.634 7.2-.406 7.517-2.323.317-1.917-2.534-3.985-6.369-4.619a13.462 13.462 0 0 0-2.372-.185c-1.299.017-2.631-1.195-3.059-2.422-1.12-3.211-5.003-4.776-8.672-3.497l-.113.041a.045.045 0 0 1-.06-.036 8.797 8.797 0 0 0-14.956-4.967Zm86.175 40.991a8.797 8.797 0 1 1-17.026 4.063c-.173-1.281-1.404-2.415-2.69-2.544-2.439-.245-4.542-1.68-5.318-3.906a5.402 5.402 0 0 1-.292-1.426c-.093-1.373-1.142-2.952-2.5-3.165a27.03 27.03 0 0 1-.112-.018c-3.834-.635-6.685-2.703-6.368-4.62.317-1.917 3.682-2.957 7.516-2.323 2.972.491 5.354 1.845 6.127 3.321a.203.203 0 0 0 .246.1c3.669-1.28 7.552.286 8.672 3.497.165.475.261.96.292 1.445a.19.19 0 0 0 .251.167 8.796 8.796 0 0 1 11.202 5.409Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 480.172 318.697)" clipPath="url(#y)">
                <ClipPath id="y">
                    <Path
                        transform="translate(-348.667 -903.174)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-348.667 -903.174)"
                    d="M436.199 723.286s46.246 68.744 48.746 99.367C428.7 1135.75 138.879 1113.84 229.965 1027.01c113.192-107.895 206.234-111.878 206.234-303.724Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 571.15 336.166)" clipPath="url(#z)">
                <ClipPath id="z">
                    <Path
                        transform="translate(-1334.34 -1002.37)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#a52e3a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={189.818}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 576.216 302.739)" clipPath="url(#A)">
                <RadialGradient
                    id="B"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(571.9404 267.7339 -259.897 555.1989 -82.06 -58.023)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="A">
                    <Path
                        transform="translate(-1389.22 -812.553)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#B)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={280.168}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 576.216 302.739)" clipPath="url(#C)">
                <RadialGradient
                    id="D"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(215.5134 -295.0881 329.7856 240.8543 -130.96 171.583)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="C">
                    <Path
                        transform="translate(-1389.22 -812.553)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#D)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={280.168}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 576.216 302.739)" clipPath="url(#E)">
                <RadialGradient
                    id="F"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-478.274 0 0 -384.81 173.24 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="E">
                    <Path
                        transform="translate(-1389.22 -812.553)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#F)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={280.168}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 578.167 280.247)"
                clipPath="url(#G)"
            >
                <ClipPath id="G">
                    <Path
                        transform="rotate(76.479 1139.694 -552.436)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={61.125}
                    ry={121.282}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 564.357 292.083)" clipPath="url(#H)">
                <ClipPath id="H">
                    <Path
                        transform="translate(-1260.74 -752.044)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={9.118}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 571.15 270.145)"
                clipPath="url(#I)"
            >
                <ClipPath id="I">
                    <Path
                        transform="rotate(9.886 4294.572 -7400.207)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={7.352}
                    ry={5.055}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 573.323 269.423)"
                clipPath="url(#J)"
            >
                <ClipPath id="J">
                    <Path
                        transform="rotate(9.886 4282.626 -7538.34)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={11.947}
                    ry={7.812}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 575.37 285.509)" clipPath="url(#K)">
                <ClipPath id="K">
                    <Path
                        transform="translate(-1380.058 -714.71)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-1380.058 -714.71)"
                    d="M1307.32 700.132a14.25 14.25 0 0 0 5.98-3.992c1.16-1.304 3.55-1.436 4.94-.379a10.994 10.994 0 0 0 10.3 1.638c5.75-2.004 8.78-8.287 6.78-14.034-2.01-5.747-8.29-8.781-14.04-6.776-.99.348-1.91.825-2.73 1.407-1.43 1.008-3.81.793-4.93-.551-3.71-4.463-9.93-6.391-15.73-4.367-7.47 2.606-11.42 10.774-8.81 18.245 2.6 7.471 10.77 11.415 18.24 8.809Zm55.94-8.994c-.57.573-1.78.299-2.05-.463-2-5.747-8.29-8.781-14.03-6.777-5.75 2.005-8.78 8.288-6.78 14.035 2 5.746 8.29 8.78 14.03 6.776 1.64-.57 3.06-1.487 4.2-2.64.57-.573 1.78-.299 2.05.463 2 5.747 8.29 8.781 14.03 6.776 1.16-.404 2.52.007 3.39.869 2.18 2.153 5.76 2.943 9.19 1.746.48-.165.93-.36 1.35-.582 1.26-.655 3.02-.475 4.21.303 1.42.938 3.38 1.689 5.59 2.055 4.81.795 9.02-.508 9.42-2.91.4-2.402-3.17-4.993-7.98-5.787-1.02-.17-2.03-.244-2.97-.232-1.63.021-3.3-1.497-3.83-3.034-1.4-4.023-6.27-5.984-10.87-4.381l-.12.043c-.04.016-.09-.012-.1-.059-.1-.69-.26-1.382-.5-2.065-2.01-5.747-8.29-8.781-14.04-6.776-1.63.57-3.05 1.487-4.19 2.64Zm107.96 51.355c2.01 5.747-1.03 12.03-6.77 14.034-5.75 2.004-12.03-1.029-14.04-6.776-.25-.717-.42-1.443-.52-2.168-.21-1.604-1.76-3.025-3.37-3.187-3.05-.307-5.69-2.105-6.66-4.893a6.61 6.61 0 0 1-.37-1.788c-.11-1.719-1.43-3.697-3.13-3.965l-.14-.022c-4.8-.795-8.37-3.386-7.98-5.788.4-2.402 4.62-3.705 9.42-2.91 3.72.616 6.71 2.311 7.68 4.161.05.111.18.166.3.125 4.6-1.603 9.46.358 10.87 4.381.21.595.33 1.202.36 1.81.01.155.17.261.32.209 5.74-2.004 12.03 1.03 14.03 6.777Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 586.316 330.165)" clipPath="url(#L)">
                <ClipPath id="L">
                    <Path
                        transform="translate(-1498.656 -968.296)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1498.656 -968.296)"
                    d="M1608.32 742.926s57.94 86.125 61.07 124.49c-70.46 392.264-433.56 364.804-319.45 256.024 141.81-135.173 258.38-140.162 258.38-380.514Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 600.051 321.11)" clipPath="url(#M)">
                <ClipPath id="M">
                    <Path
                        transform="translate(-1647.46 -916.879)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#861f2a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={216.183}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 605.82 283.04)" clipPath="url(#N)">
                <RadialGradient
                    id="O"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(651.3812 304.9213 -295.9961 632.3149 -93.46 -66.082)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#e24171",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#7f212d",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="N">
                    <Path
                        transform="translate(-1709.97 -700.696)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#O)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={319.083}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 605.82 283.04)" clipPath="url(#P)">
                <RadialGradient
                    id="Q"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(245.4476 -336.0749 375.5919 274.3083 -149.16 195.414)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="P">
                    <Path
                        transform="translate(-1709.97 -700.696)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#Q)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={319.083}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 605.82 283.04)" clipPath="url(#R)">
                <RadialGradient
                    id="S"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-544.706 0 0 -438.26 197.3 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="R">
                    <Path
                        transform="translate(-1709.97 -700.696)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#S)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={319.083}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 608.043 257.425)"
                clipPath="url(#T)"
            >
                <ClipPath id="T">
                    <Path
                        transform="rotate(76.479 1219.303 -822.611)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ff6a82",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={69.616}
                    ry={138.127}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 592.315 270.905)" clipPath="url(#U)">
                <ClipPath id="U">
                    <Path
                        transform="translate(-1563.65 -631.782)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={10.384}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 600.051 245.92)"
                clipPath="url(#V)"
            >
                <ClipPath id="V">
                    <Path
                        transform="rotate(9.886 3655.84 -9279.08)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={8.373}
                    ry={5.757}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 602.526 245.097)"
                clipPath="url(#W)"
            >
                <ClipPath id="W">
                    <Path
                        transform="rotate(9.886 3642.234 -9436.4)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={13.607}
                    ry={8.897}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 604.857 263.417)" clipPath="url(#X)">
                <ClipPath id="X">
                    <Path
                        transform="translate(-1699.53 -589.263)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-1699.53 -589.263)"
                    d="M1616.69 572.66c2.72-.948 5.03-2.54 6.81-4.547 1.32-1.485 4.04-1.635 5.62-.431a12.541 12.541 0 0 0 11.74 1.865c6.55-2.282 10-9.438 7.72-15.983-2.28-6.545-9.44-10.001-15.98-7.718-1.14.397-2.19.94-3.12 1.602-1.63 1.149-4.34.904-5.61-.626-4.23-5.083-11.31-7.279-17.92-4.974-8.51 2.967-13 12.27-10.04 20.779 2.97 8.508 12.27 13 20.78 10.033Zm63.71-10.244c-.65.653-2.03.34-2.33-.527-2.29-6.545-9.44-10.001-15.99-7.718-6.54 2.283-10 9.439-7.71 15.984 2.28 6.545 9.43 10 15.98 7.717a12.592 12.592 0 0 0 4.78-3.007c.64-.652 2.03-.34 2.33.528 2.28 6.545 9.44 10 15.98 7.717 1.32-.46 2.87.008 3.86.99 2.49 2.451 6.56 3.351 10.47 1.988.54-.187 1.05-.409 1.54-.663 1.43-.745 3.44-.541 4.79.346 1.62 1.068 3.85 1.922 6.37 2.34 5.47.905 10.28-.579 10.73-3.314.45-2.736-3.62-5.687-9.09-6.592a19.314 19.314 0 0 0-3.38-.263c-1.86.024-3.76-1.706-4.37-3.456-1.6-4.581-7.14-6.815-12.37-4.989a.215.215 0 0 1-.28-.164 11.71 11.71 0 0 0-.55-2.206c-2.28-6.545-9.44-10.001-15.98-7.718-1.87.65-3.48 1.694-4.78 3.007Zm122.96 58.488c2.28 6.545-1.17 13.701-7.72 15.984-6.54 2.283-13.7-1.173-15.98-7.718-.29-.817-.48-1.643-.59-2.468-.25-1.828-2.01-3.446-3.84-3.63-3.48-.35-6.48-2.398-7.59-5.573a8.076 8.076 0 0 1-.42-2.036c-.13-1.958-1.63-4.211-3.56-4.516-.06-.008-.11-.017-.16-.026-5.47-.904-9.54-3.855-9.09-6.591.45-2.735 5.25-4.219 10.73-3.315 4.24.702 7.63 2.633 8.74 4.739.06.127.21.19.35.143 5.23-1.826 10.77.408 12.37 4.989.24.678.37 1.37.42 2.061.01.177.19.298.36.24 6.54-2.283 13.7 1.172 15.98 7.717Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 617.325 314.277)" clipPath="url(#Y)">
                <ClipPath id="Y">
                    <Path
                        transform="translate(-1834.605 -878.073)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1834.605 -878.073)"
                    d="M1959.5 621.398s65.99 98.088 69.55 141.781c-80.25 446.751-493.78 415.481-363.81 291.591 161.5-153.955 294.26-159.636 294.26-433.372Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 529.392 355.973)" clipPath="url(#Z)">
                <ClipPath id="Z">
                    <Path
                        transform="translate(-881.919 -1114.85)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#a52e3a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={212.405}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 535.06 318.569)" clipPath="url(#aa)">
                <RadialGradient
                    id="ab"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(639.9986 299.593 -290.8233 621.2647 -91.825 -64.927)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="aa">
                    <Path
                        transform="translate(-943.336 -902.444)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#ab)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={313.506}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 535.06 318.569)" clipPath="url(#ac)">
                <RadialGradient
                    id="ad"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(241.1586 -330.2023 369.0281 269.5145 -146.55 191.995)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="ac">
                    <Path
                        transform="translate(-943.336 -902.444)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#ad)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={313.506}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 535.06 318.569)" clipPath="url(#ae)">
                <RadialGradient
                    id="af"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-535.187 0 0 -430.601 193.854 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="ae">
                    <Path
                        transform="translate(-943.336 -902.444)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#af)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={313.506}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 537.244 293.4)"
                clipPath="url(#ag)"
            >
                <ClipPath id="ag">
                    <Path
                        transform="rotate(76.479 965.412 -233.778)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={68.399}
                    ry={135.713}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 521.79 306.645)" clipPath="url(#ah)">
                <ClipPath id="ah">
                    <Path
                        transform="translate(-799.568 -834.735)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={10.203}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 529.392 282.096)"
                clipPath="url(#ai)"
            >
                <ClipPath id="ai">
                    <Path
                        transform="rotate(9.886 4460.758 -4750.892)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={8.227}
                    ry={5.656}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 531.823 281.288)"
                clipPath="url(#aj)"
            >
                <ClipPath id="aj">
                    <Path
                        transform="rotate(9.886 4447.39 -4905.46)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={13.369}
                    ry={8.741}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 534.114 299.288)"
                clipPath="url(#ak)"
            >
                <ClipPath id="ak">
                    <Path
                        transform="translate(-933.08 -792.958)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-933.08 -792.958)"
                    d="M851.688 776.645a15.95 15.95 0 0 0 6.69-4.467c1.299-1.459 3.968-1.606 5.523-.424a12.32 12.32 0 0 0 11.534 1.833c6.431-2.242 9.826-9.273 7.583-15.704-2.243-6.43-9.274-9.825-15.704-7.583-1.117.39-2.143.924-3.063 1.575-1.597 1.128-4.26.887-5.51-.616-4.152-4.994-11.117-7.152-17.61-4.887-8.36 2.916-12.774 12.056-9.858 20.416 2.915 8.359 12.056 12.773 20.415 9.857Zm62.596-10.064c-.636.641-1.997.334-2.294-.518-2.243-6.431-9.274-9.826-15.704-7.583-6.431 2.243-9.826 9.274-7.583 15.704 2.243 6.431 9.274 9.826 15.704 7.583a12.278 12.278 0 0 0 4.693-2.954c.636-.642 1.996-.335 2.294.518 2.242 6.43 9.274 9.825 15.704 7.582 1.297-.452 2.817.008 3.793.973 2.438 2.408 6.446 3.293 10.287 1.953.527-.184 1.03-.402 1.508-.651 1.404-.733 3.382-.532 4.705.34 1.593 1.049 3.781 1.889 6.264 2.299 5.375.889 10.093-.569 10.538-3.257.444-2.687-3.553-5.587-8.928-6.476a18.948 18.948 0 0 0-3.325-.259c-1.821.024-3.69-1.676-4.289-3.395-1.57-4.502-7.013-6.696-12.158-4.902a.204.204 0 0 1-.268-.161 12.488 12.488 0 0 0-.544-2.168c-2.243-6.43-9.274-9.825-15.704-7.583a12.28 12.28 0 0 0-4.693 2.955Zm120.806 57.466c2.25 6.431-1.15 13.462-7.58 15.704-6.43 2.243-13.46-1.152-15.7-7.583a12.44 12.44 0 0 1-.59-2.425c-.24-1.795-1.96-3.385-3.77-3.567-3.42-.344-6.36-2.355-7.452-5.475a7.59 7.59 0 0 1-.409-2c-.13-1.924-1.601-4.138-3.505-4.437l-.157-.026c-5.375-.888-9.372-3.788-8.928-6.476.445-2.687 5.163-4.145 10.538-3.256 4.163.689 7.503 2.586 8.593 4.656a.28.28 0 0 0 .34.14c5.14-1.794 10.59.401 12.16 4.902.23.666.36 1.346.41 2.025.01.174.18.293.35.235 6.43-2.243 13.46 1.152 15.7 7.583Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 546.363 349.259)"
                clipPath="url(#al)"
            >
                <ClipPath id="al">
                    <Path
                        transform="translate(-1065.791 -1076.72)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1065.791 -1076.72)"
                    d="M1188.5 824.532s64.84 96.374 68.34 139.304c-78.85 438.934-485.152 408.214-357.457 286.494 158.687-151.26 289.117-156.85 289.117-425.798Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 561.55 345.99)" clipPath="url(#am)">
                <ClipPath id="am">
                    <Path
                        transform="translate(-1230.33 -1058.16)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#861f2a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={140.876}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 565.31 321.182)" clipPath="url(#an)">
                <RadialGradient
                    id="ao"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(424.474 198.7027 -192.8863 412.049 -60.9 -43.063)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#e24171",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#7f212d",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="an">
                    <Path
                        transform="translate(-1271.06 -917.284)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#ao)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={207.931}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 565.31 321.182)" clipPath="url(#ap)">
                <RadialGradient
                    id="aq"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(159.9465 -219.004 244.7554 178.7537 -97.2 127.346)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="ap">
                    <Path
                        transform="translate(-1271.06 -917.284)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#aq)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={207.931}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 565.31 321.182)" clipPath="url(#ar)">
                <RadialGradient
                    id="as"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-354.959 0 0 -285.593 128.57 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="ar">
                    <Path
                        transform="translate(-1271.06 -917.284)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#as)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={207.931}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 566.758 304.49)"
                clipPath="url(#at)"
            >
                <ClipPath id="at">
                    <Path
                        transform="rotate(76.479 1165.238 -405.178)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ff6a82",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={45.365}
                    ry={90.011}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 556.509 313.274)"
                clipPath="url(#au)"
            >
                <ClipPath id="au">
                    <Path
                        transform="translate(-1175.71 -872.376)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={6.767}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 561.55 296.992)"
                clipPath="url(#av)"
            >
                <ClipPath id="av">
                    <Path
                        transform="rotate(9.886 5123.895 -6722.733)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={5.456}
                    ry={3.751}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 563.162 296.456)"
                clipPath="url(#aw)"
            >
                <ClipPath id="aw">
                    <Path
                        transform="rotate(9.886 5115.03 -6825.246)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={8.867}
                    ry={5.797}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 564.682 308.395)"
                clipPath="url(#ax)"
            >
                <ClipPath id="ax">
                    <Path
                        transform="translate(-1264.26 -844.67)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-1264.26 -844.67)"
                    d="M1210.28 833.849a10.533 10.533 0 0 0 4.43-2.963c.86-.968 2.64-1.065 3.67-.281a8.171 8.171 0 0 0 7.65 1.216c4.26-1.487 6.51-6.151 5.03-10.416a8.182 8.182 0 0 0-12.45-3.985c-1.06.749-2.83.589-3.66-.408a10.632 10.632 0 0 0-11.68-3.241c-5.54 1.933-8.47 7.996-6.53 13.54 1.93 5.545 7.99 8.472 13.54 6.538Zm41.51-6.675c-.42.425-1.32.222-1.52-.344-1.49-4.265-6.15-6.516-10.41-5.029a8.173 8.173 0 0 0-5.03 10.416c1.48 4.265 6.15 6.516 10.41 5.029a8.022 8.022 0 0 0 3.11-1.96c.43-.425 1.33-.221 1.53.344 1.48 4.265 6.15 6.517 10.41 5.029.86-.299 1.87.005 2.52.645 1.61 1.598 4.27 2.184 6.82 1.296.35-.122.68-.267 1-.432.93-.486 2.24-.353 3.12.225 1.06.696 2.51 1.253 4.16 1.525 3.56.59 6.69-.377 6.98-2.16.3-1.782-2.35-3.705-5.92-4.295-.76-.126-1.5-.181-2.2-.172-1.21.016-2.45-1.111-2.85-2.252-1.04-2.985-4.65-4.441-8.06-3.251-.08.028-.17-.023-.18-.106a7.475 7.475 0 0 0-.36-1.438c-1.49-4.265-6.15-6.517-10.41-5.03a8.146 8.146 0 0 0-3.12 1.96Zm80.13 38.114c1.49 4.265-.77 8.928-5.03 10.416a8.183 8.183 0 0 1-10.42-5.03 8.43 8.43 0 0 1-.38-1.608c-.16-1.191-1.31-2.246-2.5-2.366-2.27-.228-4.23-1.562-4.95-3.631a5.15 5.15 0 0 1-.27-1.327c-.09-1.276-1.06-2.744-2.32-2.943-.04-.005-.07-.011-.11-.017-3.56-.589-6.21-2.512-5.92-4.295.3-1.782 3.42-2.749 6.99-2.16 2.76.457 4.98 1.715 5.7 3.088a.18.18 0 0 0 .22.093c3.42-1.19 7.03.266 8.07 3.252.15.441.24.892.27 1.343.01.115.12.194.23.156a8.182 8.182 0 0 1 10.42 5.029Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 572.806 341.537)"
                clipPath="url(#ay)"
            >
                <ClipPath id="ay">
                    <Path
                        transform="translate(-1352.28 -1032.871)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1352.28 -1032.871)"
                    d="M1433.67 865.609s43 63.92 45.32 92.393c-52.29 291.118-321.77 270.748-237.08 190.018 105.25-100.33 191.76-104.03 191.76-282.411Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 489.089 357.76)" clipPath="url(#az)">
                <ClipPath id="az">
                    <Path
                        transform="translate(-445.268 -1125)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#861f2a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={77.377}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 491.154 344.134)"
                clipPath="url(#aA)"
            >
                <RadialGradient
                    id="aB"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(233.1455 109.1389 -105.9439 226.3203 -33.452 -23.65)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#e24171",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#7f212d",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="aA">
                    <Path
                        transform="translate(-467.642 -1047.62)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#aB)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={114.207}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 491.154 344.134)"
                clipPath="url(#aC)"
            >
                <RadialGradient
                    id="aD"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(87.8519 -120.2898 134.4333 98.1815 -53.387 69.95)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="aC">
                    <Path
                        transform="translate(-467.642 -1047.62)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#aD)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={114.207}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 491.154 344.134)"
                clipPath="url(#aE)"
            >
                <RadialGradient
                    id="aF"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-194.963 0 0 -156.864 70.619 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="aE">
                    <Path
                        transform="translate(-467.642 -1047.62)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#aF)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={114.207}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 491.95 334.966)"
                clipPath="url(#aG)"
            >
                <ClipPath id="aG">
                    <Path
                        transform="rotate(76.479 869.82 195.602)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ff6a82",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={24.917}
                    ry={49.439}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 486.32 339.792)" clipPath="url(#aH)">
                <ClipPath id="aH">
                    <Path
                        transform="translate(-415.268 -1022.96)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={3.717}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 489.089 330.848)"
                clipPath="url(#aI)"
            >
                <ClipPath id="aI">
                    <Path
                        transform="rotate(9.886 5842.886 -2088.283)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={2.997}
                    ry={2.06}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 489.974 330.554)"
                clipPath="url(#aJ)"
            >
                <ClipPath id="aJ">
                    <Path
                        transform="rotate(9.886 5838.016 -2144.587)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={4.87}
                    ry={3.184}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 490.81 337.112)" clipPath="url(#aK)">
                <ClipPath id="aK">
                    <Path
                        transform="translate(-463.907 -1007.743)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-463.907 -1007.743)"
                    d="M434.255 1001.8a5.812 5.812 0 0 0 2.437-1.63c.473-.532 1.445-.586 2.012-.15a4.477 4.477 0 0 0 4.202.66 4.492 4.492 0 1 0-4.075-7.907c-.581.411-1.551.324-2.007-.224a5.842 5.842 0 0 0-10.006 5.657 5.844 5.844 0 0 0 7.437 3.594Zm22.803-3.669c-.232.233-.727.121-.836-.189a4.492 4.492 0 1 0-2.762 5.718c.667-.23 1.244-.6 1.71-1.07.231-.24.727-.13.835.19a4.5 4.5 0 0 0 5.721 2.76c.472-.17 1.026 0 1.382.35.888.88 2.348 1.2 3.747.71.192-.06.376-.14.55-.23.511-.27 1.232-.2 1.714.12.58.38 1.377.69 2.282.84 1.958.32 3.676-.21 3.838-1.19.162-.98-1.294-2.03-3.252-2.36-.419-.07-.827-.1-1.211-.09-.664.01-1.344-.61-1.563-1.24-.572-1.64-2.555-2.44-4.429-1.79a.07.07 0 0 1-.097-.05 4.491 4.491 0 0 0-7.629-2.479Zm44.01 20.929a4.5 4.5 0 0 1-2.763 5.73 4.496 4.496 0 0 1-5.932-3.65c-.089-.65-.717-1.23-1.374-1.3-1.246-.12-2.32-.86-2.716-1.99a2.79 2.79 0 0 1-.149-.73c-.048-.7-.583-1.51-1.277-1.62-.019 0-.038-.01-.057-.01-1.958-.32-3.414-1.38-3.253-2.36.162-.98 1.881-1.51 3.839-1.18 1.518.25 2.734.94 3.129 1.69.024.05.077.07.125.05 1.875-.65 3.857.15 4.429 1.79.085.24.134.49.15.74.004.06.068.1.128.08a4.5 4.5 0 0 1 5.721 2.76Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 495.271 355.315)"
                clipPath="url(#aL)"
            >
                <ClipPath id="aL">
                    <Path
                        transform="translate(-512.251 -1111.112)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-512.251 -1111.112)"
                    d="M556.954 1019.24s23.618 35.11 24.895 50.75c-28.725 159.9-176.737 148.71-130.219 104.37 57.807-55.11 105.324-57.14 105.324-155.12Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 453.513 264.624)"
                clipPath="url(#aM)"
            >
                <ClipPath id="aM">
                    <Path
                        transform="translate(-59.832 -596.115)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#861f2a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={173.526}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 458.144 234.066)"
                clipPath="url(#aN)"
            >
                <RadialGradient
                    id="aO"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(522.8517 244.7547 -237.5906 507.5475 -75.018 -53.043)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#e24171",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#7f212d",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="aN">
                    <Path
                        transform="translate(-110.008 -422.589)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#aO)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={256.122}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 458.144 234.066)"
                clipPath="url(#aP)"
            >
                <RadialGradient
                    id="aQ"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(197.0165 -269.7614 301.4807 220.1822 -119.726 156.855)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="aP">
                    <Path
                        transform="translate(-110.008 -422.589)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#aQ)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={256.122}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 458.144 234.066)"
                clipPath="url(#aR)"
            >
                <RadialGradient
                    id="aS"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-437.225 0 0 -351.783 158.371 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="aR">
                    <Path
                        transform="translate(-110.008 -422.589)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#aS)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={256.122}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 459.928 213.505)"
                clipPath="url(#aT)"
            >
                <ClipPath id="aT">
                    <Path
                        transform="rotate(76.479 258.736 70.874)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ff6a82",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={55.879}
                    ry={110.872}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 447.303 224.325)"
                clipPath="url(#aU)"
            >
                <ClipPath id="aU">
                    <Path
                        transform="translate(7.445 -367.273)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={8.335}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 453.513 204.27)"
                clipPath="url(#aV)"
            >
                <ClipPath id="aV">
                    <Path
                        transform="rotate(9.886 1494.995 -219.414)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={6.721}
                    ry={4.621}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 455.5 203.61)"
                clipPath="url(#aW)"
            >
                <ClipPath id="aW">
                    <Path
                        transform="rotate(9.886 1484.08 -345.693)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={10.922}
                    ry={7.141}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 457.37 218.315)" clipPath="url(#aX)">
                <ClipPath id="aX">
                    <Path
                        transform="translate(-101.628 -333.143)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-101.628 -333.143)"
                    d="M35.135 319.817a13.04 13.04 0 0 0 5.465-3.65c1.061-1.192 3.242-1.312 4.512-.346a10.065 10.065 0 0 0 9.423 1.497c5.254-1.832 8.027-7.576 6.195-12.829-1.832-5.254-7.576-8.028-12.83-6.195-.913.318-1.75.754-2.502 1.286-1.305.922-3.48.725-4.501-.503-3.393-4.08-9.082-5.843-14.387-3.992-6.83 2.381-10.436 9.849-8.054 16.678 2.382 6.83 9.85 10.435 16.679 8.054Zm51.138-8.223c-.52.524-1.631.273-1.874-.423-1.832-5.254-7.576-8.027-12.83-6.195-5.254 1.832-8.027 7.576-6.195 12.83 1.832 5.253 7.576 8.027 12.83 6.195a10.038 10.038 0 0 0 3.834-2.414c.52-.524 1.631-.273 1.874.423 1.832 5.254 7.576 8.027 12.83 6.195 1.059-.369 2.3.006 3.099.795 1.991 1.967 5.265 2.69 8.404 1.595.43-.15.841-.328 1.231-.532 1.147-.598 2.763-.434 3.844.278 1.301.857 3.089 1.543 5.117 1.878 4.392.727 8.246-.465 8.609-2.66.363-2.196-2.902-4.565-7.294-5.291a15.53 15.53 0 0 0-2.716-.212c-1.488.02-3.014-1.369-3.504-2.774-1.282-3.677-5.729-5.47-9.932-4.004a.166.166 0 0 1-.219-.132 10.225 10.225 0 0 0-.444-1.771c-1.833-5.253-7.577-8.027-12.83-6.194a10.023 10.023 0 0 0-3.834 2.413Zm98.696 46.948c1.832 5.253-.941 10.997-6.195 12.829-5.253 1.833-10.997-.941-12.83-6.194a10.143 10.143 0 0 1-.474-1.982c-.198-1.467-1.608-2.766-3.081-2.914-2.794-.281-5.203-1.924-6.092-4.473a6.235 6.235 0 0 1-.334-1.634c-.106-1.571-1.307-3.38-2.863-3.625l-.128-.02c-4.391-.727-7.657-3.095-7.294-5.291.363-2.196 4.218-3.387 8.609-2.661 3.404.563 6.131 2.113 7.017 3.804a.233.233 0 0 0 .281.115c4.203-1.466 8.65.327 9.932 4.004.19.545.3 1.099.336 1.655a.217.217 0 0 0 .286.192c5.254-1.832 10.998.941 12.83 6.195Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 467.378 259.139)"
                clipPath="url(#aY)"
            >
                <ClipPath id="aY">
                    <Path
                        transform="translate(-210.05 -564.965)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-210.05 -564.965)"
                    d="M310.3 358.938s52.966 78.733 55.83 113.805C301.712 831.338-30.221 806.238 74.1 706.796 203.739 583.221 310.3 578.66 310.3 358.938Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 477.727 344.469)"
                clipPath="url(#aZ)"
            >
                <ClipPath id="aZ">
                    <Path
                        transform="translate(-322.177 -1049.52)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#861f2a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={149.517}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 466.09 339.092)" clipPath="url(#ba)">
                <RadialGradient
                    id="bb"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(450.5087 210.8899 -204.717 437.322 -64.638 -45.708)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#e24171",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#7f212d",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="ba">
                    <Path
                        transform="translate(-196.094 -1018.99)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bb)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={220.684}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 466.09 339.092)" clipPath="url(#bc)">
                <RadialGradient
                    id="bd"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(169.7571 -232.4369 259.7671 189.7173 -103.16 135.15)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bc">
                    <Path
                        transform="translate(-196.094 -1018.99)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bd)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={220.684}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 466.09 339.092)" clipPath="url(#be)">
                <RadialGradient
                    id="bf"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-376.73 0 0 -303.109 136.458 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="be">
                    <Path
                        transform="translate(-196.094 -1018.99)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bf)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={220.684}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 467.627 321.375)"
                clipPath="url(#bg)"
            >
                <ClipPath id="bg">
                    <Path
                        transform="rotate(76.479 689.1 324.212)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ff6a82",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={48.148}
                    ry={95.532}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 456.749 330.698)"
                clipPath="url(#bh)"
            >
                <ClipPath id="bh">
                    <Path
                        transform="translate(-94.892 -971.323)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={7.182}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 462.1 313.418)"
                clipPath="url(#bi)"
            >
                <ClipPath id="bi">
                    <Path
                        transform="rotate(9.886 5124.533 -447.39)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={5.791}
                    ry={3.981}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 463.811 312.849)"
                clipPath="url(#bj)"
            >
                <ClipPath id="bj">
                    <Path
                        transform="rotate(9.886 5115.123 -556.193)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={9.411}
                    ry={6.153}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 465.423 325.518)"
                clipPath="url(#bk)"
            >
                <ClipPath id="bk">
                    <Path
                        transform="translate(-188.87 -941.908)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-188.87 -941.908)"
                    d="M131.58 930.433a11.236 11.236 0 0 0 4.709-3.144c.914-1.028 2.793-1.131 3.888-.299a8.681 8.681 0 1 0 .246-13.994c-1.124.795-2.998.625-3.878-.433-2.923-3.515-7.826-5.034-12.397-3.44-5.884 2.052-8.991 8.487-6.939 14.371 2.053 5.885 8.487 8.991 14.371 6.939Zm44.062-7.085c-.447.452-1.405.236-1.614-.364a8.68 8.68 0 1 0-16.393 5.717 8.68 8.68 0 0 0 11.055 5.337 8.645 8.645 0 0 0 3.304-2.079c.447-.452 1.405-.236 1.614.364a8.68 8.68 0 0 0 11.055 5.338c.912-.318 1.982.005 2.67.685 1.716 1.695 4.537 2.317 7.241 1.374a7.944 7.944 0 0 0 1.061-.458c.989-.516 2.381-.374 3.312.239 1.122.739 2.662 1.33 4.41 1.619 3.784.626 7.105-.401 7.418-2.293.313-1.892-2.501-3.933-6.285-4.558a13.396 13.396 0 0 0-2.34-.183c-1.282.017-2.598-1.179-3.02-2.39-1.105-3.168-4.936-4.713-8.558-3.45a.144.144 0 0 1-.189-.114 8.68 8.68 0 0 0-11.437-6.863 8.645 8.645 0 0 0-3.304 2.079Zm85.041 40.452a8.68 8.68 0 1 1-16.802 4.01c-.17-1.264-1.385-2.383-2.654-2.511-2.407-.242-4.483-1.658-5.249-3.854a5.427 5.427 0 0 1-.288-1.408c-.091-1.354-1.126-2.913-2.467-3.124l-.11-.017c-3.784-.626-6.598-2.667-6.285-4.559.313-1.892 3.634-2.918 7.418-2.292 2.933.485 5.283 1.82 6.046 3.277a.201.201 0 0 0 .242.099c3.622-1.263 7.453.282 8.558 3.45.164.469.258.947.289 1.426a.187.187 0 0 0 .247.165 8.682 8.682 0 0 1 11.055 5.338Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 474.046 360.695)"
                clipPath="url(#bl)"
            >
                <ClipPath id="bl">
                    <Path
                        transform="translate(-282.294 -1141.662)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-282.294 -1141.662)"
                    d="M368.674 964.141s45.637 67.839 48.104 98.059c-55.505 308.98-341.51 287.35-251.624 201.67 111.702-106.48 203.52-110.41 203.52-299.729Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 602.022 268.655)"
                clipPath="url(#bm)"
            >
                <ClipPath id="bm">
                    <Path
                        transform="translate(-1668.81 -619.003)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#a52e3a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={189.818}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 607.088 235.228)"
                clipPath="url(#bn)"
            >
                <RadialGradient
                    id="bo"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(571.9404 267.7339 -259.897 555.1989 -82.06 -58.023)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bn">
                    <Path
                        transform="translate(-1723.7 -429.186)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bo)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={280.168}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 607.088 235.228)"
                clipPath="url(#bp)"
            >
                <RadialGradient
                    id="bq"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(215.5134 -295.0881 329.7856 240.8543 -130.97 171.582)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bp">
                    <Path
                        transform="translate(-1723.7 -429.186)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bq)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={280.168}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 607.088 235.228)"
                clipPath="url(#br)"
            >
                <RadialGradient
                    id="bs"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-478.274 0 0 -384.81 173.24 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="br">
                    <Path
                        transform="translate(-1723.7 -429.186)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bs)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={280.168}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 609.04 212.736)"
                clipPath="url(#bt)"
            >
                <ClipPath id="bt">
                    <Path
                        transform="rotate(76.479 1063.682 -956.336)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={61.125}
                    ry={121.282}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 595.23 224.572)" clipPath="url(#bu)">
                <ClipPath id="bu">
                    <Path
                        transform="translate(-1595.22 -368.677)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={9.118}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 602.022 202.634)"
                clipPath="url(#bv)"
            >
                <ClipPath id="bv">
                    <Path
                        transform="rotate(9.886 2245.56 -9525.366)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={7.352}
                    ry={5.055}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 604.194 201.912)"
                clipPath="url(#bw)"
            >
                <ClipPath id="bw">
                    <Path
                        transform="rotate(9.886 2233.614 -9663.499)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={11.947}
                    ry={7.812}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 606.242 217.998)"
                clipPath="url(#bx)"
            >
                <ClipPath id="bx">
                    <Path
                        transform="translate(-1714.53 -331.343)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-1714.53 -331.343)"
                    d="M1641.79 316.765a14.26 14.26 0 0 0 5.98-3.992c1.16-1.305 3.55-1.436 4.94-.379a11.014 11.014 0 0 0 10.31 1.638c5.74-2.004 8.78-8.288 6.77-14.035-2-5.746-8.28-8.78-14.03-6.776-1 .348-1.92.826-2.74 1.407-1.43 1.008-3.81.793-4.92-.55-3.71-4.463-9.94-6.391-15.74-4.367-7.47 2.605-11.42 10.773-8.81 18.244 2.61 7.471 10.77 11.415 18.24 8.81Zm55.94-8.995c-.56.573-1.78.299-2.05-.463-2-5.746-8.28-8.78-14.03-6.776-5.75 2.004-8.78 8.287-6.78 14.034 2.01 5.747 8.29 8.781 14.04 6.777a10.989 10.989 0 0 0 4.19-2.641c.57-.573 1.79-.299 2.05.463 2.01 5.747 8.29 8.781 14.04 6.777 1.15-.404 2.51.006 3.39.869 2.17 2.152 5.76 2.942 9.19 1.745.47-.164.92-.359 1.35-.582 1.25-.654 3.02-.475 4.2.304 1.42.938 3.38 1.688 5.6 2.055 4.8.794 9.02-.509 9.42-2.911.39-2.401-3.18-4.993-7.98-5.787a16.98 16.98 0 0 0-2.97-.232c-1.63.022-3.3-1.497-3.84-3.034-1.4-4.023-6.26-5.984-10.86-4.38l-.12.043c-.05.016-.1-.013-.1-.06-.1-.69-.27-1.381-.51-2.065-2-5.746-8.29-8.78-14.03-6.776-1.64.57-3.05 1.488-4.2 2.64Zm107.97 51.355c2 5.747-1.03 12.031-6.78 14.035-5.75 2.004-12.03-1.03-14.03-6.777-.25-.717-.43-1.443-.52-2.167-.22-1.605-1.76-3.026-3.37-3.188-3.06-.307-5.7-2.105-6.67-4.893a6.986 6.986 0 0 1-.36-1.787c-.12-1.719-1.43-3.698-3.14-3.965-.04-.008-.09-.015-.14-.023-4.8-.794-8.37-3.386-7.97-5.787.39-2.402 4.61-3.705 9.41-2.911 3.73.616 6.71 2.311 7.68 4.161.06.112.19.167.31.126 4.59-1.604 9.46.357 10.86 4.38.21.595.33 1.202.37 1.81.01.155.16.261.31.21 5.75-2.004 12.03 1.03 14.04 6.776Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 617.188 262.654)"
                clipPath="url(#by)"
            >
                <ClipPath id="by">
                    <Path
                        transform="translate(-1833.13 -584.929)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1833.13 -584.929)"
                    d="M1942.79 359.559s57.94 86.125 61.07 124.49c-70.46 392.262-433.56 364.805-319.44 256.027 141.81-135.177 258.37-140.166 258.37-380.517Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 543.108 298.037)"
                clipPath="url(#bz)"
            >
                <ClipPath id="bz">
                    <Path
                        transform="translate(-1030.53 -785.855)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#a52e3a",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={223.001}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 526.48 274.276)" clipPath="url(#bA)">
                <RadialGradient
                    id="bB"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(671.9239 314.5377 -305.3309 652.2561 -96.407 -68.166)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bA">
                    <Path
                        transform="translate(-850.371 -650.925)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bB)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={329.145}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 526.48 274.276)" clipPath="url(#bC)">
                <RadialGradient
                    id="bD"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(253.1885 -346.674 387.4371 282.9593 -153.86 201.577)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bC">
                    <Path
                        transform="translate(-850.371 -650.925)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bD)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={329.145}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 526.48 274.276)" clipPath="url(#bE)">
                <RadialGradient
                    id="bF"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-561.884 0 0 -452.081 203.529 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bE">
                    <Path
                        transform="translate(-850.371 -650.925)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bF)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={329.145}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 528.772 247.853)"
                clipPath="url(#bG)"
            >
                <ClipPath id="bG">
                    <Path
                        transform="rotate(76.479 755.411 -304.859)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={71.811}
                    ry={142.483}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 512.548 261.758)"
                clipPath="url(#bH)"
            >
                <ClipPath id="bH">
                    <Path
                        transform="translate(-699.431 -579.838)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={10.712}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 520.528 235.984)"
                clipPath="url(#bI)"
            >
                <ClipPath id="bI">
                    <Path
                        transform="rotate(9.886 2899.028 -4326.647)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={8.637}
                    ry={5.938}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 523.08 235.136)"
                clipPath="url(#bJ)"
            >
                <ClipPath id="bJ">
                    <Path
                        transform="rotate(9.886 2884.993 -4488.92)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={14.036}
                    ry={9.177}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 525.486 254.034)"
                clipPath="url(#bK)"
            >
                <ClipPath id="bK">
                    <Path
                        transform="translate(-839.602 -535.978)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-839.602 -535.978)"
                    d="M754.151 518.851a16.75 16.75 0 0 0 7.023-4.69c1.364-1.532 4.166-1.686 5.799-.445a12.937 12.937 0 0 0 12.11 1.925c6.751-2.355 10.315-9.737 7.961-16.488-2.355-6.751-9.737-10.316-16.488-7.961-1.173.409-2.25.97-3.216 1.653-1.676 1.185-4.472.932-5.784-.646-4.36-5.244-11.672-7.509-18.489-5.131-8.777 3.061-13.411 12.657-10.35 21.434 3.061 8.777 12.657 13.41 21.434 10.349Zm65.718-10.566c-.667.673-2.096.351-2.408-.544-2.355-6.752-9.737-10.316-16.488-7.961-6.751 2.354-10.316 9.736-7.961 16.487 2.355 6.752 9.736 10.316 16.488 7.961a12.895 12.895 0 0 0 4.927-3.101c.667-.674 2.096-.352 2.408.543 2.355 6.752 9.736 10.316 16.488 7.962 1.361-.475 2.956.007 3.981 1.02 2.559 2.529 6.767 3.458 10.801 2.051a11.807 11.807 0 0 0 1.582-.684c1.475-.769 3.552-.558 4.941.357 1.672 1.102 3.97 1.983 6.576 2.414 5.644.934 10.597-.597 11.064-3.419.466-2.822-3.73-5.866-9.374-6.799a19.81 19.81 0 0 0-3.491-.272c-1.912.025-3.873-1.759-4.503-3.565-1.648-4.726-7.363-7.03-12.764-5.146a.213.213 0 0 1-.281-.169 12.986 12.986 0 0 0-.571-2.276c-2.355-6.751-9.737-10.316-16.488-7.961a12.885 12.885 0 0 0-4.927 3.102Zm126.836 60.332c2.354 6.752-1.21 14.133-7.962 16.488-6.751 2.355-14.133-1.21-16.487-7.961a13.021 13.021 0 0 1-.611-2.546c-.254-1.886-2.066-3.555-3.959-3.745-3.59-.361-6.685-2.473-7.828-5.748a8.056 8.056 0 0 1-.429-2.1c-.137-2.02-1.68-4.344-3.68-4.659l-.164-.026c-5.644-.934-9.84-3.978-9.374-6.799.467-2.822 5.42-4.353 11.064-3.42 4.374.724 7.879 2.715 9.017 4.889a.3.3 0 0 0 .362.147c5.401-1.884 11.115.42 12.763 5.146.244.7.386 1.413.432 2.127a.279.279 0 0 0 .368.246c6.751-2.354 14.133 1.21 16.488 7.961Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 538.346 306.497)"
                clipPath="url(#bL)"
            >
                <ClipPath id="bL">
                    <Path
                        transform="translate(-978.938 -833.894)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-978.938 -833.894)"
                    d="M1107.77 569.126s68.07 101.182 71.75 146.253c-82.79 460.831-509.36 428.581-375.295 300.781 166.601-158.804 303.545-164.665 303.545-447.034Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 586.357 251.662)"
                clipPath="url(#bM)"
            >
                <ClipPath id="bM">
                    <Path
                        transform="translate(-1499.09 -522.507)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#9d343f",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={66.43}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 580.225 250.986)"
                clipPath="url(#bN)"
            >
                <RadialGradient
                    id="bO"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(200.1616 93.6986 -90.956 194.3027 -28.72 -20.306)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bN">
                    <Path
                        transform="translate(-1432.66 -518.667)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bO)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={98.05}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 580.225 250.986)"
                clipPath="url(#bP)"
            >
                <RadialGradient
                    id="bQ"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(75.4227 -103.2713 115.4145 84.2914 -45.83 60.049)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bP">
                    <Path
                        transform="translate(-1432.66 -518.667)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bQ)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={98.05}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 580.225 250.986)"
                clipPath="url(#bR)"
            >
                <RadialGradient
                    id="bS"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-167.381 0 0 -134.672 60.63 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="bR">
                    <Path
                        transform="translate(-1432.66 -518.667)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#bS)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={98.05}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 580.908 243.114)"
                clipPath="url(#bT)"
            >
                <ClipPath id="bT">
                    <Path
                        transform="rotate(76.479 1020.753 -676.707)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={21.392}
                    ry={42.445}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 576.075 247.256)"
                clipPath="url(#bU)"
            >
                <ClipPath id="bU">
                    <Path
                        transform="translate(-1387.7 -497.491)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={3.191}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 578.452 239.579)"
                clipPath="url(#bV)"
            >
                <ClipPath id="bV">
                    <Path
                        transform="rotate(9.886 3330.711 -7944.294)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={2.573}
                    ry={1.769}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 579.212 239.326)"
                clipPath="url(#bW)"
            >
                <ClipPath id="bW">
                    <Path
                        transform="rotate(9.886 3326.529 -7992.646)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={4.181}
                    ry={2.734}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 579.929 244.955)"
                clipPath="url(#bX)"
            >
                <ClipPath id="bX">
                    <Path
                        transform="translate(-1429.453 -484.425)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-1429.453 -484.425)"
                    d="M1404 479.324a5.026 5.026 0 0 0 2.09-1.397c.41-.457 1.24-.503 1.73-.133a3.857 3.857 0 1 0 .11-6.217c-.5.352-1.33.277-1.73-.193a4.999 4.999 0 0 0-5.5-1.528c-2.62.911-4 3.77-3.09 6.385a5.021 5.021 0 0 0 6.39 3.083Zm19.58-3.148c-.2.2-.63.104-.72-.162a3.856 3.856 0 0 0-4.91-2.372 3.864 3.864 0 0 0-2.38 4.912 3.87 3.87 0 0 0 4.92 2.371c.57-.199 1.06-.52 1.46-.924.2-.2.63-.104.72.162a3.855 3.855 0 0 0 4.91 2.372c.41-.141.88.002 1.19.304.76.753 2.02 1.03 3.22.611.16-.058.32-.126.47-.204.44-.229 1.06-.166 1.47.107.5.328 1.18.59 1.96.719 1.68.278 3.16-.178 3.29-1.019.14-.84-1.11-1.747-2.79-2.025-.36-.06-.71-.086-1.04-.081-.57.007-1.15-.524-1.34-1.062-.49-1.408-2.19-2.094-3.8-1.533a.07.07 0 0 1-.09-.051 3.35 3.35 0 0 0-.17-.678 3.854 3.854 0 0 0-4.91-2.371c-.57.2-1.06.52-1.46.924Zm37.78 17.973a3.854 3.854 0 1 1-7.28 2.54 4.154 4.154 0 0 1-.19-.759c-.07-.562-.61-1.059-1.18-1.115-1.06-.108-1.99-.737-2.33-1.713a2.739 2.739 0 0 1-.13-.625c-.04-.602-.5-1.294-1.09-1.388l-.05-.008c-1.68-.278-2.93-1.185-2.79-2.025.14-.841 1.61-1.297 3.29-1.019 1.31.216 2.35.809 2.69 1.456.02.039.07.059.11.044 1.61-.561 3.31.125 3.8 1.533.07.209.11.421.13.634 0 .054.06.091.11.073 2.01-.701 4.21.36 4.91 2.372Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 583.76 260.584)" clipPath="url(#bY)">
                <ClipPath id="bY">
                    <Path
                        transform="translate(-1470.961 -573.172)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1470.961 -573.172)"
                    d="M1509.34 494.3s20.28 30.141 21.37 43.568c-24.66 137.279-151.73 127.67-111.79 89.601 49.62-47.307 90.42-49.053 90.42-133.169Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 463.035 276.322)"
                clipPath="url(#bZ)"
            >
                <ClipPath id="bZ">
                    <Path
                        transform="translate(-162.997 -662.545)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#9d343f",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={66.43}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 469.477 281.89)" clipPath="url(#ca)">
                <RadialGradient
                    id="cb"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(200.1616 93.6986 -90.956 194.3027 -28.72 -20.306)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="ca">
                    <Path
                        transform="translate(-232.793 -694.165)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cb)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={98.05}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 469.477 281.89)" clipPath="url(#cc)">
                <RadialGradient
                    id="cd"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(75.4227 -103.2713 115.4145 84.2914 -45.834 60.048)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="cc">
                    <Path
                        transform="translate(-232.793 -694.165)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cd)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={98.05}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 469.477 281.89)" clipPath="url(#ce)">
                <RadialGradient
                    id="cf"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-167.381 0 0 -134.672 60.629 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="ce">
                    <Path
                        transform="translate(-232.793 -694.165)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cf)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={98.05}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 470.16 274.02)"
                clipPath="url(#cg)"
            >
                <ClipPath id="cg">
                    <Path
                        transform="rotate(76.479 532.198 172.346)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={21.392}
                    ry={42.445}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 465.327 278.161)"
                clipPath="url(#ch)"
            >
                <ClipPath id="ch">
                    <Path
                        transform="translate(-187.829 -672.988)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={3.191}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 467.704 270.484)"
                clipPath="url(#ci)"
            >
                <ClipPath id="ci">
                    <Path
                        transform="rotate(9.886 3745.478 -920.295)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={2.573}
                    ry={1.769}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 468.465 270.231)"
                clipPath="url(#cj)"
            >
                <ClipPath id="cj">
                    <Path
                        transform="rotate(9.886 3741.3 -968.635)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={4.181}
                    ry={2.734}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 469.181 275.861)"
                clipPath="url(#ck)"
            >
                <ClipPath id="ck">
                    <Path
                        transform="translate(-229.585 -659.925)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-229.585 -659.925)"
                    d="M204.13 654.821a4.995 4.995 0 0 0 2.092-1.397c.406-.457 1.241-.503 1.728-.133a3.858 3.858 0 1 0 .109-6.217c-.499.353-1.332.277-1.723-.193a5.016 5.016 0 0 0-5.508-1.528 5.013 5.013 0 1 0 3.302 9.468Zm19.577-3.148c-.199.201-.624.105-.717-.162a3.857 3.857 0 1 0-.904 3.988c.199-.201.624-.105.717.162a3.857 3.857 0 0 0 4.912 2.371c.405-.141.881.003 1.186.304.762.754 2.016 1.03 3.217.611.165-.057.322-.126.472-.203.439-.229 1.058-.167 1.471.106.498.328 1.183.591 1.959.719 1.682.278 3.157-.178 3.296-1.019.139-.84-1.111-1.747-2.792-2.025a6.005 6.005 0 0 0-1.04-.081c-.57.007-1.154-.524-1.341-1.062-.491-1.408-2.194-2.094-3.803-1.533a.064.064 0 0 1-.084-.05 3.857 3.857 0 0 0-6.549-2.126Zm37.783 17.973a3.857 3.857 0 1 1-7.464 1.781c-.076-.561-.616-1.058-1.18-1.115-1.069-.108-1.991-.737-2.332-1.713a2.439 2.439 0 0 1-.128-.625c-.04-.602-.5-1.294-1.096-1.388l-.049-.008c-1.681-.278-2.931-1.185-2.792-2.025.139-.841 1.614-1.297 3.296-1.019 1.303.216 2.347.809 2.686 1.457a.09.09 0 0 0 .108.043c1.609-.561 3.311.126 3.802 1.533.072.209.115.421.128.634a.084.084 0 0 0 .11.073 3.857 3.857 0 0 1 4.911 2.372Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 473.012 291.49)" clipPath="url(#cl)">
                <ClipPath id="cl">
                    <Path
                        transform="translate(-271.092 -748.67)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-271.092 -748.67)"
                    d="M309.47 669.797s20.277 30.142 21.373 43.568c-24.661 137.28-151.733 127.671-111.796 89.602 49.629-47.308 90.423-49.054 90.423-133.17Z"
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 593.762 155.992)"
                clipPath="url(#cm)"
            >
                <ClipPath id="cm">
                    <Path
                        transform="translate(-1579.32 20.764)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#9d343f",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={43.624}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 597.993 159.648)"
                clipPath="url(#cn)"
            >
                <RadialGradient
                    id="co"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(131.4449 61.5314 -59.7299 127.5967 -18.86 -13.335)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#f88da4",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#da5251",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="cn">
                    <Path
                        transform="translate(-1625.16)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#co)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={64.389}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 597.993 159.648)"
                clipPath="url(#cp)"
            >
                <RadialGradient
                    id="cq"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(49.5298 -67.8178 75.792 55.3537 -30.1 39.433)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="cp">
                    <Path
                        transform="translate(-1625.16)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cq)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={64.389}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 597.993 159.648)"
                clipPath="url(#cr)"
            >
                <RadialGradient
                    id="cs"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-109.918 0 0 -88.4379 39.81 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="cr">
                    <Path
                        transform="translate(-1625.16)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cs)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={64.389}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 598.441 154.48)"
                clipPath="url(#ct)"
            >
                <ClipPath id="ct">
                    <Path
                        transform="rotate(76.479 796.374 -1048.884)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ffb0bd",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={14.048}
                    ry={27.873}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 600.314 165.951)"
                clipPath="url(#cu)"
            >
                <ClipPath id="cu">
                    <Path
                        transform="translate(-1650.31 -35.793)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1650.31 -35.793)"
                    d="M1675.51-16.002s13.32 19.794 14.04 28.61c-16.2 90.151-99.64 83.841-73.42 58.842 32.59-31.067 59.38-32.214 59.38-87.452Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 549.986 235.19)" clipPath="url(#cv)">
                <ClipPath id="cv">
                    <Path
                        transform="translate(-1105.04 -428.973)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#861f2a",
                        fillOpacity: 0.68,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={94.058}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 552.495 218.627)"
                clipPath="url(#cw)"
            >
                <RadialGradient
                    id="cx"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(283.4062 132.6667 -128.7836 275.1111 -40.66 -28.752)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="35.4%"
                        style={{
                            stopColor: "#e24171",
                            stopOpacity: 1,
                        }}
                    />
                    <Stop
                        offset="81%"
                        style={{
                            stopColor: "#7f212d",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="cw">
                    <Path
                        transform="translate(-1132.23 -334.915)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cx)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={138.828}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 552.495 218.627)"
                clipPath="url(#cy)"
            >
                <RadialGradient
                    id="cz"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(106.7906 -146.2212 163.415 119.3478 -64.89 85.022)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0.61,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="cy">
                    <Path
                        transform="translate(-1132.23 -334.915)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cz)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={138.828}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 552.495 218.627)"
                clipPath="url(#cA)"
            >
                <RadialGradient
                    id="cB"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(-236.994 0 0 -190.68 85.85 0)"
                    cx={0}
                    cy={0}
                    r={1}
                    fx={0}
                    fy={0}
                >
                    <Stop
                        offset="0%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="82.7%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                    <Stop
                        offset="100%"
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                </RadialGradient>
                <ClipPath id="cA">
                    <Path
                        transform="translate(-1132.23 -334.915)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "url(#cB)",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={138.828}
                />
            </G>
            <G
                transform="matrix(.0216 -.1712 .0897 .0412 553.463 207.482)"
                clipPath="url(#cC)"
            >
                <ClipPath id="cC">
                    <Path
                        transform="rotate(76.479 743.7 -589.207)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#ff6a82",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={30.289}
                    ry={60.097}
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 546.62 213.347)" clipPath="url(#cD)">
                <ClipPath id="cD">
                    <Path
                        transform="translate(-1068.57 -304.931)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Circle
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    r={4.518}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 549.986 202.476)"
                clipPath="url(#cE)"
            >
                <ClipPath id="cE">
                    <Path
                        transform="rotate(9.886 1958.566 -6266.728)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={3.643}
                    ry={2.505}
                />
            </G>
            <G
                transform="matrix(.091 -.0302 .0158 .1735 551.062 202.118)"
                clipPath="url(#cF)"
            >
                <ClipPath id="cF">
                    <Path
                        transform="rotate(9.886 1952.641 -6335.15)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Ellipse
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    rx={5.92}
                    ry={3.871}
                />
            </G>
            <G
                transform="matrix(.0923 0 0 .1761 552.077 210.089)"
                clipPath="url(#cG)"
            >
                <ClipPath id="cG">
                    <Path
                        transform="translate(-1127.694 -286.432)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.5,
                        fillRule: "evenodd",
                        opacity: 1,
                    }}
                    transform="translate(-1127.694 -286.432)"
                    d="M1091.65 279.208a7.089 7.089 0 0 0 2.96-1.978c.58-.647 1.76-.712 2.45-.188a5.457 5.457 0 0 0 8.46-6.142 5.454 5.454 0 0 0-6.95-3.358c-.5.172-.95.409-1.36.697-.7.499-1.88.393-2.44-.273a7.103 7.103 0 0 0-7.8-2.164c-3.7 1.291-5.65 5.339-4.36 9.041a7.098 7.098 0 0 0 9.04 4.365Zm27.72-4.457c-.28.284-.89.148-1.02-.229a5.454 5.454 0 0 0-6.95-3.358 5.462 5.462 0 0 0-3.36 6.954 5.458 5.458 0 0 0 6.95 3.358 5.335 5.335 0 0 0 2.08-1.308c.28-.284.89-.149 1.02.229a5.458 5.458 0 0 0 6.95 3.358c.58-.2 1.25.003 1.68.43 1.08 1.067 2.86 1.459 4.56.865a5.8 5.8 0 0 0 .67-.288c.62-.324 1.49-.235 2.08.15.7.465 1.67.837 2.77 1.019 2.38.393 4.47-.252 4.67-1.442.2-1.191-1.57-2.475-3.95-2.868a8.49 8.49 0 0 0-1.48-.115c-.8.011-1.63-.742-1.9-1.503-.69-1.994-3.1-2.966-5.38-2.171a.093.093 0 0 1-.12-.071 5.458 5.458 0 0 0-7.19-4.318c-.81.282-1.52.737-2.08 1.308Zm53.5 25.447a5.463 5.463 0 0 1-3.36 6.955 5.47 5.47 0 0 1-6.96-3.358 5.171 5.171 0 0 1-.25-1.074c-.11-.795-.88-1.499-1.67-1.58-1.52-.152-2.82-1.043-3.31-2.424-.1-.292-.16-.589-.18-.886-.05-.852-.71-1.832-1.55-1.965l-.07-.011c-2.38-.394-4.15-1.678-3.95-2.868.2-1.19 2.28-1.836 4.66-1.442 1.85.305 3.33 1.145 3.81 2.062.03.055.09.083.15.062 2.28-.794 4.69.177 5.38 2.171.11.295.17.596.19.897 0 .077.08.129.15.104 2.85-.994 5.96.51 6.96 3.357Z"
                />
            </G>
            <G transform="matrix(.0923 0 0 .1761 557.5 232.217)" clipPath="url(#cH)">
                <ClipPath id="cH">
                    <Path
                        transform="translate(-1186.459 -412.088)"
                        d="M0 0h1920v1080H0z"
                        strokeLinecap="round"
                    />
                </ClipPath>
                <Path
                    style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeDashoffset: 0,
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 4,
                        isCustomFont: "none",
                        fontFileUrl: "none",
                        fill: "#fff",
                        fillOpacity: 0.08,
                        fillRule: "nonzero",
                        opacity: 1,
                    }}
                    transform="translate(-1186.459 -412.088)"
                    d="M1240.8 300.413s28.71 42.677 30.26 61.687c-34.92 194.373-214.84 180.768-158.29 126.866 70.27-66.982 128.03-69.454 128.03-188.553Z"
                />
            </G>
        </G>
    </Svg>
)