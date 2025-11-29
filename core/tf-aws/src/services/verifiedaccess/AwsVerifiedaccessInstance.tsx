import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedaccess_instance

export const InputSchema = z.object({
  name_servers: resolvableValue(z.string().array()),
  cidr_endpoints_custom_subdomain: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  fips_enabled: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  creation_time: z.string().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  verified_access_trust_providers: z.object({
    description: z.string(),
    device_trust_provider_type: z.string(),
    trust_provider_type: z.string(),
    user_trust_provider_type: z.string(),
    verified_access_trust_provider_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVerifiedaccessInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessInstance = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVerifiedaccessInstance, node, id)

export const useAwsVerifiedaccessInstances = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVerifiedaccessInstance, node, id)
