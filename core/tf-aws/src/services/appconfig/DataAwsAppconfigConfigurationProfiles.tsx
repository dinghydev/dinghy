import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsAppconfigConfigurationProfilesInputSchema = TfMetaSchema
  .extend({
    application_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsAppconfigConfigurationProfilesOutputSchema = z.object({
  configuration_profile_ids: z.set(z.string()).optional(),
})

export type DataAwsAppconfigConfigurationProfilesInputProps =
  & z.input<typeof DataAwsAppconfigConfigurationProfilesInputSchema>
  & NodeProps

export type DataAwsAppconfigConfigurationProfilesOutputProps =
  & z.output<typeof DataAwsAppconfigConfigurationProfilesOutputSchema>
  & z.output<typeof DataAwsAppconfigConfigurationProfilesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appconfig_configuration_profiles

export function DataAwsAppconfigConfigurationProfiles(
  props: Partial<DataAwsAppconfigConfigurationProfilesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_configuration_profiles'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppconfigConfigurationProfilesInputSchema}
      _outputSchema={DataAwsAppconfigConfigurationProfilesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAppconfigConfigurationProfiless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppconfigConfigurationProfilesOutputProps>(
    DataAwsAppconfigConfigurationProfiles,
    idFilter,
    baseNode,
    optional,
  )
