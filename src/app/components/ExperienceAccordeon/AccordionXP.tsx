"use client";
import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/react";

// Déclaration du composant AccordionXP
export default function AccordionXP() {
  // Utilisation du hook useState pour gérer l'état des éléments sélectionnés dans l'Accordion
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["1"]));

  // Fonction pour déterminer les styles des titres des éléments de l'Accordion en fonction de l'état sélectionné
  const addStyleAccordion = (key: string): string => {
    return selectedKeys.has(key) ? "txt_colorSecondary font_container" : "text-stone-400 font_container";
  };

  // Fonction pour ajouter un style de fond différent si l'élément de l'Accordion est sélectionné
  const addStyleAccordionBg = (key: string): string => {
    return selectedKeys.has(key) ? "p-2 duration-75 bg-zinc-100 bg-white" : "";
  };

  // Gestionnaire de changement de sélection, assure la mise à jour correcte de l'état de selectedKeys
  const handleSelectionChange = (keys: "all" | Set<React.Key>) => {
    if (typeof keys === "string") {
      setSelectedKeys(new Set([keys]));
    } else {
      // Conversion des clés en chaîne de caractères pour les utiliser dans Set<string>
      setSelectedKeys(new Set(Array.from(keys).map(key => key.toString())));
    }
  };

  return (
    <>
      {/* Titre principal de la section */}
      <div className="pb-12 text-center">
        <h2 className="max-sm:text-3xl">Éxpériences</h2>
      </div>

      {/* Conteneur flexible pour aligner les deux sections principales (Développement informatique et Graphisme) */}
      <div className="flex justify-center flex-flow-row flex-wrap gap-8">
        
        {/* Section pour les expériences de Développement informatique */}
        <motion.div
          className="lg:basis-5/12 sm:basis-3/6 max-sm:basis-full"
          initial={{ opacity: 0, scale: 1, x: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Titre de la catégorie */}
          <h3>Développement informatique</h3>
          
          {/* Composant Accordion pour afficher les expériences liées */}
          <Accordion selectedKeys={selectedKeys} onSelectionChange={handleSelectionChange} className="mt-8">
            {/* Élément 1: Développeur web (stage) */}
            <AccordionItem
              key="1"
              aria-label="Développeur web (stage)"
              title={<span className={addStyleAccordion("1")}>Développeur web (stage)</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("1")}`}
            >
              {/* Informations liées à l'expérience */}
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" href="https://www.oyopi.com/">Oyopi</Link> | Avril 2024 - Juin 2024
                </span>
              </div>
              <p>
                {/* Description des tâches réalisées pendant l'expérience */}
                Plugin graphiques, <span className="txt_colorSecondary">(intégration/déploiement)</span> dév. web
                <span className="txt_colorSecondary">(html/css/JS)</span>. Analyse code, maquettage CMS, filtrage(JetEngine) SEO,
                responsive design, debugging.
                <br />
                <br />
                Design web, logique (Constructeur de thème), CSS & JS Fonctionnalités web
                <span className="txt_colorSecondary">(maquettes, déploiement, tests)</span>. Design web responsive, propositions & travail d’équipe.
              </p>
            </AccordionItem>

            {/* Élément 2: Développement jeu vidéo */}
            <AccordionItem
              key="2"
              aria-label="Développement jeu vidéo"
              title={<span className={addStyleAccordion("2")}>Développement jeu vidéo</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("2")}`}
            >
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" href="https://gamejolt.com/games/AdamiGame/851212">Projet personnel</Link> | 2024
                </span>
              </div>
              <p>
                {/* Description des tâches liées au développement de jeu vidéo */}
                Développement orienté objet. Codage informatique <span className="txt_colorSecondary">(C#, Javascript)</span>.
                Utilisation du moteur de développement <span className="txt_colorSecondary">Unity Engine</span>. Level design et mise en application des éléments du jeu.
                <br />
                <br />
                Conception de l’espace UI et des graphismes 2D. Stratégie marketing et promotion du projet
                <span className="txt_colorSecondary">(concours, réseaux sociaux, Bêta-test, exposition)</span>.
              </p>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Section pour les expériences de Graphisme */}
        <motion.div
          className="lg:basis-5/12 sm:basis-3/6 max-sm:basis-full"
          initial={{ opacity: 0, scale: 1, x: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3>Graphisme</h3>
          <Accordion selectedKeys={selectedKeys} onSelectionChange={handleSelectionChange} className="mt-8">
            {/* Élément 3: Imprimeur polyvalent */}
            <AccordionItem
              key="3"
              aria-label="Imprimeur polyvalent"
              title={<span className={addStyleAccordion("3")}>Imprimeur polyvalent</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("3")}`}
            >
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" href="https://www.univ-amu.fr/fr">Aix Marseille Université</Link> | 2020 - 2022
                </span>
              </div>
              <p>
                {/* Description des tâches liées à l'impression et la signalétique */}
                Traitement de fichier d’impression. Configuration des imprimantes. Création graphiques de supports de communication print et web.
                <br />
                <br />
                Signalétique : <span className="txt_colorSecondary">intérieur, extérieur. Impression grand format et façonnage.</span> Accueil et conseil client.
              </p>
            </AccordionItem>

            {/* Élément 4: Graphiste */}
            <AccordionItem
              key="4"
              aria-label="Graphiste"
              title={<span className={addStyleAccordion("4")}>Graphiste</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("4")}`}
            >
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" href="https://powergeneration.mc/">Power Generation</Link> | février 2020 - août 2020
                </span>
              </div>
              <p>
                {/* Description des tâches graphiques et de création */}
                Traitement de fichiers graphiques. Montage, assemblage d’éléments de signalétique.
                Création graphique sur <span className="txt_colorSecondary">Illustrator/CorelDraw/Photoshop</span>.
                <br />
                <br />
                Configuration d’une imprimante numérique. Utilisation d’un plotter de découpe. Gestion des stocks. Analyse, conseils clients.
              </p>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </>
  );
}
