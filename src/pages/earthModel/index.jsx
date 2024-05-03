/*
 * @Descripttion: 
 * @version: 
 * @Author: wanghexing
 * @Date: 2024-04-12 20:17:13
 * @LastEditors: wanghexing
 * @LastEditTime: 2024-04-15 21:05:49
 */
import { Canvas } from "@react-three/fiber";
import { Earth } from "@/components";
import { PerspectiveCamera, OrbitControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import "./index.less";
// 坐标数组
const coords = [
  { lat: 51.525437, lon: -0.127108, hash: "#london" },
  {
    lat: 40.86863,
    lon: 111.766138,
    hash: "#huhehaote",
  },
  {
    lat: -21.811314,
    lon: -40.981673,
    hash: "#brazil",
  },
  {
    lat: 23.08957,
    lon: 113.274716,
    hash: "#guangzhou",
  },
];
export default function EarthModel() {
  return (
    <div className="earth">
      <Canvas dpr={[1, 2]} style={{ width: "100vw", height: "100vh" }}>
        <color attach="background" args={[0x00000002]} />
        {/* canvas 视角 */}
        <PerspectiveCamera fov={45} position={[0, 2, 2.5]} makeDefault>
          <directionalLight
            color={0xffffff}
            intensity={1}
            position={[0, 0, 5]}
          />
        </PerspectiveCamera>
        {/* canvas 方向控制 */}
        <OrbitControls
          enablePan={false}
          autoRotateSpeed={0.05}
          autoRotate
          minDistance={3}
          maxDistance={8}
        />
        {/*Suspense异步加载  Earth是地球组件  */}
        <Suspense fallback={null}>
          <Earth coords={coords} isRotate/>
        </Suspense>

        {/* canvas html 里面照旧写html */}
        <Html wrapperClass="htmlCanvas">
          <div className="box">
            <div className="left">canvas里面的盒子左边 css写在less里面了</div>
          </div>
        </Html>
      </Canvas>
    </div>
  );
}
