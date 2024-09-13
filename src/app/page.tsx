"use client"

import { Card } from "@nextui-org/react";
import AboutCard from "@/app/components/AboutCard";
import ContactCards from "@/app/components/ContactCard";
import Experience from "@/app/components/Experience";
import SkillsCard from "@/app/components/SkillsCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-24 space-y-8 lg:px-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants}>
            <Card className="bg-light/40 backdrop-blur-sm border border-darkest/10 p-4 shadow-lg h-full">
              <AboutCard />
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="bg-light/40 backdrop-blur-sm border border-darkest/10 p-4 shadow-lg h-full">
              <ContactCards />
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="bg-light/40 backdrop-blur-sm border border-darkest/10 p-4 shadow-lg h-full">
              <Experience />
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="bg-light/40 backdrop-blur-sm border border-darkest/10 p-4 shadow-lg h-full">
              <SkillsCard />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}