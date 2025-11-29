import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodecatalystDevEnvironment } from './AwsCodecatalystDevEnvironment.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/codecatalyst_dev_environment

export const InputSchema = z.object({
  env_id: resolvableValue(z.string()),
  project_name: resolvableValue(z.string()),
  space_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  alias: z.string().optional(),
  creator_id: z.string().optional(),
  ides: z.object({
    name: z.string(),
    runtime: z.string(),
  }).array().optional(),
  inactivity_timeout_minutes: z.number().optional(),
  instance_type: z.string().optional(),
  last_updated_time: z.string().optional(),
  persistent_storage: z.object({
    size: z.number(),
  }).array().optional(),
  repositories: z.object({
    branch_name: z.string(),
    repository_name: z.string(),
  }).optional().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCodecatalystDevEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCodecatalystDevEnvironment
      _type='aws_codecatalyst_dev_environment'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodecatalystDevEnvironment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCodecatalystDevEnvironment, node, id)

export const useDataAwsCodecatalystDevEnvironments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsCodecatalystDevEnvironment, node, id)
