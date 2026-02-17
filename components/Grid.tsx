import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useSpring, animated } from "@react-spring/web"; // Import pour la lueur animée
import { motion } from "framer-motion"; // Import pour l'animation

// Composant Grid avec animation en fondu
const Grid = () => {
  return (
    <section id="about" className="relative">
      {/* Grille des éléments avec animation */}
      <motion.div
        className="relative z-10 w-full py-20"
        initial={{ opacity: 0, y: 50 }} // Départ : invisible et décalé vers le bas
        whileInView={{ opacity: 1, y: 0 }} // Quand visible : apparaître et se centrer
        viewport={{ once: true, amount: 0.2 }} // Animation déclenchée au premier scroll (20% visible)
        transition={{ duration: 0.8, ease: "easeOut" }} // Durée et easing de l'animation
      >
        <BentoGrid>
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
};

export default Grid;
