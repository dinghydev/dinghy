import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontFunction } from './AwsCloudfrontFunction.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  stage: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  code: z.string().optional(),
  comment: z.string().optional(),
  etag: z.string().optional(),
  key_value_store_associations: z.set(z.string()).optional(),
  last_modified_time: z.string().optional(),
  runtime: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_function

export function DataAwsCloudfrontFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontFunction
      _type='aws_cloudfront_function'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudfrontFunction,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontFunctions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudfrontFunction,
    idFilter,
    baseNode,
    optional,
  )
