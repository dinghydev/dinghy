import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rolesanywhere_trust_anchor

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  source: resolvableValue(z.object({
    source_type: z.string(),
  })),
  enabled: resolvableValue(z.boolean().optional()),
  notification_settings: resolvableValue(
    z.object({
      channel: z.string().optional(),
      configured_by: z.string(),
      enabled: z.boolean().optional(),
      event: z.string().optional(),
      threshold: z.number().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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

export function AwsRolesanywhereTrustAnchor(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rolesanywhere_trust_anchor'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRolesanywhereTrustAnchor = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRolesanywhereTrustAnchor, node, id)

export const useAwsRolesanywhereTrustAnchors = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRolesanywhereTrustAnchor, node, id)
