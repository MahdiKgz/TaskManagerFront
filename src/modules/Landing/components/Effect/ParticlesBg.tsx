"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine); // Load only the "links" preset
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: {
            value: "#15191e", // Background color if needed
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
            value: 0.2, // Make particles visible
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          links: {
            color: "#ffffff", // Link color between particles
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
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
