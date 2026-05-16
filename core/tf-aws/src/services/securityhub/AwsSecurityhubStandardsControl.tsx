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

export const AwsSecurityhubStandardsControlInputSchema = TfMetaSchema.extend({
  control_status: resolvableValue(z.string()),
  standards_control_arn: resolvableValue(z.string()),
  disabled_reason: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSecurityhubStandardsControlOutputSchema = z.object({
  control_id: z.string().optional(),
  control_status_updated_at: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  related_requirements: z.string().array().optional(),
  remediation_url: z.string().optional(),
  severity_rating: z.string().optional(),
  title: z.string().optional(),
})

export const AwsSecurityhubStandardsControlImportSchema = z.object({
  standards_control_arn: resolvableValue(z.string()),
})

export type AwsSecurityhubStandardsControlInputProps =
  & z.input<typeof AwsSecurityhubStandardsControlInputSchema>
  & z.input<typeof AwsSecurityhubStandardsControlImportSchema>
  & NodeProps

export type AwsSecurityhubStandardsControlOutputProps =
  & z.output<typeof AwsSecurityhubStandardsControlOutputSchema>
  & z.output<typeof AwsSecurityhubStandardsControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_standards_control

export function AwsSecurityhubStandardsControl(
  props: Partial<AwsSecurityhubStandardsControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_standards_control'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubStandardsControlInputSchema}
      _outputSchema={AwsSecurityhubStandardsControlOutputSchema}
      _importSchema={AwsSecurityhubStandardsControlImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubStandardsControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubStandardsControlOutputProps>(
    AwsSecurityhubStandardsControl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubStandardsControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubStandardsControlOutputProps>(
    AwsSecurityhubStandardsControl,
    idFilter,
    baseNode,
    optional,
  )
