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

export const AwsSnsTopicPolicyInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSnsTopicPolicyOutputSchema = z.object({
  owner: z.string().optional(),
})

export const AwsSnsTopicPolicyImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSnsTopicPolicyInputProps =
  & z.input<typeof AwsSnsTopicPolicyInputSchema>
  & z.input<typeof AwsSnsTopicPolicyImportSchema>
  & NodeProps

export type AwsSnsTopicPolicyOutputProps =
  & z.output<typeof AwsSnsTopicPolicyOutputSchema>
  & z.output<typeof AwsSnsTopicPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sns_topic_policy

export function AwsSnsTopicPolicy(props: Partial<AwsSnsTopicPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_topic_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSnsTopicPolicyInputSchema}
      _outputSchema={AwsSnsTopicPolicyOutputSchema}
      _importSchema={AwsSnsTopicPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsSnsTopicPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSnsTopicPolicyOutputProps>(
    AwsSnsTopicPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSnsTopicPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSnsTopicPolicyOutputProps>(
    AwsSnsTopicPolicy,
    idFilter,
    baseNode,
    optional,
  )
