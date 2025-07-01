"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine); // فقط preset لینک‌ها رو لود کن
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: {
            value: "#15191e",
          },
        },
        fullScreen: {
          enable: false,
        },
        particles: {
          move: {
            speed: 0.5,
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}
