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

export const AwsDirectoryServiceTrustInputSchema = TfMetaSchema.extend({
  directory_id: resolvableValue(z.string()),
  remote_domain_name: resolvableValue(z.string()),
  trust_direction: resolvableValue(z.string()),
  trust_password: resolvableValue(z.string()),
  conditional_forwarder_ip_addrs: resolvableValue(
    z.string().array().optional(),
  ),
  delete_associated_conditional_forwarder: resolvableValue(
    z.boolean().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  selective_auth: resolvableValue(z.string().optional()),
  trust_type: resolvableValue(z.string().optional()),
})

export const AwsDirectoryServiceTrustOutputSchema = z.object({
  created_date_time: z.string().optional(),
  id: z.string().optional(),
  last_updated_date_time: z.string().optional(),
  state_last_updated_date_time: z.string().optional(),
  trust_state: z.string().optional(),
  trust_state_reason: z.string().optional(),
})

export type AwsDirectoryServiceTrustInputProps =
  & z.input<typeof AwsDirectoryServiceTrustInputSchema>
  & NodeProps

export type AwsDirectoryServiceTrustOutputProps =
  & z.output<typeof AwsDirectoryServiceTrustOutputSchema>
  & z.output<typeof AwsDirectoryServiceTrustInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/directory_service_trust

export function AwsDirectoryServiceTrust(
  props: Partial<AwsDirectoryServiceTrustInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_trust'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDirectoryServiceTrustInputSchema}
      _outputSchema={AwsDirectoryServiceTrustOutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceTrust = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDirectoryServiceTrustOutputProps>(
    AwsDirectoryServiceTrust,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDirectoryServiceTrusts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDirectoryServiceTrustOutputProps>(
    AwsDirectoryServiceTrust,
    idFilter,
    baseNode,
    optional,
  )
