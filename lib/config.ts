export const getConfig = () => {
  return {
    TOAST_POSITION:
      (process.env
        .NEXT_PUBLIC_TOAST_POSITION as 'top-right') ||
      'top-right',
  };
};
