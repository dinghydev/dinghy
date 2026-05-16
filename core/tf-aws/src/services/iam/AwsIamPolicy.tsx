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

export const AwsIamPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  delay_after_policy_creation_in_ms: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  path: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsIamPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  attachment_count: z.number().optional(),
  id: z.string().optional(),
  policy_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsIamPolicyImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsIamPolicyInputProps =
  & z.input<typeof AwsIamPolicyInputSchema>
  & z.input<typeof AwsIamPolicyImportSchema>
  & NodeProps

export type AwsIamPolicyOutputProps =
  & z.output<typeof AwsIamPolicyOutputSchema>
  & z.output<typeof AwsIamPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_policy

export function AwsIamPolicy(props: Partial<AwsIamPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamPolicyInputSchema}
      _outputSchema={AwsIamPolicyOutputSchema}
      _importSchema={AwsIamPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsIamPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamPolicyOutputProps>(
    AwsIamPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamPolicyOutputProps>(
    AwsIamPolicy,
    idFilter,
    baseNode,
    optional,
  )
