import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sesv2_account_vdm_attributes

export function AwsSesv2AccountVdmAttributes(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_account_vdm_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2AccountVdmAttributess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSesv2AccountVdmAttributes,
    idFilter,
    baseNode,
    optional,
  )
