import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_resolver

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  field: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  caching_config: resolvableValue(
    z.object({
      caching_keys: z.string().array().optional(),
      ttl: z.number().optional(),
    }).optional(),
  ),
  code: resolvableValue(z.string().optional()),
  data_source: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kind: resolvableValue(z.string().optional()),
  max_batch_size: resolvableValue(z.number().optional()),
  pipeline_config: resolvableValue(
    z.object({
      functions: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  request_template: resolvableValue(z.string().optional()),
  response_template: resolvableValue(z.string().optional()),
  runtime: resolvableValue(
    z.object({
      name: z.string(),
      runtime_version: z.string(),
    }).optional(),
  ),
  sync_config: resolvableValue(
    z.object({
      conflict_detection: z.string().optional(),
      conflict_handler: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppsyncResolver(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_resolver'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncResolver = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppsyncResolver, node, id)

export const useAwsAppsyncResolvers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppsyncResolver, node, id)
