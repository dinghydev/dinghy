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
  default_action: resolvableValue(z.object({
    fixed_response: z.object({
      status_code: z.number(),
    }).optional(),
    forward: z.object({
      target_groups: z.object({
        target_group_identifier: z.string().optional(),
        weight: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  })),
  name: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  service_arn: resolvableValue(z.string().optional()),
  service_identifier: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  last_updated_at: z.string().optional(),
  listener_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpclattice_listener

export function AwsVpclatticeListener(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_listener'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeListener = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsVpclatticeListener, idFilter, baseNode, optional)

export const useAwsVpclatticeListeners = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVpclatticeListener,
    idFilter,
    baseNode,
    optional,
  )
