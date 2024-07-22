import React from 'react';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RotatingSVG: React.FC = () => {
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        rotate: "repeat",
      });
    }
  }, [controls, inView, rotate]);

  return (
    <div ref={ref} style={{ height: '200vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        style={{ width: '100px', height: '100px' }}
        animate={controls}
        initial={{ rotate: 0 }}
      >
        <img src="RotatingText.svg" alt="Rotating SVG" />
      </motion.div>
    </div>
  );
};

export default RotatingSVG;
