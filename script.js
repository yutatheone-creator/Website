import { ShaderGradient } from "@shadergradient/react";

export default function App() {
  return (
    <ShaderGradient
      animate="on"
      axesHelper="off"
      brightness={0.8}
      cAzimuthAngle={270}
      cDistance={0.5}
      cPolarAngle={180}
      cameraZoom={15.09}
      color1="#73bfc4"
      color2="#000000"
      color3="#1f08ce"
      destination="onCanvas"
      embedMode="off"
      envPreset="city"
      format="gif"
      fov={45}
      frameRate={10}
      gizmoHelper="hide"
      grain="on"
      lightType="env"
      pixelDensity={1}
      positionX={-0.1}
      positionY={0}
      positionZ={0}
      range="disabled"
      rangeEnd={40}
      rangeStart={0}
      reflection={0.4}
      rotationX={0}
      rotationY={130}
      rotationZ={70}
      shader="defaults"
      type="sphere"
      uAmplitude={3.2}
      uDensity={0.8}
      uFrequency={5.5}
      uSpeed={0.3}
      uStrength={0.3}
      uTime={0}
      wireframe={false}
    />
  );
}
