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

export const AwsLambdaPermissionInputSchema = TfMetaSchema.extend({
  action: resolvableValue(z.string()),
  function_name: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  event_source_token: resolvableValue(z.string().optional()),
  function_url_auth_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  invoked_via_function_url: resolvableValue(z.boolean().optional()),
  principal_org_id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_account: resolvableValue(z.string().optional()),
  source_arn: resolvableValue(z.string().optional()),
  statement_id: resolvableValue(z.string().optional()),
  statement_id_prefix: resolvableValue(z.string().optional()),
})

export const AwsLambdaPermissionOutputSchema = z.object({})

export const AwsLambdaPermissionImportSchema = z.object({
  function_name: resolvableValue(z.string()),
  statement_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsLambdaPermissionInputProps =
  & z.input<typeof AwsLambdaPermissionInputSchema>
  & z.input<typeof AwsLambdaPermissionImportSchema>
  & NodeProps

export type AwsLambdaPermissionOutputProps =
  & z.output<typeof AwsLambdaPermissionOutputSchema>
  & z.output<typeof AwsLambdaPermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_permission

export function AwsLambdaPermission(
  props: Partial<AwsLambdaPermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaPermissionInputSchema}
      _outputSchema={AwsLambdaPermissionOutputSchema}
      _importSchema={AwsLambdaPermissionImportSchema}
      {...props}
    />
  )
}

export const useAwsLambdaPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaPermissionOutputProps>(
    AwsLambdaPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaPermissionOutputProps>(
    AwsLambdaPermission,
    idFilter,
    baseNode,
    optional,
  )
