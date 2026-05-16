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

export const AwsCloudwatchLogStreamInputSchema = TfMetaSchema.extend({
  log_group_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchLogStreamOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsCloudwatchLogStreamInputProps =
  & z.input<typeof AwsCloudwatchLogStreamInputSchema>
  & NodeProps

export type AwsCloudwatchLogStreamOutputProps =
  & z.output<typeof AwsCloudwatchLogStreamOutputSchema>
  & z.output<typeof AwsCloudwatchLogStreamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_stream

export function AwsCloudwatchLogStream(
  props: Partial<AwsCloudwatchLogStreamInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_stream'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogStreamInputSchema}
      _outputSchema={AwsCloudwatchLogStreamOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogStreamOutputProps>(
    AwsCloudwatchLogStream,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogStreamOutputProps>(
    AwsCloudwatchLogStream,
    idFilter,
    baseNode,
    optional,
  )
