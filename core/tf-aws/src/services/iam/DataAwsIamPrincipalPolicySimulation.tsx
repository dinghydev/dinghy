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
  action_names: resolvableValue(z.string().array()),
  id: resolvableValue(z.string()),
  policy_source_arn: resolvableValue(z.string()),
  additional_policies_json: resolvableValue(z.string().array().optional()),
  caller_arn: resolvableValue(z.string().optional()),
  context: resolvableValue(
    z.object({
      key: z.string(),
      type: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  permissions_boundary_policies_json: resolvableValue(
    z.string().array().optional(),
  ),
  resource_arns: resolvableValue(z.string().array().optional()),
  resource_handling_option: resolvableValue(z.string().optional()),
  resource_owner_account_id: resolvableValue(z.string().optional()),
  resource_policy_json: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  all_allowed: z.boolean().optional(),
  results: z.set(z.object({
    action_name: z.string(),
    allowed: z.boolean(),
    decision: z.string(),
    decision_details: z.record(z.string(), z.string()),
    matched_statements: z.set(z.object({
      source_policy_id: z.string(),
      source_policy_type: z.string(),
    })),
    missing_context_keys: z.set(z.string()),
    resource_arn: z.string(),
  })).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/iam_principal_policy_simulation

export function DataAwsIamPrincipalPolicySimulation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_principal_policy_simulation'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamPrincipalPolicySimulation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsIamPrincipalPolicySimulation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamPrincipalPolicySimulations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsIamPrincipalPolicySimulation,
    idFilter,
    baseNode,
    optional,
  )
