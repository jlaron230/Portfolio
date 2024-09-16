"use client";
import React, { useState, useEffect } from "react";
import { EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Hero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const link = () => {
    window.open("mailto:jlaron230@hotmail.fr")
  };

  useEffect(() => {
    // Initialisation des bulles
    const particlesContainer = document.getElementById("particles-container");
    if (particlesContainer) {
      const numParticles = 30; // Réduit le nombre de bulles
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 3 + 2; // Bulles plus petites
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = "#ffffff";
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particlesContainer.appendChild(particle);

        const moveParticle = () => {
          const moveDuration = Math.random() * 10 + 10;
          particle.animate(
            [
              {
                transform: `translateY(${Math.random() * 100}vh)`,
                opacity: 0.5,
              },
              {
                transform: `translateY(-${Math.random() * 100}vh)`,
                opacity: 0,
              },
            ],
            {
              duration: moveDuration * 1000,
              iterations: Infinity,
              easing: "linear",
            }
          );
        };

        moveParticle();
      }
    }

    // Animation de la vidéo
    const video = document.querySelector(
      ".video-background"
    ) as HTMLVideoElement;
    if (video) {
      video.style.transform = "scale(1)";
      video.animate(
        [
          { transform: "scale(1)", offset: 0 },
          { transform: "scale(1.1)", offset: 0.5 },
          { transform: "scale(1)", offset: 1 },
        ],
        {
          duration: 3000,
          fill: "forwards",
          easing: "ease-in-out",
        }
      ).onfinish = () => {
        // Stop the video after the animation
        video.style.transform = "scale(1)";
      };
    }

    // Click handler to toggle video play/pause
    const handleVideoClick = () => {
      const video = document.querySelector(
        ".video-background"
      ) as HTMLVideoElement;
      if (video) {
        if (isVideoPlaying) {
          video.pause();
        } else {
          video.play();
        }
        setIsVideoPlaying(!isVideoPlaying);
      }
    };

    // Handle particle click and remove them
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target &&
        target instanceof HTMLDivElement &&
        target.classList.contains("particle")
      ) {
        target.style.opacity = "0";
        setTimeout(() => {
          target.remove();
        }, 300);
      }
    };

    // Attach event listeners
    document.addEventListener("click", handleClick);
    document
      .querySelector(".video-background")
      ?.addEventListener("click", handleVideoClick);

    // Clean up event listeners
    return () => {
      document.removeEventListener("click", handleClick);
      document
        .querySelector(".video-background")
        ?.removeEventListener("click", handleVideoClick);
    };
  }, [isVideoPlaying]);

  return (
    <div id="Accueil" className="hero-container">
      <div className="background-video">
        <video autoPlay muted loop className="video-background">
          <source
            src="/videos/vecteezy_futuristic-threshold-with-reflections-on-wall-and-floor_2016010.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div id="particles-container" className="particles-container"></div>

      <div className="content flex flex-col items-center">
        <p className="hero-container_txt hero_font_title_orbitron ">
          Jérôme Gavino
        </p>
        <h1 className="slide-in hero_font_title_orbitron ">
          Développeur Full-Stack
        </h1>
        <div className="flex items-center gap-4 sm:flex-row max-sm:flex-col mt-4">
          <button onClick={link} className="btn flex items-center gap-2">
            Me contacter <EnvelopeIcon className="w-5" />
          </button>
          <a
            href="/documents/CV_2024_Développeur_web_et_mobile-12Mois_compressed(1).pdf"
            download="CV_2024_Développeur_web_et_mobile.pdf"
          >
            <div className="flex items-center gap-1">
              <span>Mon CV</span>
              <ArrowDownTrayIcon className="w-6 animate-pulse " />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
