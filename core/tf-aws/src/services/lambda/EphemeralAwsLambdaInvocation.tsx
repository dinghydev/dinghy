import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaInvocation } from './AwsLambdaInvocation.tsx'

export const InputSchema = z.object({
  function_name: resolvableValue(z.string()),
  payload: resolvableValue(z.string()),
  client_context: resolvableValue(z.string().optional()),
  log_type: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  executed_version: z.string().optional(),
  function_error: z.string().optional(),
  log_result: z.string().optional(),
  result: z.string().optional(),
  status_code: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/ephemeral-resources/lambda_invocation

export function EphemeralAwsLambdaInvocation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLambdaInvocation
      _type='aws_lambda_invocation'
      _category='ephemeral'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useEphemeralAwsLambdaInvocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    EphemeralAwsLambdaInvocation,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsLambdaInvocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    EphemeralAwsLambdaInvocation,
    idFilter,
    baseNode,
    optional,
  )
