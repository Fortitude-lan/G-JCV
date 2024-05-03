/*
 * @Descripttion:
 * @version:
 * @Author: wanghexing
 * @Date: 2024-04-12 20:17:42
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-04-15 20:24:11
 */
import { Sphere, useTexture } from "@react-three/drei";
import { Color } from "three";
import { Clouds } from "./Clouds";
import { Marker } from "./Marker";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Earth({ coords, isRotate }) {
  const ref = useRef();
  //标记点半径
  const radius = 1;
  const [earthColor, earthBump, earthSpecular] = useTexture([
    "/textures/earth-color.jpg",
    "/textures/earth-bump.jpg",
    "/textures/earth-specular.png",
  ]);
  useFrame((state) => {
    if (isRotate) {
      ref.current.rotation.y += 0.0001;
    }
  });
  return (
    <group rotation={[0, 3.5, 0]} ref={ref}>
      <Clouds />
      {coords.map((coord) => {
        return <Marker key={coord.hash} radius={radius} coord={coord} />;
      })}
      <Sphere args={[radius, 32, 32]}>
        <meshPhongMaterial
          map={earthColor}
          bumpMap={earthBump}
          bumpScale={0.002}
          specularMap={earthSpecular}
          specular={new Color(0x021019)}
        />
      </Sphere>
    </group>
  );
}
