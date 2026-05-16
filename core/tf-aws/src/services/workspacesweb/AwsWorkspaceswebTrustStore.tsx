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

export const AwsWorkspaceswebTrustStoreInputSchema = TfMetaSchema.extend({
  certificate: resolvableValue(
    z.object({
      body: z.string(),
      issuer: z.string().optional(),
      not_valid_after: z.string().optional(),
      not_valid_before: z.string().optional(),
      subject: z.string().optional(),
      thumbprint: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWorkspaceswebTrustStoreOutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  trust_store_arn: z.string().optional(),
})

export type AwsWorkspaceswebTrustStoreInputProps =
  & z.input<typeof AwsWorkspaceswebTrustStoreInputSchema>
  & NodeProps

export type AwsWorkspaceswebTrustStoreOutputProps =
  & z.output<typeof AwsWorkspaceswebTrustStoreOutputSchema>
  & z.output<typeof AwsWorkspaceswebTrustStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_trust_store

export function AwsWorkspaceswebTrustStore(
  props: Partial<AwsWorkspaceswebTrustStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_trust_store'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebTrustStoreInputSchema}
      _outputSchema={AwsWorkspaceswebTrustStoreOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebTrustStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebTrustStoreOutputProps>(
    AwsWorkspaceswebTrustStore,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebTrustStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebTrustStoreOutputProps>(
    AwsWorkspaceswebTrustStore,
    idFilter,
    baseNode,
    optional,
  )
