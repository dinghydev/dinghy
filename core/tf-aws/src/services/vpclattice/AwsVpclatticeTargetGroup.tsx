import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpclattice_target_group

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  config: resolvableValue(
    z.object({
      ip_address_type: z.string().optional(),
      lambda_event_structure_version: z.string().optional(),
      port: z.number().optional(),
      protocol: z.string().optional(),
      protocol_version: z.string().optional(),
      vpc_identifier: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpclatticeTargetGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_target_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeTargetGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpclatticeTargetGroup, node, id)

export const useAwsVpclatticeTargetGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpclatticeTargetGroup, node, id)
