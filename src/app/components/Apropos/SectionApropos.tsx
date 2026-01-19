"use client";
import { motion } from "framer-motion";  // Importation de la bibliothèque pour ajouter des animations.

const SectionApropos = () => {
  const images: string[] = ["images/w1000-1133478AE9sXs77.webp"];  // Tableau contenant l'URL de l'image.

  return (
    <div className="flex flex-col items-center justify-center">  
      {/* Conteneur principal de la section, utilisant flexbox pour centrer le contenu. */}
      
      <div className="flex text-black justify-center pb-12">  
        {/* Titre "À propos", centré avec un padding-bottom. */}
        <h2 className="">À propos</h2>
      </div>

      <article className="max-w-[1280px] flex flex-wrap gap-16 justify-center items-center mb-20">
        {/* Conteneur principal de l'article, avec une largeur max de 1280px et flexbox pour disposer l'image et le texte côte à côte ou en colonne sur petits écrans. */}
        
        <motion.div
          className="overflow-hidden relative shadow-black/5 shadow-none rounded-r-full max-w-md"
          initial={{ opacity: 0, scale: 1, x: -20, y: 0 }}  // L'image commence invisible et légèrement décalée à gauche.
          whileInView={{ opacity: 1, x: 0 }}  // Lorsque l'image devient visible, elle s'anime et prend sa position initiale.
          transition={{ duration: 1 }}  // Durée de l'animation : 1 seconde.
          viewport={{ once: true }}  // L'animation ne se déclenche qu'une fois.
        >
          <motion.img
            whileHover="hover"  // Animation supplémentaire au survol.
            initial={{ opacity: 0, scale: 2, x: 100, y: 0 }}  // Image invisible au départ avec un zoom appliqué.
            className="img pointer-events-none "  // Classe CSS pour styliser l'image.
            src={images[0]}  // Chemin de l'image à afficher.
            animate={{ opacity: 1 }}  // L'image devient visible.
            exit={{ opacity: 0 }}  // Animation lorsqu'on quitte la vue.
            transition={{ duration: 0.5 }}  // Durée de cette animation : 0.5 seconde.
            loading={"eager"}
          />
        </motion.div>

        <motion.div
          className="text-black md:w-[50%]"  // Texte noir avec une largeur de 50% sur écran moyen et plus.
          initial={{ opacity: 0, scale: 1, x: 20, y: 0 }}  // Texte invisible et décalé à droite au départ.
          whileInView={{ opacity: 1, x: 0 }}  // Le texte apparaît progressivement lorsqu'il entre dans le viewport.
          transition={{ duration: 1 }}  // Durée de l'animation : 1 seconde.
          viewport={{ once: true }}  // L'animation se produit une seule fois.
        >
          <p className="mt-4">
            {/* Contenu textuel décrivant le parcours et les compétences de la personne. */}
            Passionné par le design, les jeux vidéo et l&apos;informatique, j&apos;ai un
            parcours atypique. Diplômé en signalétique et graphisme, j&apos;ai
            commencé par développer un jeu en C# avec Unity avant de me spécialiser
            en web design <span className="txt_colorSkill2">(HTML, CSS, WordPress, UI/UX)</span>). <br/> <br/>
            Après des expériences en publicité et graphisme,
            j’ai suivi une formation chez Simplon où j’ai acquis des compétences en (<span
              className="txt_colorSecondary">API REST, React, MySQL</span>)
            Entre 2024 et 2025, en alternance au sein de la DirNum d’AMU à Aix-en-Provence via Ynov, j’ai participé à la
            migration d’une application web métier
            (<span className="txt_colorSecondary">Symfony 5.4 → 6.4</span>).
            <br/> <br/>
            Récemment formé sur les technologies web modernes, je cherche à mettre à profit mon expérience et mes compétences techniques dans des projets ambitieux.
          </p>
        </motion.div>
      </article>
    </div>
  );
};

export default SectionApropos;  // Export du composant pour être utilisé ailleurs.
