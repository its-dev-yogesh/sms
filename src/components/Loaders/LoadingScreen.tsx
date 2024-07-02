'use client';
import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import { Icon } from '@iconify/react';
const StyledRoot = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center justify-center  z-9998 h-full w-full">
    {children}
  </div>
);

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  const button = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 }
  };
  const arrow = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.4 } }
  };
  return (
    <StyledRoot>
      <motion.div
        className="w-32 h-32 bg-blue-300"
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['5%', '5%', '50%', '50%', '5%']
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <Icon
          icon={'mage:dashboard-circle-chart'}
          color="white"
          width={'100%'}
        />
      </motion.div>

      {/* <div className="absolute w-24 h-24 border-3 border-primary-dark-24 animate-spin rounded-full" />

      <div className="absolute w-28 h-28 border-8 border-primary-dark-24 rounded-full animate-ping" /> */}
    </StyledRoot>
  );
}
