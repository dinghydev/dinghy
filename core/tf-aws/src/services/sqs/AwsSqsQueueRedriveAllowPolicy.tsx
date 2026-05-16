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

export const AwsSqsQueueRedriveAllowPolicyInputSchema = TfMetaSchema.extend({
  queue_url: resolvableValue(z.string()),
  redrive_allow_policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSqsQueueRedriveAllowPolicyOutputSchema = z.object({})

export const AwsSqsQueueRedriveAllowPolicyImportSchema = z.object({
  queue_url: resolvableValue(z.string()),
})

export type AwsSqsQueueRedriveAllowPolicyInputProps =
  & z.input<typeof AwsSqsQueueRedriveAllowPolicyInputSchema>
  & z.input<typeof AwsSqsQueueRedriveAllowPolicyImportSchema>
  & NodeProps

export type AwsSqsQueueRedriveAllowPolicyOutputProps =
  & z.output<typeof AwsSqsQueueRedriveAllowPolicyOutputSchema>
  & z.output<typeof AwsSqsQueueRedriveAllowPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sqs_queue_redrive_allow_policy

export function AwsSqsQueueRedriveAllowPolicy(
  props: Partial<AwsSqsQueueRedriveAllowPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sqs_queue_redrive_allow_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSqsQueueRedriveAllowPolicyInputSchema}
      _outputSchema={AwsSqsQueueRedriveAllowPolicyOutputSchema}
      _importSchema={AwsSqsQueueRedriveAllowPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsSqsQueueRedriveAllowPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSqsQueueRedriveAllowPolicyOutputProps>(
    AwsSqsQueueRedriveAllowPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSqsQueueRedriveAllowPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSqsQueueRedriveAllowPolicyOutputProps>(
    AwsSqsQueueRedriveAllowPolicy,
    idFilter,
    baseNode,
    optional,
  )
