import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/workspacesweb_trust_store

export const InputSchema = z.object({
  certificate: resolvableValue(
    z.object({
      body: z.string(),
      issuer: z.string(),
      not_valid_after: z.string(),
      not_valid_before: z.string(),
      subject: z.string(),
      thumbprint: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  trust_store_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWorkspaceswebTrustStore(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_trust_store'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebTrustStore = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWorkspaceswebTrustStore, node, id)

export const useAwsWorkspaceswebTrustStores = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWorkspaceswebTrustStore, node, id)
