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

export const AwsConnectSecurityProfileInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  permissions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsConnectSecurityProfileOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  organization_resource_id: z.string().optional(),
  security_profile_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsConnectSecurityProfileInputProps =
  & z.input<typeof AwsConnectSecurityProfileInputSchema>
  & NodeProps

export type AwsConnectSecurityProfileOutputProps =
  & z.output<typeof AwsConnectSecurityProfileOutputSchema>
  & z.output<typeof AwsConnectSecurityProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_security_profile

export function AwsConnectSecurityProfile(
  props: Partial<AwsConnectSecurityProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_security_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectSecurityProfileInputSchema}
      _outputSchema={AwsConnectSecurityProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectSecurityProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectSecurityProfileOutputProps>(
    AwsConnectSecurityProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectSecurityProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectSecurityProfileOutputProps>(
    AwsConnectSecurityProfile,
    idFilter,
    baseNode,
    optional,
  )
