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

export const AwsDynamodbResourcePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  confirm_remove_self_resource_access: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDynamodbResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
  revision_id: z.string().optional(),
})

export const AwsDynamodbResourcePolicyImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type AwsDynamodbResourcePolicyInputProps =
  & z.input<typeof AwsDynamodbResourcePolicyInputSchema>
  & z.input<typeof AwsDynamodbResourcePolicyImportSchema>
  & NodeProps

export type AwsDynamodbResourcePolicyOutputProps =
  & z.output<typeof AwsDynamodbResourcePolicyOutputSchema>
  & z.output<typeof AwsDynamodbResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dynamodb_resource_policy

export function AwsDynamodbResourcePolicy(
  props: Partial<AwsDynamodbResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDynamodbResourcePolicyInputSchema}
      _outputSchema={AwsDynamodbResourcePolicyOutputSchema}
      _importSchema={AwsDynamodbResourcePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDynamodbResourcePolicyOutputProps>(
    AwsDynamodbResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDynamodbResourcePolicyOutputProps>(
    AwsDynamodbResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
