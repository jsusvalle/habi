export const isBrowser = typeof window !== "undefined";

export const openUrl = (url) => {
  if (isBrowser) {
    window.open(url, "_blank");
  }
};
