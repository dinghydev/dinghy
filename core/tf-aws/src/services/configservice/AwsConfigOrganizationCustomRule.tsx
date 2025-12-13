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
  lambda_function_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  trigger_types: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  excluded_accounts: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  input_parameters: resolvableValue(z.string().optional()),
  maximum_execution_frequency: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_id_scope: resolvableValue(z.string().optional()),
  resource_types_scope: resolvableValue(z.string().array().optional()),
  tag_key_scope: resolvableValue(z.string().optional()),
  tag_value_scope: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/config_organization_custom_rule

export function AwsConfigOrganizationCustomRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_organization_custom_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigOrganizationCustomRule = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsConfigOrganizationCustomRule, idFilter, baseNode)

export const useAwsConfigOrganizationCustomRules = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsConfigOrganizationCustomRule,
    idFilter,
    baseNode,
  )
