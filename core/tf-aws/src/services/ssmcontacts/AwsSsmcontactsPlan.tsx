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
  contact_id: resolvableValue(z.string()),
  stage: resolvableValue(
    z.object({
      duration_in_minutes: z.number(),
      target: z.object({
        channel_target_info: z.object({
          contact_channel_id: z.string(),
          retry_interval_in_minutes: z.number().optional(),
        }).optional(),
        contact_target_info: z.object({
          contact_id: z.string().optional(),
          is_essential: z.boolean(),
        }).optional(),
      }).array().optional(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssmcontacts_plan

export function AwsSsmcontactsPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmcontacts_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmcontactsPlan = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsSsmcontactsPlan, idFilter, baseNode)

export const useAwsSsmcontactsPlans = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsSsmcontactsPlan, idFilter, baseNode)
