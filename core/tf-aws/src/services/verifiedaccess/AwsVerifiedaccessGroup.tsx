import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedaccess_group

export const InputSchema = z.object({
  verifiedaccess_instance_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  policy_document: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sse_configuration: resolvableValue(
    z.object({
      customer_managed_key_enabled: z.boolean().optional(),
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  creation_time: z.string().optional(),
  deletion_time: z.string().optional(),
  last_updated_time: z.string().optional(),
  owner: z.string().optional(),
  verifiedaccess_group_arn: z.string().optional(),
  verifiedaccess_group_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVerifiedaccessGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVerifiedaccessGroup, node, id)

export const useAwsVerifiedaccessGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVerifiedaccessGroup, node, id)
