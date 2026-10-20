"use client";
import { motion, type Variants } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";

// Timeline construite à partir des expériences déjà présentes dans les accordéons.
interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  organisation: string;
  description: string;
  href: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "power-generation",
    period: "Février – août 2020",
    title: "Graphiste",
    organisation: "Power Generation",
    description: "Création graphique sur Illustrator, CorelDraw et Photoshop, signalétique, impression numérique et découpe au plotter.",
    href: "https://powergeneration.mc/",
  },
  {
    id: "amu-impression",
    period: "2020 – 2022",
    title: "Imprimeur polyvalent",
    organisation: "Aix-Marseille Université",
    description: "Préparation et traitement des fichiers d’impression, conception de supports print et web, signalétique et impression grand format.",
    href: "https://www.univ-amu.fr/fr",
  },
  {
    id: "oyopi",
    period: "Mai – juin 2024",
    title: "Développeur web (stage)",
    organisation: "Oyopi",
    description: "Intégration de plugins, HTML, CSS, JavaScript et PHP, maquettage, SEO, responsive design et tests.",
    href: "https://www.oyopi.com/",
  },
  {
    id: "dirnum",
    period: "Novembre 2024 – octobre 2025",
    title: "Développeur d’application (alternance)",
    organisation: "DIRNUM AMU",
    description: "Migration Symfony 5.4 vers 6.4, refactorisation POO, Rector, PHPStan, GitLab CI/CD, Docker et serveur Debian.",
    href: "https://dirnum.univ-amu.fr/fr",
  },
  {
    id: "skillnest",
    period: "2025 – 2026",
    title: "Co-fondateur et développeur front-end",
    organisation: "SkillNest — projet collaboratif",
    description: "Conception et développement en Next.js et TypeScript, maquettes Figma, graphisme Illustrator, stratégie produit et pitchs.",
    href: "https://skillnest.fr/",
  },
  {
    id: "adami",
    period: "2026",
    title: "Développement jeu vidéo",
    organisation: "Adami — projet personnel",
    description: "Développement C# et JavaScript avec Unity, level design, interfaces UI, graphismes 2D, bêta-tests et promotion.",
    href: "https://gamejolt.com/games/AdamiGame/851212",
  },
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const detailVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Déclaration du composant AccordionXP
export default function AccordionXP() {
  return (
      <>
        {/* Timeline séparée des colonnes afin d’utiliser toute la largeur. */}
        <section aria-labelledby="timeline-title" className="mx-auto  w-full max-w-5xl px-4 pb-10 sm:px-6">
          <div className="text-center flex justify-center flex-col items-center mb-20">
          <h2 id="timeline-title" className="max-sm:text-3xl">Expériences</h2>
          <hr className="!border-blue-800 border-t head-separator w-24" />
          </div>

          <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact w-full">
            {timelineEvents.map((event, index) => (
                <li key={event.id}>
                  {index > 0 && <hr />}

                  <div className="timeline-middle">
                    <motion.span
                        className="relative z-10 inline-flex rounded-full bg-white p-1"
                        initial={{ opacity: 0, scale: 0.65 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <CheckCircleIcon
                          className="h-5 w-5 text-blue-800"
                          aria-hidden="true"
                      />
                    </motion.span>
                  </div>

                  <motion.div
                      className={`mb-12 min-w-0 max-w-full ${
                          index % 2 === 0
                              ? "timeline-start md:text-end"
                              : "timeline-end"
                      }`}
                      variants={revealVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                  >
                    <motion.time variants={detailVariants} className="block font-mono text-sm italic txt_colorSecondary">
                      {event.period}
                    </motion.time>
                    <motion.h4 variants={detailVariants} className="mt-2 text-lg font-bold">
                      {event.title}
                    </motion.h4>
                    <motion.a
                        variants={detailVariants}
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block font-semibold underline-offset-4 hover:underline txt_colorSecondary"
                    >
                      {event.organisation}
                    </motion.a>
                    <motion.p variants={detailVariants} className="mt-2 text-sm leading-relaxed text-stone-600">
                      {event.description}
                    </motion.p>
                  </motion.div>

                  {index < timelineEvents.length - 1 && <hr />}
                </li>
            ))}
          </ul>
        </section>
      </>
  );
}