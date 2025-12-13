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
  name: resolvableValue(z.string()),
  target_applications: resolvableValue(
    z.object({
      aws_region: z.string(),
      priority: z.number(),
      sip_media_application_id: z.string(),
    }).array(),
  ),
  trigger_type: resolvableValue(z.string()),
  trigger_value: resolvableValue(z.string()),
  disabled: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chimesdkvoice_sip_rule

export function AwsChimesdkvoiceSipRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkvoice_sip_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkvoiceSipRule = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsChimesdkvoiceSipRule, idFilter, baseNode)

export const useAwsChimesdkvoiceSipRules = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsChimesdkvoiceSipRule, idFilter, baseNode)
