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

export const AwsOpensearchserverlessLifecyclePolicyInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    policy: resolvableValue(z.string()),
    type: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsOpensearchserverlessLifecyclePolicyOutputSchema = z.object({
  id: z.string().optional(),
  policy_version: z.string().optional(),
})

export const AwsOpensearchserverlessLifecyclePolicyImportSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsOpensearchserverlessLifecyclePolicyInputProps =
  & z.input<typeof AwsOpensearchserverlessLifecyclePolicyInputSchema>
  & z.input<typeof AwsOpensearchserverlessLifecyclePolicyImportSchema>
  & NodeProps

export type AwsOpensearchserverlessLifecyclePolicyOutputProps =
  & z.output<typeof AwsOpensearchserverlessLifecyclePolicyOutputSchema>
  & z.output<typeof AwsOpensearchserverlessLifecyclePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_lifecycle_policy

export function AwsOpensearchserverlessLifecyclePolicy(
  props: Partial<AwsOpensearchserverlessLifecyclePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_lifecycle_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchserverlessLifecyclePolicyInputSchema}
      _outputSchema={AwsOpensearchserverlessLifecyclePolicyOutputSchema}
      _importSchema={AwsOpensearchserverlessLifecyclePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessLifecyclePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchserverlessLifecyclePolicyOutputProps>(
    AwsOpensearchserverlessLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchserverlessLifecyclePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchserverlessLifecyclePolicyOutputProps>(
    AwsOpensearchserverlessLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )
