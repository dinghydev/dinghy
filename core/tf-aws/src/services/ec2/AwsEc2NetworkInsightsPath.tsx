import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_network_insights_path

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
    }).optional(),
  ),
  filter_at_source: resolvableValue(
    z.object({
      destination_address: z.string().optional(),
      source_address: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  source_ip: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

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

export const useAwsEc2NetworkInsightsPath = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2NetworkInsightsPath, node, id)

export const useAwsEc2NetworkInsightsPaths = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2NetworkInsightsPath, node, id)
