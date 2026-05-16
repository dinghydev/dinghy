import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectSecurityProfile } from './AwsConnectSecurityProfile.tsx'

export const DataAwsConnectSecurityProfileInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_profile_id: resolvableValue(z.string().optional()),
})

export const DataAwsConnectSecurityProfileOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  organization_resource_id: z.string().optional(),
  permissions: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsConnectSecurityProfileInputProps =
  & z.input<typeof DataAwsConnectSecurityProfileInputSchema>
  & NodeProps

export type DataAwsConnectSecurityProfileOutputProps =
  & z.output<typeof DataAwsConnectSecurityProfileOutputSchema>
  & z.output<typeof DataAwsConnectSecurityProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_security_profile

export function DataAwsConnectSecurityProfile(
  props: Partial<DataAwsConnectSecurityProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectSecurityProfile
      _type='aws_connect_security_profile'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectSecurityProfileInputSchema}
      _outputSchema={DataAwsConnectSecurityProfileOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectSecurityProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectSecurityProfileOutputProps>(
    DataAwsConnectSecurityProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectSecurityProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectSecurityProfileOutputProps>(
    DataAwsConnectSecurityProfile,
    idFilter,
    baseNode,
    optional,
  )
