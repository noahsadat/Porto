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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-24 space-y-4 lg:px-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[AboutCard, ContactCards, Experience, SkillsCard].map((Component, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                transition: { type: "spring", stiffness: 300, damping: 10 } 
              }}
            >
              <Card className="bg-lightest/70 p-4 h-full">
                <Component />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}