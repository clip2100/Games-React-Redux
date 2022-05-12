export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const starsAnim = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 1,
    transition: { duration: 0.5 },
  },
};

export const parentAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const logoAnim = {
  hidden: {
    scale: 1.5,
    y: 10,
    x: 5,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    scale: 1.5,
    y: 10,
    x: 5,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      default: { duration: 2, ease: "easeInOut" },
      fill: { duration: 2, ease: [1, 0, 0.8, 1] },
    },
  },
};
