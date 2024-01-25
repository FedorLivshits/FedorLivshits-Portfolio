import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.stop('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 50, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

FadeInWhenVisible.propTypes = {
  children: PropTypes.node.isRequired,
};
