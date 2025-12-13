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

export const InputSchema = z.object({
  api_caching_behavior: resolvableValue(z.string()),
  api_id: resolvableValue(z.string()),
  ttl: resolvableValue(z.number()),
  type: resolvableValue(z.string()),
  at_rest_encryption_enabled: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  transit_encryption_enabled: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_api_cache

export function AwsAppsyncApiCache(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_api_cache'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncApiCache = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsAppsyncApiCache, idFilter, baseNode)

export const useAwsAppsyncApiCaches = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsAppsyncApiCache, idFilter, baseNode)
