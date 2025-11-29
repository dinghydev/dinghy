import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontOriginAccessControl } from './AwsCloudfrontOriginAccessControl.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_origin_access_control

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  etag: z.string().optional(),
  name: z.string().optional(),
  origin_access_control_origin_type: z.string().optional(),
  signing_behavior: z.string().optional(),
  signing_protocol: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudfrontOriginAccessControl(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudfrontOriginAccessControl
      _type='aws_cloudfront_origin_access_control'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontOriginAccessControl = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsCloudfrontOriginAccessControl, node, id)

export const useDataAwsCloudfrontOriginAccessControls = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsCloudfrontOriginAccessControl, node, id)
