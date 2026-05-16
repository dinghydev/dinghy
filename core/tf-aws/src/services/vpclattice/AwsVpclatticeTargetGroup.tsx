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

export const AwsVpclatticeTargetGroupInputSchema = TfMetaSchema.extend({
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
      health_check: z.object({
        enabled: z.boolean().optional(),
        health_check_interval_seconds: z.number().optional(),
        health_check_timeout_seconds: z.number().optional(),
        healthy_threshold_count: z.number().optional(),
        path: z.string().optional(),
        port: z.number().optional(),
        protocol: z.string().optional(),
        protocol_version: z.string().optional(),
        unhealthy_threshold_count: z.number().optional(),
        matcher: z.object({
          value: z.string().optional(),
        }).optional(),
      }).optional(),
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

export const AwsVpclatticeTargetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpclatticeTargetGroupInputProps =
  & z.input<typeof AwsVpclatticeTargetGroupInputSchema>
  & NodeProps

export type AwsVpclatticeTargetGroupOutputProps =
  & z.output<typeof AwsVpclatticeTargetGroupOutputSchema>
  & z.output<typeof AwsVpclatticeTargetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_target_group

export function AwsVpclatticeTargetGroup(
  props: Partial<AwsVpclatticeTargetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_target_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeTargetGroupInputSchema}
      _outputSchema={AwsVpclatticeTargetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeTargetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeTargetGroupOutputProps>(
    AwsVpclatticeTargetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeTargetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeTargetGroupOutputProps>(
    AwsVpclatticeTargetGroup,
    idFilter,
    baseNode,
    optional,
  )
