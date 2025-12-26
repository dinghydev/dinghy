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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  destination_arn: z.string().optional(),
  id: z.string().optional(),
  source_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_network_insights_path

export function AwsEc2NetworkInsightsPath(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_network_insights_path'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2NetworkInsightsPath = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsEc2NetworkInsightsPath,
    idFilter,
    baseNode,
    optional,
  )
