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

export const AwsCloudwatchLogDestinationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  target_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudwatchLogDestinationOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchLogDestinationInputProps =
  & z.input<typeof AwsCloudwatchLogDestinationInputSchema>
  & NodeProps

export type AwsCloudwatchLogDestinationOutputProps =
  & z.output<typeof AwsCloudwatchLogDestinationOutputSchema>
  & z.output<typeof AwsCloudwatchLogDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_destination

export function AwsCloudwatchLogDestination(
  props: Partial<AwsCloudwatchLogDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogDestinationInputSchema}
      _outputSchema={AwsCloudwatchLogDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogDestinationOutputProps>(
    AwsCloudwatchLogDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogDestinationOutputProps>(
    AwsCloudwatchLogDestination,
    idFilter,
    baseNode,
    optional,
  )
