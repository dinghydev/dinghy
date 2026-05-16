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

export const AwsCloudwatchEventApiDestinationInputSchema = TfMetaSchema.extend({
  connection_arn: resolvableValue(z.string()),
  http_method: resolvableValue(z.string()),
  invocation_endpoint: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  invocation_rate_limit_per_second: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchEventApiDestinationOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsCloudwatchEventApiDestinationInputProps =
  & z.input<typeof AwsCloudwatchEventApiDestinationInputSchema>
  & NodeProps

export type AwsCloudwatchEventApiDestinationOutputProps =
  & z.output<typeof AwsCloudwatchEventApiDestinationOutputSchema>
  & z.output<typeof AwsCloudwatchEventApiDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_event_api_destination

export function AwsCloudwatchEventApiDestination(
  props: Partial<AwsCloudwatchEventApiDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_api_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchEventApiDestinationInputSchema}
      _outputSchema={AwsCloudwatchEventApiDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventApiDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchEventApiDestinationOutputProps>(
    AwsCloudwatchEventApiDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchEventApiDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchEventApiDestinationOutputProps>(
    AwsCloudwatchEventApiDestination,
    idFilter,
    baseNode,
    optional,
  )
