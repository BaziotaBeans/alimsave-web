const AUTH_PAGE_ANIMATION = {
  formItemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.5,
      },
    }),
  },
};

export { AUTH_PAGE_ANIMATION };
