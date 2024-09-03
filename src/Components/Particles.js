import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
    const [init, setInit] = useState(false);

    // This should be run only once per application lifetime
    useEffect(() => {
        const initParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine); // Initialize the slim package
            });
            setInit(true); // Set initialization state to true once done
        };

        initParticles().catch((error) => console.error("Particles initialization failed:", error));
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles Loaded:", container);
    };

    const options = useMemo(() => ({
        autoPlay: true,
        background: {
            color: {
                value: "#1F242D", // Ensure the color is correct
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 6,
                },
                repulse: {
                    distance: 400,
                },
            },
        },
        particles: {
            color: {
                value: "#04D5E5", // Ensure the particles' color is correct
            },
            links: {
                color: "#04D5E5",
                distance: 130,
                enable: true,
                opacity: 0.4,
                width: 0.7,
            },
            move: {
                direction: "none",
                enable: true,
                speed: 5,
                outModes: {
                    default: "out",
                },
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }), []);

    if (!init) return null; // Avoid rendering until particles are initialized

    return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
