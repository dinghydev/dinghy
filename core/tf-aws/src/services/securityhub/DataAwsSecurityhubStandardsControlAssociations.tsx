import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/securityhub_standards_control_associations

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  security_control_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  standards_control_associations: z.object({
    association_status: z.string(),
    related_requirements: z.string().array(),
    security_control_arn: z.string(),
    security_control_id: z.string(),
    standards_arn: z.string(),
    standards_control_description: z.string(),
    standards_control_title: z.string(),
    updated_at: z.string(),
    updated_reason: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSecurityhubStandardsControlAssociations(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_standards_control_associations'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecurityhubStandardsControlAssociationss = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSecurityhubStandardsControlAssociations,
    node,
    id,
  )
