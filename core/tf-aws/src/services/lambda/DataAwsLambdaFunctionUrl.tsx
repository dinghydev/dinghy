import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaFunctionUrl } from './AwsLambdaFunctionUrl.tsx'

export const InputSchema = z.object({
  function_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  authorization_type: z.string().optional(),
  cors: z.object({
    allow_credentials: z.boolean(),
    allow_headers: z.string().array(),
    allow_methods: z.string().array(),
    allow_origins: z.string().array(),
    expose_headers: z.string().array(),
    max_age: z.number(),
  }).array().optional(),
  creation_time: z.string().optional(),
  function_arn: z.string().optional(),
  function_url: z.string().optional(),
  invoke_mode: z.string().optional(),
  last_modified_time: z.string().optional(),
  url_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lambda_function_url

export function DataAwsLambdaFunctionUrl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLambdaFunctionUrl
      _type='aws_lambda_function_url'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaFunctionUrl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsLambdaFunctionUrl,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLambdaFunctionUrls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsLambdaFunctionUrl,
    idFilter,
    baseNode,
    optional,
  )
