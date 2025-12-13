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

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  configuration_profile_id: resolvableValue(z.string()),
  kms_key_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appconfig_configuration_profile

export function DataAwsAppconfigConfigurationProfile(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAppconfigConfigurationProfile
      _type='aws_appconfig_configuration_profile'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppconfigConfigurationProfile = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsAppconfigConfigurationProfile,
    idFilter,
    baseNode,
  )

export const useDataAwsAppconfigConfigurationProfiles = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsAppconfigConfigurationProfile,
    idFilter,
    baseNode,
  )
