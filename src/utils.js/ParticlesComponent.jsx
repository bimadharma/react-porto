import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState, useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    autoPlay: true,
    background: {
      color: {
        value: "--yellow-theme-background-color",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Mode klik default
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 5, // Jumlah partikel yang keluar setiap klik
        },
      },
    },
    particles: {
      color: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            speed: 20,
            sync: false,
          },
        },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "out",
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Partikel default
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: ["circle", "square"],
      },
      size: {
        value: {
          min: 10,
          max: 20,
        },
      },
      shadow: {
        enable: true,
        blur: 10,
        color: "#ffffff",
        offset: {
          x: 3,
          y: 3,
        },
      },
    },
  };

  return init ? <Particles options={particlesOptions} /> : null;
};

export default ParticlesComponent;
