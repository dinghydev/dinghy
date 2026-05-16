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

export const AwsIotBillingGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  properties: resolvableValue(
    z.object({
      description: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsIotBillingGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  metadata: z.object({
    creation_date: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.number().optional(),
})

export type AwsIotBillingGroupInputProps =
  & z.input<typeof AwsIotBillingGroupInputSchema>
  & NodeProps

export type AwsIotBillingGroupOutputProps =
  & z.output<typeof AwsIotBillingGroupOutputSchema>
  & z.output<typeof AwsIotBillingGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_billing_group

export function AwsIotBillingGroup(
  props: Partial<AwsIotBillingGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_billing_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotBillingGroupInputSchema}
      _outputSchema={AwsIotBillingGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotBillingGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotBillingGroupOutputProps>(
    AwsIotBillingGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotBillingGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotBillingGroupOutputProps>(
    AwsIotBillingGroup,
    idFilter,
    baseNode,
    optional,
  )
