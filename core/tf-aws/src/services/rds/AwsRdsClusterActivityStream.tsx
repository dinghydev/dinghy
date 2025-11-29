import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_cluster_activity_stream

export const InputSchema = z.object({
  kms_key_id: resolvableValue(z.string()),
  mode: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  engine_native_audit_fields_included: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  kinesis_stream_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRdsClusterActivityStream(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_activity_stream'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterActivityStream = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRdsClusterActivityStream, node, id)

export const useAwsRdsClusterActivityStreams = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRdsClusterActivityStream, node, id)
