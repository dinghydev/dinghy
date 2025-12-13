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
  enabled: resolvableValue(z.boolean()),
  id: resolvableValue(z.string()),
  emergency_contact: resolvableValue(
    z.object({
      contact_notes: z.string().optional(),
      email_address: z.string(),
      phone_number: z.string().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/shield_proactive_engagement

export function AwsShieldProactiveEngagement(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_proactive_engagement'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldProactiveEngagement = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsShieldProactiveEngagement, idFilter, baseNode)

export const useAwsShieldProactiveEngagements = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsShieldProactiveEngagement, idFilter, baseNode)
