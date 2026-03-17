import chalk from "chalk";

export const logger = {
  warn: (msg: string) => {
    if (
      process.argv.includes("build") && process.env.IGNORE_WARNINGS !== "true"
    ) {
      throw new Error(msg);
    }
    console.warn(chalk.yellow(msg));
  },
  error: (msg: string, err?: unknown) => console.error(chalk.red(msg), err),
};
