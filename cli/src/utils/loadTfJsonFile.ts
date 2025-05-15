import { existsSync } from "@std/fs/exists";
import chalk from "chalk";
import { hostAppHome } from "./loadConfig.ts";

export function loadTfJsonFile(args: any) {
  const jsonFile = args["json-file"];
  const filePath = jsonFile.startsWith("/")
    ? jsonFile
    : `${hostAppHome}/${jsonFile}`;
  if (!existsSync(filePath)) {
    console.error(chalk.red(`Tf json file ${filePath} not found`));
    Deno.exit(1);
  }

  const json = JSON.parse(Deno.readTextFileSync(filePath));
  return { json, filePath };
}
