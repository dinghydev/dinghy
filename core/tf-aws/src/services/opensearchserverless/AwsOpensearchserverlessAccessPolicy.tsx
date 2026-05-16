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

export const AwsOpensearchserverlessAccessPolicyInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    policy: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsOpensearchserverlessAccessPolicyOutputSchema = z.object({
  id: z.string().optional(),
  policy_version: z.string().optional(),
})

export const AwsOpensearchserverlessAccessPolicyImportSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsOpensearchserverlessAccessPolicyInputProps =
  & z.input<typeof AwsOpensearchserverlessAccessPolicyInputSchema>
  & z.input<typeof AwsOpensearchserverlessAccessPolicyImportSchema>
  & NodeProps

export type AwsOpensearchserverlessAccessPolicyOutputProps =
  & z.output<typeof AwsOpensearchserverlessAccessPolicyOutputSchema>
  & z.output<typeof AwsOpensearchserverlessAccessPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_access_policy

export function AwsOpensearchserverlessAccessPolicy(
  props: Partial<AwsOpensearchserverlessAccessPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_access_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchserverlessAccessPolicyInputSchema}
      _outputSchema={AwsOpensearchserverlessAccessPolicyOutputSchema}
      _importSchema={AwsOpensearchserverlessAccessPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessAccessPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchserverlessAccessPolicyOutputProps>(
    AwsOpensearchserverlessAccessPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchserverlessAccessPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchserverlessAccessPolicyOutputProps>(
    AwsOpensearchserverlessAccessPolicy,
    idFilter,
    baseNode,
    optional,
  )
