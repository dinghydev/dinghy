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
  configuration_set_name: resolvableValue(z.string()),
  matching_types: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  cloudwatch_destination: resolvableValue(
    z.object({
      default_value: z.string(),
      dimension_name: z.string(),
      value_source: z.string(),
    }).array().optional(),
  ),
  enabled: resolvableValue(z.boolean().optional()),
  kinesis_destination: resolvableValue(
    z.object({
      role_arn: z.string(),
      stream_arn: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  sns_destination: resolvableValue(
    z.object({
      topic_arn: z.string(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ses_event_destination

export function AwsSesEventDestination(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_event_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesEventDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSesEventDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesEventDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSesEventDestination,
    idFilter,
    baseNode,
    optional,
  )
