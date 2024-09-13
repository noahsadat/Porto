import { Avatar, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-2"
    >
      <div className="flex items-center space-x-6 mb-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        >
          <Avatar 
            isBordered
            src="/images/avatars/IMG_3918.PNG"
            size="md"
            className="bordered"
            color="primary"
            radius="full"
          />
        </motion.div>
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold text-darkest"
          >
            Noah Sadat
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-dark"
          >
            {"I'm"} {/* or "I&apos;m" */}
          </motion.p>
        </div>
      </div>
      <Divider />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-dark"
      >
        My life's journey is an ongoing discovery, shaped by diverse cultural experiences, a commitment to disciplined growth, and a strong spiritual foundation, all of which have profoundly influenced my professional and personal endeavors.
      </motion.p>
    </motion.div>
  );
}