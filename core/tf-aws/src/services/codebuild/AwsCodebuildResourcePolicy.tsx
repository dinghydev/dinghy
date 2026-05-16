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

export const AwsCodebuildResourcePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCodebuildResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsCodebuildResourcePolicyImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type AwsCodebuildResourcePolicyInputProps =
  & z.input<typeof AwsCodebuildResourcePolicyInputSchema>
  & z.input<typeof AwsCodebuildResourcePolicyImportSchema>
  & NodeProps

export type AwsCodebuildResourcePolicyOutputProps =
  & z.output<typeof AwsCodebuildResourcePolicyOutputSchema>
  & z.output<typeof AwsCodebuildResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codebuild_resource_policy

export function AwsCodebuildResourcePolicy(
  props: Partial<AwsCodebuildResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codebuild_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodebuildResourcePolicyInputSchema}
      _outputSchema={AwsCodebuildResourcePolicyOutputSchema}
      _importSchema={AwsCodebuildResourcePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsCodebuildResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodebuildResourcePolicyOutputProps>(
    AwsCodebuildResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodebuildResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodebuildResourcePolicyOutputProps>(
    AwsCodebuildResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
