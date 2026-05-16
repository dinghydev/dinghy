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

export const AwsRolesanywhereTrustAnchorInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  source: resolvableValue(z.object({
    source_type: z.string(),
    source_data: z.object({
      acm_pca_arn: z.string().optional(),
      x509_certificate_data: z.string().optional(),
    }),
  })),
  enabled: resolvableValue(z.boolean().optional()),
  notification_settings: resolvableValue(
    z.object({
      channel: z.string().optional(),
      configured_by: z.string().optional(),
      enabled: z.boolean().optional(),
      event: z.string().optional(),
      threshold: z.number().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRolesanywhereTrustAnchorOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRolesanywhereTrustAnchorInputProps =
  & z.input<typeof AwsRolesanywhereTrustAnchorInputSchema>
  & NodeProps

export type AwsRolesanywhereTrustAnchorOutputProps =
  & z.output<typeof AwsRolesanywhereTrustAnchorOutputSchema>
  & z.output<typeof AwsRolesanywhereTrustAnchorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rolesanywhere_trust_anchor

export function AwsRolesanywhereTrustAnchor(
  props: Partial<AwsRolesanywhereTrustAnchorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rolesanywhere_trust_anchor'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRolesanywhereTrustAnchorInputSchema}
      _outputSchema={AwsRolesanywhereTrustAnchorOutputSchema}
      {...props}
    />
  )
}

export const useAwsRolesanywhereTrustAnchor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRolesanywhereTrustAnchorOutputProps>(
    AwsRolesanywhereTrustAnchor,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRolesanywhereTrustAnchors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRolesanywhereTrustAnchorOutputProps>(
    AwsRolesanywhereTrustAnchor,
    idFilter,
    baseNode,
    optional,
  )
