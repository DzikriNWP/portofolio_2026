import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export default function OutlinedCard({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`outlined-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
