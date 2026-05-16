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

export const AwsQldbStreamInputSchema = TfMetaSchema.extend({
  inclusive_start_time: resolvableValue(z.string()),
  kinesis_configuration: resolvableValue(z.object({
    aggregation_enabled: z.boolean().optional(),
    stream_arn: z.string(),
  })),
  ledger_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  stream_name: resolvableValue(z.string()),
  exclusive_end_time: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsQldbStreamOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsQldbStreamInputProps =
  & z.input<typeof AwsQldbStreamInputSchema>
  & NodeProps

export type AwsQldbStreamOutputProps =
  & z.output<typeof AwsQldbStreamOutputSchema>
  & z.output<typeof AwsQldbStreamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/qldb_stream

export function AwsQldbStream(props: Partial<AwsQldbStreamInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_qldb_stream'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQldbStreamInputSchema}
      _outputSchema={AwsQldbStreamOutputSchema}
      {...props}
    />
  )
}

export const useAwsQldbStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQldbStreamOutputProps>(
    AwsQldbStream,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQldbStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQldbStreamOutputProps>(
    AwsQldbStream,
    idFilter,
    baseNode,
    optional,
  )
