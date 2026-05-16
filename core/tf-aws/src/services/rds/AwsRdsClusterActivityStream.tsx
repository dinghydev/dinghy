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

export const AwsRdsClusterActivityStreamInputSchema = TfMetaSchema.extend({
  kms_key_id: resolvableValue(z.string()),
  mode: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  engine_native_audit_fields_included: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRdsClusterActivityStreamOutputSchema = z.object({
  id: z.string().optional(),
  kinesis_stream_name: z.string().optional(),
})

export type AwsRdsClusterActivityStreamInputProps =
  & z.input<typeof AwsRdsClusterActivityStreamInputSchema>
  & NodeProps

export type AwsRdsClusterActivityStreamOutputProps =
  & z.output<typeof AwsRdsClusterActivityStreamOutputSchema>
  & z.output<typeof AwsRdsClusterActivityStreamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rds_cluster_activity_stream

export function AwsRdsClusterActivityStream(
  props: Partial<AwsRdsClusterActivityStreamInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_activity_stream'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRdsClusterActivityStreamInputSchema}
      _outputSchema={AwsRdsClusterActivityStreamOutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterActivityStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRdsClusterActivityStreamOutputProps>(
    AwsRdsClusterActivityStream,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsClusterActivityStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRdsClusterActivityStreamOutputProps>(
    AwsRdsClusterActivityStream,
    idFilter,
    baseNode,
    optional,
  )
