import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_permission

export const InputSchema = z.object({
  action: resolvableValue(z.string()),
  function_name: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  event_source_token: resolvableValue(z.string().optional()),
  function_url_auth_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  principal_org_id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_account: resolvableValue(z.string().optional()),
  source_arn: resolvableValue(z.string().optional()),
  statement_id: resolvableValue(z.string().optional()),
  statement_id_prefix: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  function_name: resolvableValue(z.string()),
  statement_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLambdaPermission(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_permission'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsLambdaPermission = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLambdaPermission, node, id)

export const useAwsLambdaPermissions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLambdaPermission, node, id)
