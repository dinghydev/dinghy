import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2NetworkInsightsPath } from './AwsEc2NetworkInsightsPath.tsx'

export const InputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  network_insights_path_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  destination: z.string().optional(),
  destination_arn: z.string().optional(),
  destination_ip: z.string().optional(),
  destination_port: z.number().optional(),
  filter_at_destination: z.object({
    destination_address: z.string(),
    destination_port_range: z.object({
      from_port: z.number(),
      to_port: z.number(),
    }).array(),
    source_address: z.string(),
    source_port_range: z.object({
      from_port: z.number(),
      to_port: z.number(),
    }).array(),
  }).array().optional(),
  filter_at_source: z.object({
    destination_address: z.string(),
    destination_port_range: z.object({
      from_port: z.number(),
      to_port: z.number(),
    }).array(),
    source_address: z.string(),
    source_port_range: z.object({
      from_port: z.number(),
      to_port: z.number(),
    }).array(),
  }).array().optional(),
  protocol: z.string().optional(),
  source: z.string().optional(),
  source_arn: z.string().optional(),
  source_ip: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ec2_network_insights_path

export function DataAwsEc2NetworkInsightsPath(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2NetworkInsightsPath
      _type='aws_ec2_network_insights_path'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2NetworkInsightsPath = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2NetworkInsightsPath,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2NetworkInsightsPaths = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2NetworkInsightsPath,
    idFilter,
    baseNode,
    optional,
  )
