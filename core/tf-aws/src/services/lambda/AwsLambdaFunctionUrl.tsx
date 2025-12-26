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
  authorization_type: resolvableValue(z.string()),
  function_name: resolvableValue(z.string()),
  cors: resolvableValue(
    z.object({
      allow_credentials: z.boolean().optional(),
      allow_headers: z.string().array().optional(),
      allow_methods: z.string().array().optional(),
      allow_origins: z.string().array().optional(),
      expose_headers: z.string().array().optional(),
      max_age: z.number().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  invoke_mode: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  function_arn: z.string().optional(),
  function_url: z.string().optional(),
  url_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_function_url

export function AwsLambdaFunctionUrl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_function_url'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaFunctionUrl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsLambdaFunctionUrl, idFilter, baseNode, optional)

export const useAwsLambdaFunctionUrls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsLambdaFunctionUrl, idFilter, baseNode, optional)
