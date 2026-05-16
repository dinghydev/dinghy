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

export const AwsStoragegatewayCacheInputSchema = TfMetaSchema.extend({
  disk_id: resolvableValue(z.string()),
  gateway_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsStoragegatewayCacheOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsStoragegatewayCacheInputProps =
  & z.input<typeof AwsStoragegatewayCacheInputSchema>
  & NodeProps

export type AwsStoragegatewayCacheOutputProps =
  & z.output<typeof AwsStoragegatewayCacheOutputSchema>
  & z.output<typeof AwsStoragegatewayCacheInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/storagegateway_cache

export function AwsStoragegatewayCache(
  props: Partial<AwsStoragegatewayCacheInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_cache'
      _category='resource'
      _title={_title}
      _inputSchema={AwsStoragegatewayCacheInputSchema}
      _outputSchema={AwsStoragegatewayCacheOutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayCache = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsStoragegatewayCacheOutputProps>(
    AwsStoragegatewayCache,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewayCaches = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsStoragegatewayCacheOutputProps>(
    AwsStoragegatewayCache,
    idFilter,
    baseNode,
    optional,
  )
