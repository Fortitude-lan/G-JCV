import { useSpring, animated } from '@react-spring/three'
import { Sphere } from '@react-three/drei'
import { useState } from 'react'

const A = {
    Sphere: animated(Sphere),
}

function placeObjectOnPlanet(
    lat,
    lon,
    radius
) {
    var latRad = lat * (Math.PI / 180)
    var lonRad = -lon * (Math.PI / 180)

    return {
        position: [
            Math.cos(latRad) * Math.cos(lonRad) * radius,
            Math.sin(latRad) * radius,
            Math.cos(latRad) * Math.sin(lonRad) * radius,
        ],
        rotation: [0.0, -lonRad, latRad - Math.PI * 0.5],
    }
}


export function Marker({ coord, radius }) {
    const [isHovered, setIsHovered] = useState(false)

    const springProps = useSpring({
        scale: isHovered ? 1.4 : 1,
    })

    const { rotation, position } = placeObjectOnPlanet(
        coord.lat,
        coord.lon,
        radius
    )

    return (
        <A.Sphere
            onClick={() => {
                console.log("点击了：",coord)
                // return (window.location.hash = coord.hash)
            }}
            position={position}
            rotation={rotation}
            args={[0.01, 10, 10]}
            onPointerEnter={() => {
                setIsHovered(true)
                document.body.style.cursor = 'pointer'
            }}
            onPointerLeave={() => {
                setIsHovered(false)
                document.body.style.cursor = 'default'
            }}
            scale={springProps.scale}>
            <meshBasicMaterial color={0xffe600} />
        </A.Sphere>
    )
}
