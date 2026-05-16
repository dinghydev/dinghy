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

export const AwsCloudfrontOriginAccessControlInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  origin_access_control_origin_type: resolvableValue(z.string()),
  signing_behavior: resolvableValue(z.string()),
  signing_protocol: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
})

export const AwsCloudfrontOriginAccessControlOutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type AwsCloudfrontOriginAccessControlInputProps =
  & z.input<typeof AwsCloudfrontOriginAccessControlInputSchema>
  & NodeProps

export type AwsCloudfrontOriginAccessControlOutputProps =
  & z.output<typeof AwsCloudfrontOriginAccessControlOutputSchema>
  & z.output<typeof AwsCloudfrontOriginAccessControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_origin_access_control

export function AwsCloudfrontOriginAccessControl(
  props: Partial<AwsCloudfrontOriginAccessControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_origin_access_control'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontOriginAccessControlInputSchema}
      _outputSchema={AwsCloudfrontOriginAccessControlOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontOriginAccessControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontOriginAccessControlOutputProps>(
    AwsCloudfrontOriginAccessControl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontOriginAccessControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontOriginAccessControlOutputProps>(
    AwsCloudfrontOriginAccessControl,
    idFilter,
    baseNode,
    optional,
  )
