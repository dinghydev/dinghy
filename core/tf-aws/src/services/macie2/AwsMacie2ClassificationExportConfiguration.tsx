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

export const AwsMacie2ClassificationExportConfigurationInputSchema =
  TfMetaSchema.extend({
    s3_destination: resolvableValue(z.object({
      bucket_name: z.string(),
      key_prefix: z.string().optional(),
      kms_key_arn: z.string(),
    })),
    region: resolvableValue(z.string().optional()),
  })

export const AwsMacie2ClassificationExportConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsMacie2ClassificationExportConfigurationInputProps =
  & z.input<typeof AwsMacie2ClassificationExportConfigurationInputSchema>
  & NodeProps

export type AwsMacie2ClassificationExportConfigurationOutputProps =
  & z.output<typeof AwsMacie2ClassificationExportConfigurationOutputSchema>
  & z.output<typeof AwsMacie2ClassificationExportConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/macie2_classification_export_configuration

export function AwsMacie2ClassificationExportConfiguration(
  props: Partial<AwsMacie2ClassificationExportConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_classification_export_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMacie2ClassificationExportConfigurationInputSchema}
      _outputSchema={AwsMacie2ClassificationExportConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2ClassificationExportConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMacie2ClassificationExportConfigurationOutputProps>(
    AwsMacie2ClassificationExportConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMacie2ClassificationExportConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMacie2ClassificationExportConfigurationOutputProps>(
    AwsMacie2ClassificationExportConfiguration,
    idFilter,
    baseNode,
    optional,
  )
