import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectLambdaFunctionAssociation } from './AwsConnectLambdaFunctionAssociation.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_lambda_function_association

export const InputSchema = z.object({
  function_arn: resolvableValue(z.string()),
  instance_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsConnectLambdaFunctionAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectLambdaFunctionAssociation
      _type='aws_connect_lambda_function_association'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectLambdaFunctionAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(DataAwsConnectLambdaFunctionAssociation, node, id)

export const useDataAwsConnectLambdaFunctionAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsConnectLambdaFunctionAssociation, node, id)
