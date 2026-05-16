import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppconfigConfigurationProfile } from './AwsAppconfigConfigurationProfile.tsx'

export const DataAwsAppconfigConfigurationProfileInputSchema = TfMetaSchema
  .extend({
    application_id: resolvableValue(z.string()),
    configuration_profile_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsAppconfigConfigurationProfileOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  kms_key_identifier: z.string().optional(),
  location_uri: z.string().optional(),
  name: z.string().optional(),
  retrieval_role_arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  validator: z.set(z.object({
    content: z.string(),
    type: z.string(),
  })).optional(),
})

export type DataAwsAppconfigConfigurationProfileInputProps =
  & z.input<typeof DataAwsAppconfigConfigurationProfileInputSchema>
  & NodeProps

export type DataAwsAppconfigConfigurationProfileOutputProps =
  & z.output<typeof DataAwsAppconfigConfigurationProfileOutputSchema>
  & z.output<typeof DataAwsAppconfigConfigurationProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appconfig_configuration_profile

export function DataAwsAppconfigConfigurationProfile(
  props: Partial<DataAwsAppconfigConfigurationProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppconfigConfigurationProfile
      _type='aws_appconfig_configuration_profile'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppconfigConfigurationProfileInputSchema}
      _outputSchema={DataAwsAppconfigConfigurationProfileOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppconfigConfigurationProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAppconfigConfigurationProfileOutputProps>(
    DataAwsAppconfigConfigurationProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppconfigConfigurationProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppconfigConfigurationProfileOutputProps>(
    DataAwsAppconfigConfigurationProfile,
    idFilter,
    baseNode,
    optional,
  )
