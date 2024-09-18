import { Avatar, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import ThemeSwitch from "@/app/components/ThemeToggle";
import { useEffect, useState } from "react";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function AboutCard() {
  const [text, setText] = useState("");
  const fullText = "My life's journey is an ongoing discovery, shaped by diverse cultural experiences, a commitment to disciplined growth, and a strong spiritual foundation, all of which have profoundly influenced my professional and personal endeavors.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="p-2 relative"
    >
      <motion.div variants={fadeInVariants} transition={{ duration: 0.5 }} className="absolute top-2 right-2">
        <ThemeSwitch />
      </motion.div>
      <motion.div variants={fadeInVariants} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center space-x-6 mb-2">
        <Avatar 
          isBordered
          src="/images/avatars/IMG_3918.PNG"
          size="md"
          className="bordered"
          color="primary"
          radius="full"
        />
        <div>
          <motion.h2 
            variants={slideInVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-semibold text-darkest"
          >
            Noah Sadat
          </motion.h2>
          <motion.p 
            variants={slideInVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-dark"
          >
            Frontend Developer | Content & PIM manager
          </motion.p>
        </div>
      </motion.div>
      <motion.div variants={fadeInVariants} transition={{ duration: 0.5, delay: 0.8 }}>
        <Divider />
      </motion.div>
      <motion.p 
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-4 text-dark"
      >
        {text}
      </motion.p>
    </motion.div>
  );
}