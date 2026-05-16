import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsChimesdkvoiceGlobalSettingsInputSchema = TfMetaSchema.extend({
  voice_connector: resolvableValue(z.object({
    cdr_bucket: z.string().optional(),
  })),
})

export const AwsChimesdkvoiceGlobalSettingsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsChimesdkvoiceGlobalSettingsInputProps =
  & z.input<typeof AwsChimesdkvoiceGlobalSettingsInputSchema>
  & NodeProps

export type AwsChimesdkvoiceGlobalSettingsOutputProps =
  & z.output<typeof AwsChimesdkvoiceGlobalSettingsOutputSchema>
  & z.output<typeof AwsChimesdkvoiceGlobalSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chimesdkvoice_global_settings

export function AwsChimesdkvoiceGlobalSettings(
  props: Partial<AwsChimesdkvoiceGlobalSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkvoice_global_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimesdkvoiceGlobalSettingsInputSchema}
      _outputSchema={AwsChimesdkvoiceGlobalSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkvoiceGlobalSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimesdkvoiceGlobalSettingsOutputProps>(
    AwsChimesdkvoiceGlobalSettings,
    idFilter,
    baseNode,
    optional,
  )
