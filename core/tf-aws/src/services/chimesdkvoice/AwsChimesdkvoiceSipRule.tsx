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

export const AwsChimesdkvoiceSipRuleInputSchema = TfMetaSchema.extend({
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
})

export const AwsChimesdkvoiceSipRuleOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsChimesdkvoiceSipRuleInputProps =
  & z.input<typeof AwsChimesdkvoiceSipRuleInputSchema>
  & NodeProps

export type AwsChimesdkvoiceSipRuleOutputProps =
  & z.output<typeof AwsChimesdkvoiceSipRuleOutputSchema>
  & z.output<typeof AwsChimesdkvoiceSipRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chimesdkvoice_sip_rule

export function AwsChimesdkvoiceSipRule(
  props: Partial<AwsChimesdkvoiceSipRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkvoice_sip_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimesdkvoiceSipRuleInputSchema}
      _outputSchema={AwsChimesdkvoiceSipRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkvoiceSipRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimesdkvoiceSipRuleOutputProps>(
    AwsChimesdkvoiceSipRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimesdkvoiceSipRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimesdkvoiceSipRuleOutputProps>(
    AwsChimesdkvoiceSipRule,
    idFilter,
    baseNode,
    optional,
  )
