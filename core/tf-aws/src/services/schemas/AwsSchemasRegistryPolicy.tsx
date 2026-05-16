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

export const AwsSchemasRegistryPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  registry_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSchemasRegistryPolicyOutputSchema = z.object({})

export type AwsSchemasRegistryPolicyInputProps =
  & z.input<typeof AwsSchemasRegistryPolicyInputSchema>
  & NodeProps

export type AwsSchemasRegistryPolicyOutputProps =
  & z.output<typeof AwsSchemasRegistryPolicyOutputSchema>
  & z.output<typeof AwsSchemasRegistryPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/schemas_registry_policy

export function AwsSchemasRegistryPolicy(
  props: Partial<AwsSchemasRegistryPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_schemas_registry_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSchemasRegistryPolicyInputSchema}
      _outputSchema={AwsSchemasRegistryPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsSchemasRegistryPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSchemasRegistryPolicyOutputProps>(
    AwsSchemasRegistryPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSchemasRegistryPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSchemasRegistryPolicyOutputProps>(
    AwsSchemasRegistryPolicy,
    idFilter,
    baseNode,
    optional,
  )
