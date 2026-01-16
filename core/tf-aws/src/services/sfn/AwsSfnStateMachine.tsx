import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  definition: resolvableValue(z.string()),
  description: resolvableValue(z.string()),
  revision_id: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  version_description: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_data_key_reuse_period_seconds: z.number().optional(),
      kms_key_id: z.string().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  logging_configuration: resolvableValue(
    z.object({
      include_execution_data: z.boolean().optional(),
      level: z.string().optional(),
      log_destination: z.string().optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  publish: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  tracing_configuration: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  id: z.string().optional(),
  state_machine_version_arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine

export function AwsSfnStateMachine(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sfn_state_machine'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSfnStateMachine = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsSfnStateMachine, idFilter, baseNode, optional)

export const useAwsSfnStateMachines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsSfnStateMachine, idFilter, baseNode, optional)
