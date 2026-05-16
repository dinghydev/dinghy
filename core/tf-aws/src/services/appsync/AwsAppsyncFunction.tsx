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

export const AwsAppsyncFunctionInputSchema = TfMetaSchema.extend({
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
})

export const AwsAppsyncFunctionOutputSchema = z.object({
  arn: z.string().optional(),
  function_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsAppsyncFunctionInputProps =
  & z.input<typeof AwsAppsyncFunctionInputSchema>
  & NodeProps

export type AwsAppsyncFunctionOutputProps =
  & z.output<typeof AwsAppsyncFunctionOutputSchema>
  & z.output<typeof AwsAppsyncFunctionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_function

export function AwsAppsyncFunction(
  props: Partial<AwsAppsyncFunctionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_function'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncFunctionInputSchema}
      _outputSchema={AwsAppsyncFunctionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncFunctionOutputProps>(
    AwsAppsyncFunction,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncFunctions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncFunctionOutputProps>(
    AwsAppsyncFunction,
    idFilter,
    baseNode,
    optional,
  )
