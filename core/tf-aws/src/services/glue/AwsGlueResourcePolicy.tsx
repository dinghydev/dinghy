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

export const AwsGlueResourcePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  enable_hybrid: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsGlueResourcePolicyOutputSchema = z.object({})

export type AwsGlueResourcePolicyInputProps =
  & z.input<typeof AwsGlueResourcePolicyInputSchema>
  & NodeProps

export type AwsGlueResourcePolicyOutputProps =
  & z.output<typeof AwsGlueResourcePolicyOutputSchema>
  & z.output<typeof AwsGlueResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_resource_policy

export function AwsGlueResourcePolicy(
  props: Partial<AwsGlueResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueResourcePolicyInputSchema}
      _outputSchema={AwsGlueResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueResourcePolicyOutputProps>(
    AwsGlueResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueResourcePolicyOutputProps>(
    AwsGlueResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
