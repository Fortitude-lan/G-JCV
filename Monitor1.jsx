/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\public\models\monitor1.glb -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/monitor1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.005']} position={[0.214, 0.936, 0.906]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.010']} position={[0.029, 0.602, -0.062]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.012']} position={[0.169, 0.936, 0.78]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.None} position={[0.159, 0.346, -0.009]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.011']} position={[0.044, 0.813, 0.247]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Material.018']} position={[0.278, 0.55, -0.132]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.019']} position={[0.278, 0.55, -0.134]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Material.014']} position={[0.26, 0.543, -0.149]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.013']} position={[0.296, 0.543, -0.149]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Material.015']} position={[0.279, 0.543, -0.085]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.016']} position={[0.28, 0.543, -0.094]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials['Material.017']} position={[0.278, 0.543, -0.123]} rotation={[1.563, 0, 0]} />
      <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.002']} position={[0.275, 0.938, 1.072]} rotation={[1.563, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/monitor1.glb')