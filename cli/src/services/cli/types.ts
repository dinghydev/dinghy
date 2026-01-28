import { z } from 'zod'

export const CMD_DEF_SYMBOL = Symbol('cmdDefinition')

export type CmdDefinition = {
  globalOptions?: OptionInput[]
  srcPath: string
  name: string[]
  schema: CmdType
  run: any
}

export const OptionSchema = z.object({
  name: z.string().describe('Name of the option'),
  description: z.string().describe('Description of the option'),
  required: z.boolean().default(false).describe(
    'Whether the option is required',
  ),
  boolean: z.boolean().default(false).describe(
    'Whether the option is a boolean',
  ),
  default: z.any().optional().describe('Default value for the option'),
  multiple: z.boolean().default(false).describe(
    'Allow multiple values for the option',
  ),
  hidden: z.boolean().default(false).describe('Hide the option from help'),
  alias: z.string().optional().describe(
    'Single character alias for the option',
  ),
  negatable: z.boolean().default(false).describe(
    'Generate negative option for boolean type',
  ),
  env: z.union([z.string(), z.boolean()]).default(true).describe(
    'Environment variable for the argument, default to `true` means use the default environment variable generated from the argument name. If a string, the environment variable is the string. If `false`, the environment variable is not used.',
  ),
})
export type OptionInput = z.input<typeof OptionSchema>
export type OptionType = z.output<typeof OptionSchema>

export const ArgSchema = z.object({
  name: z.string().describe('Name of the argument'),
  description: z.string().describe('Description of the argument'),
  required: z.boolean().default(false).describe(
    'Whether the argument is required',
  ),
  default: z.any().optional().describe('Default value for the argument'),
  env: z.union([z.string(), z.boolean()]).default(true).describe(
    'Environment variable for the argument, default to `true` means use the default environment variable generated from the argument name. If a string, the environment variable is the string. If `false`, the environment variable is not used.',
  ),
})

export const CmdSchema = z.object({
  name: z.string().array().default([]).describe('Name of the command'),
  description: z.string().describe('Description of the command'),
  hidden: z.boolean().default(false).describe('Hide the command from help'),
  alias: z.union([z.string().array(), z.string()]).array().optional().describe(
    'Aliases for the command',
  ),
  options: OptionSchema.array().optional().describe('Options for the command'),
  args: ArgSchema.array().optional().describe('Arguments for the command'),
})

export type CmdInput = z.input<typeof CmdSchema>
export type CmdType = z.output<typeof CmdSchema>
