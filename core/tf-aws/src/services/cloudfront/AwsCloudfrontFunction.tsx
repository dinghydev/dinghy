import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { CLOUDFRONT_FUNCTIONS } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'

export const InputSchema = TfMetaSchema.extend({
  code: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  runtime: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  key_value_store_associations: resolvableValue(z.string().array().optional()),
  publish: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  live_stage_etag: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_function

export function AwsCloudfrontFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_function'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
      _style={extendStyle(props, CLOUDFRONT_FUNCTIONS)}
    />
  )
}

export const useAwsCloudfrontFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsCloudfrontFunction, idFilter, baseNode, optional)

export const useAwsCloudfrontFunctions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontFunction,
    idFilter,
    baseNode,
    optional,
  )
