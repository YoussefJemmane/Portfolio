import { motion } from "framer-motion";

const Loading = () => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="w-16 h-16 border-t-4 border-[#386FA4] dark:border-[#60A5FA] border-solid rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

export default Loading;
