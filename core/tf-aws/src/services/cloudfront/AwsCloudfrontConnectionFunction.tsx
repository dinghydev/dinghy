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

export const AwsCloudfrontConnectionFunctionInputSchema = TfMetaSchema.extend({
  connection_function_code: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  connection_function_config: resolvableValue(
    z.object({
      comment: z.string(),
      runtime: z.string(),
      key_value_store_association: z.object({
        key_value_store_arn: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  publish: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudfrontConnectionFunctionOutputSchema = z.object({
  connection_function_arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  live_stage_etag: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudfrontConnectionFunctionInputProps =
  & z.input<typeof AwsCloudfrontConnectionFunctionInputSchema>
  & NodeProps

export type AwsCloudfrontConnectionFunctionOutputProps =
  & z.output<typeof AwsCloudfrontConnectionFunctionOutputSchema>
  & z.output<typeof AwsCloudfrontConnectionFunctionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_connection_function

export function AwsCloudfrontConnectionFunction(
  props: Partial<AwsCloudfrontConnectionFunctionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_connection_function'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontConnectionFunctionInputSchema}
      _outputSchema={AwsCloudfrontConnectionFunctionOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontConnectionFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontConnectionFunctionOutputProps>(
    AwsCloudfrontConnectionFunction,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontConnectionFunctions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontConnectionFunctionOutputProps>(
    AwsCloudfrontConnectionFunction,
    idFilter,
    baseNode,
    optional,
  )
