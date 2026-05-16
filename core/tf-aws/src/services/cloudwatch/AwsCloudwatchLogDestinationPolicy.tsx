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

export const AwsCloudwatchLogDestinationPolicyInputSchema = TfMetaSchema.extend(
  {
    access_policy: resolvableValue(z.string()),
    destination_name: resolvableValue(z.string()),
    force_update: resolvableValue(z.boolean().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsCloudwatchLogDestinationPolicyOutputSchema = z.object({})

export type AwsCloudwatchLogDestinationPolicyInputProps =
  & z.input<typeof AwsCloudwatchLogDestinationPolicyInputSchema>
  & NodeProps

export type AwsCloudwatchLogDestinationPolicyOutputProps =
  & z.output<typeof AwsCloudwatchLogDestinationPolicyOutputSchema>
  & z.output<typeof AwsCloudwatchLogDestinationPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_destination_policy

export function AwsCloudwatchLogDestinationPolicy(
  props: Partial<AwsCloudwatchLogDestinationPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_destination_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogDestinationPolicyInputSchema}
      _outputSchema={AwsCloudwatchLogDestinationPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDestinationPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogDestinationPolicyOutputProps>(
    AwsCloudwatchLogDestinationPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogDestinationPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogDestinationPolicyOutputProps>(
    AwsCloudwatchLogDestinationPolicy,
    idFilter,
    baseNode,
    optional,
  )
