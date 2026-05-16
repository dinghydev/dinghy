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

export const AwsOpensearchserverlessSecurityPolicyInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    policy: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsOpensearchserverlessSecurityPolicyOutputSchema = z.object({
  id: z.string().optional(),
  policy_version: z.string().optional(),
})

export const AwsOpensearchserverlessSecurityPolicyImportSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsOpensearchserverlessSecurityPolicyInputProps =
  & z.input<typeof AwsOpensearchserverlessSecurityPolicyInputSchema>
  & z.input<typeof AwsOpensearchserverlessSecurityPolicyImportSchema>
  & NodeProps

export type AwsOpensearchserverlessSecurityPolicyOutputProps =
  & z.output<typeof AwsOpensearchserverlessSecurityPolicyOutputSchema>
  & z.output<typeof AwsOpensearchserverlessSecurityPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_security_policy

export function AwsOpensearchserverlessSecurityPolicy(
  props: Partial<AwsOpensearchserverlessSecurityPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_security_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchserverlessSecurityPolicyInputSchema}
      _outputSchema={AwsOpensearchserverlessSecurityPolicyOutputSchema}
      _importSchema={AwsOpensearchserverlessSecurityPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessSecurityPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchserverlessSecurityPolicyOutputProps>(
    AwsOpensearchserverlessSecurityPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchserverlessSecurityPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchserverlessSecurityPolicyOutputProps>(
    AwsOpensearchserverlessSecurityPolicy,
    idFilter,
    baseNode,
    optional,
  )
