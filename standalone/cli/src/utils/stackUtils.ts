import { mergician } from "mergician";
import { z } from "zod";
import Debug from "debug";
const debug = Debug("stackUtils");

interface Props {
  [key: string]: unknown;
}
export const ItemSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  title: z.string().optional(),
});
export type Item = z.input<typeof ItemSchema>;

export const StackSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  env: z.string().optional(),
  title: z.string().optional(),
  sequence: z.number().optional(),
  stages: z.record(z.string(), ItemSchema.passthrough()).optional(),
  views: z.record(z.string(), ItemSchema.passthrough()).optional(),
  mrAutoDiff: z.boolean().default(true),
  mrAutoDeploy: z.boolean().default(false),
  mainAutoDiff: z.boolean().default(true),
  mainAutoDeploy: z.boolean().default(false),
});

export type Stack = z.input<typeof StackSchema>;

export const StacksSchema = z.object({
  stacks: z.record(z.string(), StackSchema.passthrough()),
});

export type Stacks = z.input<typeof StacksSchema>;

const parseStackFromId = (stackId: string): Stack => {
  const segments = stackId.split("-");
  const split = Math.floor(segments.length / 2);
  const name = segments.slice(0, split).join("-");
  return {
    id: stackId,
    name: name || undefined,
    env: stackId === DEFAULT_ENV ? undefined : segments.slice(split).join("-"),
  };
};

export const DEFAULT_ENV = "app";
export const DEFAULT_STAGE = "main";
export const DEFAULT_VIEW = "overview";

const populateNamedItems = (
  stack: Props,
  field: string,
  defaultValue: string,
) => {
  const stackId = stack.id as string;

  if (stack[field]) {
    const items: Props = {};
    Object.entries(stack[field]).map((entry) => {
      const name = entry[0];
      const id = name === defaultValue ? stackId : `${stackId}-${name}`;
      items[name] = {
        id,
        name,
        ...(entry[1] || {}),
      };
    });
    stack[field] = items;
  } else {
    stack[field] = {
      [defaultValue]: {
        id: stackId,
        name: defaultValue,
      },
    };
  }
};

const populateStackDefaultItems = (stack: Props) => {
  populateNamedItems(stack, "stages", DEFAULT_STAGE);
  populateNamedItems(stack, "views", DEFAULT_VIEW);
  return stack;
};

export const createStack = (
  env: string,
  id?: string,
  name?: string,
  options?: Props,
) => {
  const stack = {
    id: id || (name ? `${name}-${env}` : env),
    name: name,
    env,
    ...(options || {}),
  };
  populateStackDefaultItems(stack);
  return stack;
};

export const createStage = (
  stack: Stack,
  name: string,
) => {
  return createDefaultItem(stack, name, DEFAULT_STAGE);
};

export const createView = (
  stack: Stack,
  name: string,
) => {
  return createDefaultItem(stack, name, DEFAULT_VIEW);
};

const createDefaultItem = (
  stack: Stack,
  name: string,
  defaultValue: string,
) => {
  return {
    id: name === defaultValue ? stack.id : `${stack.id}-${name}`,
    name,
  };
};

const parseStacksInput = (appName: string, stacksInput: Props): Stacks => {
  if (!stacksInput) {
    const stack = parseStackFromId(appName.toLowerCase());
    stack.sequence = 10;
    return {
      stacks: { [stack.id]: populateStackDefaultItems(stack) },
    } as Stacks;
  }

  const stacksOptions = stacksInput;
  const stacks: Props = {};
  Object.keys(stacksOptions).map((stackId) => {
    const stackOptions = stacksOptions[stackId] as Props;
    if (stackOptions) {
      stacks[stackId] = populateStackDefaultItems({
        ...parseStackFromId(stackId),
        ...stackOptions,
      });
    } else {
      stacks[stackId] = populateStackDefaultItems(parseStackFromId(stackId));
    }
  });
  Object.values(stacks).map((stack: any, i) => {
    stack.sequence ??= (i + 1) * 10;
  });

  return StacksSchema.parse({ stacks });
};

export const parseStacks = (
  appName: string,
  stacksInput: Props,
  stackSpec?: string,
): Stacks => {
  const stacks = parseStacksInput(appName, stacksInput).stacks;
  if (stackSpec && !stacks[stackSpec]) {
    stacks[stackSpec] = populateStackDefaultItems(
      parseStackFromId(stackSpec),
    ) as Stack;
  }
  return { stacks };
};

export const parseStack = (
  stackId: string,
  options: Props,
): Stack => {
  const stacks = parseStacksInput(stackId, options.stacks as any).stacks;
  let stack = stacks[stackId];
  if (!stack) {
    stack = stackId === "app"
      ? Object.values(stacks)[0]
      : populateStackDefaultItems(
        parseStackFromId(stackId),
      ) as Stack;
    stacks[stack.id] = stack;
  }
  options.stacks = stacks;
  options.stack = stack;
  loadStackConfig(options);
  return stack;
};

export const loadStackConfig = (
  configs: any,
) => {
  const settings =
    loadFilesData(configs, "config/settings", configs.stack.id) ||
    loadFilesData(configs, "config", configs.stack.id);
  if (settings) {
    const overrides = mergician({
      onCircular({ srcVal, targetVal }: { srcVal: any; targetVal: any }) {
        return { ...targetVal, ...srcVal };
      },
    })(configs, settings);
    Object.assign(configs, overrides);
  }
};

const collectTags = (result: string[], variants: string[], size = 1) => {
  const loopCount = variants.length - size;
  for (let i = 0; i <= loopCount; i++) {
    result.push(variants.slice(i, i + size).join("-"));
  }
  if (loopCount > 0) {
    collectTags(result, variants, size + 1);
  }
  return result;
};

const nameTags = (name: string) => {
  return collectTags(["default"], name.split("-"));
};

export const loadFilesData = (options: any, path: string, name?: string) => {
  const paths = path.split("/");
  let current = options.files;
  for (const path of paths) {
    if (!current || typeof current !== "object") {
      break;
    }
    current = current[path];
  }
  if (current) {
    current = current["files"];
  }
  if (!current) {
    return undefined;
  }
  const values: any[] = [];
  if (name) {
    const tags = nameTags(name);
    tags.map((tag) => {
      const value = current[`${tag}.yaml`];
      if (value) {
        values.push(value);
        debug("loaded file data %s %s/%s.yaml", name, path, tag);
      }
    });
  } else {
    values.push(...Object.values(current.files));
  }
  return values.length > 1 ? mergician(...values) : values[0];
};

export const loadFile = (options: any, path: string) => {
  const paths = path.split("/");
  const name = paths.pop() as string;
  let current = options.files;
  for (const path of paths) {
    if (!current || typeof current !== "object") {
      break;
    }
    current = current[path];
  }
  if (current) {
    current = current["files"];
  }
  if (!current) {
    return undefined;
  }
  return current[name];
};

export const mergeStackOptions = (
  stack: Stack,
  input: string[],
  field: string,
) => {
  return Object.values(
    mergeStackItemList(
      stack,
      stack[`${field}s` as keyof Stack],
      input,
      field === "stage" ? DEFAULT_STAGE : DEFAULT_VIEW,
    ),
  ) as Item[];
};

const mergeStackItemList = (
  stack: Stack,
  items: any,
  input: string[],
  defaultValue: string,
) => {
  input?.map((name) => {
    if (!items[name]) {
      if (name === defaultValue) {
        (Object.values(items)[0] as any).name = defaultValue;
      } else {
        items[name] = { id: `${stack.id}-${name}`, name };
      }
    }
  });
  return Object.values(items) as Item[];
};
