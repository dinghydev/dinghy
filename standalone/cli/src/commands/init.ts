import { existsSync } from "@std/fs/exists";
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from "../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../types.ts";
import { execa } from "execa";
import chalk from "chalk";
import Debug from "debug";
const debug = Debug("init");

const options: CommandOptions = {
  boolean: ["git", "gitlab", "github", "quiet"],
  description: {
    git: "Init git repository",
    gitlab: "Generate GitLab .gitlab-ci.yml",
    github: "Generate GitHub Actions",
    quiet: "Quiet mode",
  },
  arguments: {
    project: {
      description:
        "The folder name of the project, must be a none exist folder",
      required: true,
    },
  },
  negatable: ["git"],
  default: {
    git: true,
  },
  cmdDescription: "Create a new ReactIAC project",
  cmdAlias: ["create-project"],
};

const generateFile = async (
  args: CommandArgs,
  projectHome: string,
  fileName: string,
  templateName: string,
  folder?: string,
) => {
  if (folder) {
    Deno.mkdirSync(`${projectHome}/${folder}`, { recursive: true });
  }
  const filePath = folder ? `${folder}/${fileName}` : fileName;
  const templateUrl =
    `https://play.reactiac.dev/download/templates/${templateName}`;
  debug("Downloading template from %s", templateUrl);
  let template = await fetch(templateUrl).then((res) => res.text());
  if (template.includes("PROJECT_NAME_PLACE_HOLDER")) {
    const projectName = projectHome.split("/").pop() as string;
    template = template.replace(/PROJECT_NAME_PLACE_HOLDER/g, projectName);
  }
  Deno.writeTextFileSync(`${projectHome}/${filePath}`, template);
  if (!args.quiet) {
    console.log(chalk.grey(`  generated ${filePath}`));
  }
};

const run = async (_context: CommandContext, args: CommandArgs) => {
  if (!args.quiet) {
    console.log("Creating new ReactIAC project ...");
  }
  const projectHome = args.project as string;
  if (existsSync(projectHome)) {
    console.log(chalk.red(`Error: project ${projectHome} already exists`));
    Deno.exit(1);
  }

  Deno.mkdirSync(projectHome, { recursive: true });
  if (!args.quiet) {
    console.log(chalk.grey(`  created folder ${projectHome}`));
  }

  await generateFile(args, projectHome, "app.tsx", "app.txt");
  await generateFile(args, projectHome, "README.md", "readme.txt");

  if (args.github) {
    await generateFile(
      args,
      projectHome,
      "reactiac.yml",
      "github.txt",
      ".github/workflows",
    );
  }

  if (args.gitlab) {
    await generateFile(
      args,
      projectHome,
      ".gitlab-ci.yml",
      "gitlab.txt",
      ".gitlab",
    );
  }

  if (args.git) {
    await generateFile(
      args,
      projectHome,
      ".gitignore",
      "gitignore.txt",
    );
    await execa("git", ["init", "--initial-branch=main"], {
      cwd: projectHome,
      stdio: "inherit",
    });
  }
  if (!args.quiet) {
    console.log("\nYou may now run the following commands to get started:");
    console.log(chalk.gray(`\n  cd ${projectHome}`));
    console.log(chalk.gray("  reactiac dev"));
  }
};

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command;
