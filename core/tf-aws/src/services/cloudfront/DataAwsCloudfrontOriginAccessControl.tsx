import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontOriginAccessControl } from './AwsCloudfrontOriginAccessControl.tsx'

export const DataAwsCloudfrontOriginAccessControlInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string()),
  })

export const DataAwsCloudfrontOriginAccessControlOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  etag: z.string().optional(),
  name: z.string().optional(),
  origin_access_control_origin_type: z.string().optional(),
  signing_behavior: z.string().optional(),
  signing_protocol: z.string().optional(),
})

export type DataAwsCloudfrontOriginAccessControlInputProps =
  & z.input<typeof DataAwsCloudfrontOriginAccessControlInputSchema>
  & NodeProps

export type DataAwsCloudfrontOriginAccessControlOutputProps =
  & z.output<typeof DataAwsCloudfrontOriginAccessControlOutputSchema>
  & z.output<typeof DataAwsCloudfrontOriginAccessControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudfront_origin_access_control

export function DataAwsCloudfrontOriginAccessControl(
  props: Partial<DataAwsCloudfrontOriginAccessControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontOriginAccessControl
      _type='aws_cloudfront_origin_access_control'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudfrontOriginAccessControlInputSchema}
      _outputSchema={DataAwsCloudfrontOriginAccessControlOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontOriginAccessControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudfrontOriginAccessControlOutputProps>(
    DataAwsCloudfrontOriginAccessControl,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontOriginAccessControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudfrontOriginAccessControlOutputProps>(
    DataAwsCloudfrontOriginAccessControl,
    idFilter,
    baseNode,
    optional,
  )
