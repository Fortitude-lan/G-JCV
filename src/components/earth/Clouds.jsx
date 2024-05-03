/*
 * @Descripttion: 
 * @version: 
 * @Author: wanghexing
 * @Date: 2024-04-12 20:17:42
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-04-12 20:24:09
 */
import { Sphere, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export function Clouds() {
  const [earthClouds] = useTexture(['/textures/earth-clouds.jpg'])
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    if (!cloudsRef.current) return
    cloudsRef.current.rotation.y = clock.elapsedTime * 0.007
  })

  return (
    <Sphere ref={cloudsRef} args={[1.01, 32, 32]}>
      <meshPhongMaterial transparent alphaMap={earthClouds} />
    </Sphere>
  )
}
