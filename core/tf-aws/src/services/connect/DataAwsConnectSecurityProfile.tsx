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

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_profile_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  organization_resource_id: z.string().optional(),
  permissions: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_security_profile

export function DataAwsConnectSecurityProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectSecurityProfile
      _type='aws_connect_security_profile'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectSecurityProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsConnectSecurityProfile,
    idFilter,
    baseNode,
    optional,
  )
