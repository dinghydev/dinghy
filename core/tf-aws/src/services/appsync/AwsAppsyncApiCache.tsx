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

export const AwsAppsyncApiCacheInputSchema = TfMetaSchema.extend({
  api_caching_behavior: resolvableValue(z.string()),
  api_id: resolvableValue(z.string()),
  ttl: resolvableValue(z.number()),
  type: resolvableValue(z.string()),
  at_rest_encryption_enabled: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  transit_encryption_enabled: resolvableValue(z.boolean().optional()),
})

export const AwsAppsyncApiCacheOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAppsyncApiCacheInputProps =
  & z.input<typeof AwsAppsyncApiCacheInputSchema>
  & NodeProps

export type AwsAppsyncApiCacheOutputProps =
  & z.output<typeof AwsAppsyncApiCacheOutputSchema>
  & z.output<typeof AwsAppsyncApiCacheInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_api_cache

export function AwsAppsyncApiCache(
  props: Partial<AwsAppsyncApiCacheInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_api_cache'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncApiCacheInputSchema}
      _outputSchema={AwsAppsyncApiCacheOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncApiCache = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncApiCacheOutputProps>(
    AwsAppsyncApiCache,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncApiCaches = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncApiCacheOutputProps>(
    AwsAppsyncApiCache,
    idFilter,
    baseNode,
    optional,
  )
