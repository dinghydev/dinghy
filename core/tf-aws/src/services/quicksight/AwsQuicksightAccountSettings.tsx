import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsQuicksightAccountSettingsInputSchema = TfMetaSchema.extend({
  aws_account_id: resolvableValue(z.string().optional()),
  default_namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  termination_protection_enabled: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsQuicksightAccountSettingsOutputSchema = z.object({})

export type AwsQuicksightAccountSettingsInputProps =
  & z.input<typeof AwsQuicksightAccountSettingsInputSchema>
  & NodeProps

export type AwsQuicksightAccountSettingsOutputProps =
  & z.output<typeof AwsQuicksightAccountSettingsOutputSchema>
  & z.output<typeof AwsQuicksightAccountSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_account_settings

export function AwsQuicksightAccountSettings(
  props: Partial<AwsQuicksightAccountSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_account_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightAccountSettingsInputSchema}
      _outputSchema={AwsQuicksightAccountSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightAccountSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightAccountSettingsOutputProps>(
    AwsQuicksightAccountSettings,
    idFilter,
    baseNode,
    optional,
  )
