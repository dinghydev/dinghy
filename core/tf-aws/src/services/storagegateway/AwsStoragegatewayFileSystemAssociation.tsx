import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_file_system_association

export const InputSchema = z.object({
  gateway_arn: resolvableValue(z.string()),
  location_arn: resolvableValue(z.string()),
  password: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  audit_destination_arn: resolvableValue(z.string().optional()),
  cache_attributes: resolvableValue(
    z.object({
      cache_stale_timeout_in_seconds: z.number().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsStoragegatewayFileSystemAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_file_system_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayFileSystemAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsStoragegatewayFileSystemAssociation, node, id)

export const useAwsStoragegatewayFileSystemAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsStoragegatewayFileSystemAssociation, node, id)
