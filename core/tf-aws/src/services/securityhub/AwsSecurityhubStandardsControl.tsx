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
  control_status: resolvableValue(z.string()),
  standards_control_arn: resolvableValue(z.string()),
  disabled_reason: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  control_id: z.string().optional(),
  control_status_updated_at: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  related_requirements: z.string().array().optional(),
  remediation_url: z.string().optional(),
  severity_rating: z.string().optional(),
  title: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securityhub_standards_control

export function AwsSecurityhubStandardsControl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_standards_control'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubStandardsControl = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsSecurityhubStandardsControl, idFilter, baseNode)

export const useAwsSecurityhubStandardsControls = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsSecurityhubStandardsControl, idFilter, baseNode)
