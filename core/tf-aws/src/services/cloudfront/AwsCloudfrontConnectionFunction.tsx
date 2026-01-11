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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  connection_function_arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  live_stage_etag: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function

export function AwsCloudfrontConnectionFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_connection_function'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontConnectionFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCloudfrontConnectionFunction,
    idFilter,
    baseNode,
    optional,
  )
