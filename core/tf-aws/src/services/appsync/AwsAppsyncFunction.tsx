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
  data_source: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  code: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  function_version: resolvableValue(z.string().optional()),
  max_batch_size: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  request_mapping_template: resolvableValue(z.string().optional()),
  response_mapping_template: resolvableValue(z.string().optional()),
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
  function_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_function

export function AwsAppsyncFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_function'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAppsyncFunction, idFilter, baseNode, optional)

export const useAwsAppsyncFunctions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAppsyncFunction, idFilter, baseNode, optional)
