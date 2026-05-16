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

export const AwsSsmcontactsPlanInputSchema = TfMetaSchema.extend({
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
})

export const AwsSsmcontactsPlanOutputSchema = z.object({})

export type AwsSsmcontactsPlanInputProps =
  & z.input<typeof AwsSsmcontactsPlanInputSchema>
  & NodeProps

export type AwsSsmcontactsPlanOutputProps =
  & z.output<typeof AwsSsmcontactsPlanOutputSchema>
  & z.output<typeof AwsSsmcontactsPlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssmcontacts_plan

export function AwsSsmcontactsPlan(
  props: Partial<AwsSsmcontactsPlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmcontacts_plan'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmcontactsPlanInputSchema}
      _outputSchema={AwsSsmcontactsPlanOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmcontactsPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmcontactsPlanOutputProps>(
    AwsSsmcontactsPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmcontactsPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmcontactsPlanOutputProps>(
    AwsSsmcontactsPlan,
    idFilter,
    baseNode,
    optional,
  )
