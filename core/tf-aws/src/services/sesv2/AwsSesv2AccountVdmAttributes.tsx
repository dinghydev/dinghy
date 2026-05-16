import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSesv2AccountVdmAttributesInputSchema = TfMetaSchema.extend({
  vdm_enabled: resolvableValue(z.string()),
  dashboard_attributes: resolvableValue(
    z.object({
      engagement_metrics: z.string().optional(),
    }).optional(),
  ),
  guardian_attributes: resolvableValue(
    z.object({
      optimized_shared_delivery: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesv2AccountVdmAttributesOutputSchema = z.object({})

export type AwsSesv2AccountVdmAttributesInputProps =
  & z.input<typeof AwsSesv2AccountVdmAttributesInputSchema>
  & NodeProps

export type AwsSesv2AccountVdmAttributesOutputProps =
  & z.output<typeof AwsSesv2AccountVdmAttributesOutputSchema>
  & z.output<typeof AwsSesv2AccountVdmAttributesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_account_vdm_attributes

export function AwsSesv2AccountVdmAttributes(
  props: Partial<AwsSesv2AccountVdmAttributesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_account_vdm_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2AccountVdmAttributesInputSchema}
      _outputSchema={AwsSesv2AccountVdmAttributesOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2AccountVdmAttributess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2AccountVdmAttributesOutputProps>(
    AwsSesv2AccountVdmAttributes,
    idFilter,
    baseNode,
    optional,
  )
