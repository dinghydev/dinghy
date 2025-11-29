import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codecatalyst_dev_environment

export const InputSchema = z.object({
  instance_type: resolvableValue(z.string()),
  persistent_storage: resolvableValue(z.object({
    size: z.number(),
  })),
  project_name: resolvableValue(z.string()),
  space_name: resolvableValue(z.string()),
  alias: resolvableValue(z.string().optional()),
  ides: resolvableValue(z.object({
    name: z.string().optional(),
    runtime: z.string().optional(),
  })),
  inactivity_timeout_minutes: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  repositories: resolvableValue(
    z.object({
      branch_name: z.string().optional(),
      repository_name: z.string(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodecatalystDevEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecatalyst_dev_environment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecatalystDevEnvironment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodecatalystDevEnvironment, node, id)

export const useAwsCodecatalystDevEnvironments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodecatalystDevEnvironment, node, id)
