import { parseArgs } from "@std/cli";
import Debug from "debug";
import { configGet } from "./loadConfig.ts";
const debug = Debug("parseOptions");

export const OPTIONS_TYPES = ["boolean", "string", "number", "collect"];

const loadDefaultFromEnv = (spec: any, envPrefix: string[]) => {
  const defaultWithEnv = { ...(spec.default || {}) };

  for (const optionType of OPTIONS_TYPES) {
    for (const option of spec[optionType] || []) {
      let value: any = configGet([...envPrefix, option]);
      if (value) {
        if (optionType === "boolean") {
          value = Boolean(value);
        } else if (optionType === "number") {
          value = value.includes(".")
            ? Number.parseFloat(value)
            : Number.parseInt(value);
        } else if (optionType === "collect") {
          if (typeof value === "string") {
            value = value.split(",");
          }
        }
        defaultWithEnv[option] = value;
      }
    }
  }
  return defaultWithEnv;
};

export const parseOptions = (
  spec: any,
  args: string[],
  envPrefix: string[],
) => {
  const options: any = parseArgs(args, {
    ...spec,
    default: loadDefaultFromEnv(spec, envPrefix),
  });
  if (spec.arguments) {
    Object.entries(spec.arguments).map(([name, argSpec], index) => {
      const value = options._[index] || configGet([...envPrefix, name]);
      if ((argSpec as any).required && value === undefined) {
        console.error(`Argument [${name.toLocaleUpperCase()}] is required`);
        Deno.exit(1);
      }
      options[name] = value;
    });
  }

  if (spec.required) {
    for (const required of spec.required) {
      const value = options[required];
      if (value === undefined) {
        console.error(`Option [${required}] is required`);
        Deno.exit(1);
      }
    }
  }

  if (!options.output) {
    options.output = configGet(["output"]) || "output";
  }

  debug("parsed options %O", options);
  return options;
};
