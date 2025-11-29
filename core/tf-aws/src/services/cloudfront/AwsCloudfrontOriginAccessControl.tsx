import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_origin_access_control

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  origin_access_control_origin_type: resolvableValue(z.string()),
  signing_behavior: resolvableValue(z.string()),
  signing_protocol: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontOriginAccessControl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_origin_access_control'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontOriginAccessControl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontOriginAccessControl, node, id)

export const useAwsCloudfrontOriginAccessControls = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontOriginAccessControl, node, id)
