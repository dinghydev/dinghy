import {
  type CommandContext,
  OPTIONS_SYMBOL,
  REQUIRE_ENGINE_SYMBOL,
} from "../types.ts";
import chalk from "chalk";
import { OPTIONS_TYPES } from "./parseOptions.ts";
import { projectVersionRelease, versionDetails } from "./projectVersions.ts";
type Row = {
  name: string;
  options?: string;
  description?: string;
};

type Sections = {
  version: Row[];
  usage: Row[];
  arguments: Row[];
  commands: Row[];
  "cli commands": Row[];
  "engine commands": Row[];
  options: Row[];
};

type Options = {
  name: string;
  type: string;
};

const printHelp = (context: CommandContext, sections: Sections) => {
  console.log(`${context.options.cmdDescription}`);
  for (const [name, rows] of Object.entries(sections)) {
    if (rows.length > 0) {
      console.log(chalk.bold(`\n${name.toUpperCase()}`));
      const maxNameLength = rows.reduce(
        (max, row) => Math.max(max, row.name.length),
        0,
      );
      for (const row of rows) {
        console.log(
          `  ${chalk.green(row.name.padEnd(maxNameLength + 2))}${
            row.options ? `${chalk.dim(row.options)} ` : ""
          }${row.description ? row.description : ""}`,
        );
      }
    }
  }
};

const generateArgumentsSection = (
  context: CommandContext,
  sections: Sections,
) => {
  Object.entries(context.options.arguments || {}).map(([name, argDef]) => {
    sections.arguments.push({
      name: name.toLocaleUpperCase(),
      description: argDef.description,
      options: argDef.default ? `[default: ${argDef.default}]` : "",
    });
  });
};

const generateCommandSection = (
  context: CommandContext,
  sections: Sections,
) => {
  const cliCommands: Row[] = [];
  const engineCommands: Row[] = [];
  Object.entries(context.commands)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, commandDef]) => {
      const commandOptions = commandDef[OPTIONS_SYMBOL];
      if (commandOptions.hidden) {
        return;
      }
      const options = commandOptions.cmdAlias
        ? `[alias:${commandOptions.cmdAlias.join(", ")}]`
        : "";
      (commandDef[REQUIRE_ENGINE_SYMBOL] ? engineCommands : cliCommands).push({
        name,
        options,
        description: commandOptions.cmdDescription,
      });
    });
  if (cliCommands.length && engineCommands.length) {
    sections["cli commands"] = cliCommands;
    sections["engine commands"] = engineCommands;
  } else {
    sections.commands.push(...cliCommands, ...engineCommands);
  }
};

const generateOptionsSection = (
  context: CommandContext,
  sections: Sections,
) => {
  const options: Options[] = [];
  const flagsHidden = context.options.flagsHidden || [];
  for (const optionType of OPTIONS_TYPES) {
    for (const option of context.options[optionType] || []) {
      if (flagsHidden.includes(option)) {
        continue;
      }
      options.push({
        name: option,
        type: optionType,
      });
    }
  }
  options.sort((a, b) => a.name.localeCompare(b.name));
  for (const option of options) {
    const alias = Object.entries(context.options.alias || {}).find(
      ([_key, value]) => value === option.name,
    )?.[0];
    const noFlag = (context.options.negatable || []).includes(option.name)
      ? "[no]-"
      : "";
    const defaultValue = context.options.default?.[option.name];
    const defaultValueString = defaultValue === undefined
      ? ""
      : `[default: ${defaultValue}]`;
    sections.options.push({
      name: `${alias ? `-${alias}, ` : ""}--${noFlag}${option.name}`,
      description: context.options.description[option.name] || "",
      options: defaultValueString,
    });
  }
};

const generateUsageSection = (context: CommandContext, sections: Sections) => {
  const argumentsPlaceholder = sections.arguments.length
    ? ` ${
      Object.entries(context.options.arguments || {})
        .map(([name, spec]) =>
          spec.required
            ? name.toLocaleUpperCase()
            : `[${name.toLocaleUpperCase()}]`
        )
        .join(" ")
    }`
    : "";
  const commandPlaceholder = sections.commands.length ? " <command>" : "";
  const optionsPlaceholder = sections.options.length ? " [options]" : "";
  const prefixPlaceholder = context.prefix.length
    ? ` ${context.prefix.join(" ")}`
    : "";
  sections.usage.push({
    name: `  ${
      chalk.white("$")
    } reactiac${prefixPlaceholder}${argumentsPlaceholder}${commandPlaceholder}${optionsPlaceholder}`,
  });

  if (context.prefix.length === 0) {
    sections.version.push({
      name: versionDetails(),
    });
  }
};

export const showHelp = (context: CommandContext) => {
  const sections = {
    version: [],
    usage: [],
    arguments: [],
    commands: [],
    "cli commands": [],
    "engine commands": [],
    options: [],
    ...(context.options?.additionalOptions || {}),
  };

  generateArgumentsSection(context, sections);
  generateCommandSection(context, sections);
  generateOptionsSection(context, sections);
  generateUsageSection(context, sections);

  printHelp(context, sections);
};
