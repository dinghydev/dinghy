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

export const AwsEc2NetworkInsightsPathInputSchema = TfMetaSchema.extend({
  protocol: resolvableValue(z.string()),
  source: resolvableValue(z.string()),
  destination: resolvableValue(z.string().optional()),
  destination_ip: resolvableValue(z.string().optional()),
  destination_port: resolvableValue(z.number().optional()),
  filter_at_destination: resolvableValue(
    z.object({
      destination_address: z.string().optional(),
      source_address: z.string().optional(),
      destination_port_range: z.object({
        from_port: z.number().optional(),
        to_port: z.number().optional(),
      }).optional(),
      source_port_range: z.object({
        from_port: z.number().optional(),
        to_port: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  filter_at_source: resolvableValue(
    z.object({
      destination_address: z.string().optional(),
      source_address: z.string().optional(),
      destination_port_range: z.object({
        from_port: z.number().optional(),
        to_port: z.number().optional(),
      }).optional(),
      source_port_range: z.object({
        from_port: z.number().optional(),
        to_port: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  source_ip: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2NetworkInsightsPathOutputSchema = z.object({
  arn: z.string().optional(),
  destination_arn: z.string().optional(),
  id: z.string().optional(),
  source_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2NetworkInsightsPathInputProps =
  & z.input<typeof AwsEc2NetworkInsightsPathInputSchema>
  & NodeProps

export type AwsEc2NetworkInsightsPathOutputProps =
  & z.output<typeof AwsEc2NetworkInsightsPathOutputSchema>
  & z.output<typeof AwsEc2NetworkInsightsPathInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_network_insights_path

export function AwsEc2NetworkInsightsPath(
  props: Partial<AwsEc2NetworkInsightsPathInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_network_insights_path'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2NetworkInsightsPathInputSchema}
      _outputSchema={AwsEc2NetworkInsightsPathOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2NetworkInsightsPath = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2NetworkInsightsPathOutputProps>(
    AwsEc2NetworkInsightsPath,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2NetworkInsightsPaths = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2NetworkInsightsPathOutputProps>(
    AwsEc2NetworkInsightsPath,
    idFilter,
    baseNode,
    optional,
  )
