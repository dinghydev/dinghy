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

export const InputSchema = z.object({
  grantee_principal: resolvableValue(z.string()),
  key_id: resolvableValue(z.string()),
  operations: resolvableValue(z.string().array()),
  constraints: resolvableValue(
    z.object({
      encryption_context_equals: z.record(z.string(), z.string()).optional(),
      encryption_context_subset: z.record(z.string(), z.string()).optional(),
    }).array().optional(),
  ),
  grant_creation_tokens: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  retire_on_delete: resolvableValue(z.boolean().optional()),
  retiring_principal: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  grant_id: z.string().optional(),
  grant_token: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kms_grant

export function AwsKmsGrant(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_grant'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsGrant = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsKmsGrant, idFilter, baseNode)

export const useAwsKmsGrants = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsKmsGrant, idFilter, baseNode)
