import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/identitystore_group

export const InputSchema = z.object({
  display_name: resolvableValue(z.string()),
  identity_store_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  external_ids: z.object({
    id: z.string(),
    issuer: z.string(),
  }).array().optional(),
  group_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIdentitystoreGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIdentitystoreGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIdentitystoreGroup, node, id)

export const useAwsIdentitystoreGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIdentitystoreGroup, node, id)
