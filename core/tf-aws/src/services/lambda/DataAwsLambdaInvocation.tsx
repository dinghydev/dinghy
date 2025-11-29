import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaInvocation } from './AwsLambdaInvocation.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lambda_invocation

export const InputSchema = z.object({
  function_name: resolvableValue(z.string()),
  input: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  result: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLambdaInvocation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLambdaInvocation
      _type='aws_lambda_invocation'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaInvocation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLambdaInvocation, node, id)

export const useDataAwsLambdaInvocations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLambdaInvocation, node, id)
