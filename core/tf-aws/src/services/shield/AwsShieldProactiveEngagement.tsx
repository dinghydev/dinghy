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

export const AwsShieldProactiveEngagementInputSchema = TfMetaSchema.extend({
  enabled: resolvableValue(z.boolean()),
  emergency_contact: resolvableValue(
    z.object({
      contact_notes: z.string().optional(),
      email_address: z.string(),
      phone_number: z.string().optional(),
    }).array().optional(),
  ),
})

export const AwsShieldProactiveEngagementOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsShieldProactiveEngagementInputProps =
  & z.input<typeof AwsShieldProactiveEngagementInputSchema>
  & NodeProps

export type AwsShieldProactiveEngagementOutputProps =
  & z.output<typeof AwsShieldProactiveEngagementOutputSchema>
  & z.output<typeof AwsShieldProactiveEngagementInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_proactive_engagement

export function AwsShieldProactiveEngagement(
  props: Partial<AwsShieldProactiveEngagementInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_proactive_engagement'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldProactiveEngagementInputSchema}
      _outputSchema={AwsShieldProactiveEngagementOutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldProactiveEngagement = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldProactiveEngagementOutputProps>(
    AwsShieldProactiveEngagement,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldProactiveEngagements = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldProactiveEngagementOutputProps>(
    AwsShieldProactiveEngagement,
    idFilter,
    baseNode,
    optional,
  )
