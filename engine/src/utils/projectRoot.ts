export const projectRoot = new URL(import.meta.url).pathname
  .split('/')
  .slice(0, -4)
  .join('/')
