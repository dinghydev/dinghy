import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSecurityhubSecurityControlsInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
    standards_arn: resolvableValue(z.string().optional()),
  })

export const DataAwsSecurityhubSecurityControlsOutputSchema = z.object({
  security_control_definitions: z.object({
    current_region_availability: z.string(),
    customizable_properties: z.string().array(),
    description: z.string(),
    remediation_url: z.string(),
    security_control_id: z.string(),
    severity_rating: z.string(),
    title: z.string(),
  }).array().optional(),
})

export type DataAwsSecurityhubSecurityControlsInputProps =
  & z.input<typeof DataAwsSecurityhubSecurityControlsInputSchema>
  & NodeProps

export type DataAwsSecurityhubSecurityControlsOutputProps =
  & z.output<typeof DataAwsSecurityhubSecurityControlsOutputSchema>
  & z.output<typeof DataAwsSecurityhubSecurityControlsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/securityhub_security_controls

export function DataAwsSecurityhubSecurityControls(
  props: Partial<DataAwsSecurityhubSecurityControlsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_security_controls'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecurityhubSecurityControlsInputSchema}
      _outputSchema={DataAwsSecurityhubSecurityControlsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecurityhubSecurityControlss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecurityhubSecurityControlsOutputProps>(
    DataAwsSecurityhubSecurityControls,
    idFilter,
    baseNode,
    optional,
  )
