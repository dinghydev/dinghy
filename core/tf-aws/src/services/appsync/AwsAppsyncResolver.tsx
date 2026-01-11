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
      lambda_conflict_handler_config: z.object({
        lambda_conflict_handler_arn: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appsync_resolver

export function AwsAppsyncResolver(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsAppsyncResolver = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAppsyncResolver, idFilter, baseNode, optional)

export const useAwsAppsyncResolvers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAppsyncResolver, idFilter, baseNode, optional)
