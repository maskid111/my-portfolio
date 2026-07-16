export const animations = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },

  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  },

  directionalItemVariants: {
    hidden: (custom: number = 0) => {
      const patterns = [
        { opacity: 0, x: -44, y: 10, rotate: -2, scale: 0.96 },
        { opacity: 0, x: 44, y: 10, rotate: 2, scale: 0.96 },
        { opacity: 0, x: 0, y: 34, rotate: 0, scale: 0.94 },
        { opacity: 0, x: 0, y: -24, rotate: 1, scale: 0.97 },
      ]

      return patterns[custom % patterns.length]
    },
    visible: (custom: number = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 18,
        delay: custom * 0.06,
      },
    }),
  },

  heroTextVariants: {
    hidden: { opacity: 0, x: -56, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
        staggerChildren: 0.08,
      },
    },
  },

  heroVisualVariants: {
    hidden: { opacity: 0, x: 48, scale: 0.94, rotate: 2, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
        delay: 0.15,
      },
    },
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },

  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },

  floatingVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
      },
    }),
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },

  hoverGlow: {
    whileHover: {
      boxShadow: '0 0 30px rgba(124, 58, 255, 0.4)',
    },
  },

  textReveal: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },

  charVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  pulseVariants: {
    initial: { opacity: 0.6 },
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  pageTransition: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },

  hoverTilt: {
    whileHover: {
      rotateX: 5,
      rotateY: -5,
      scale: 1.02,
    },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },

  shimmer: {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
      backgroundPosition: '100% 50%',
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  bounce: {
    whileHover: { y: -5 },
    whileTap: { y: 0 },
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 10,
    },
  },

  ripple: {
    whileTap: { scale: 1.1 },
    transition: { duration: 0.3 },
  },

  magneticButton: {
    whileHover: {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(124, 58, 255, 0.3)',
    },
    whileTap: {
      scale: 0.98,
    },
    transition: { type: 'spring', stiffness: 400, damping: 15 },
  },

  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },

  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },

  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6 },
    },
  },

  carouselSlide: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.3 },
  },

  swipeReveal: {
    hidden: { opacity: 0, x: 50, scaleX: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
}

export const easeOutQuad = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
export const easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)'
export const easeOutQuart = 'cubic-bezier(0.165, 0.84, 0.44, 1)'
