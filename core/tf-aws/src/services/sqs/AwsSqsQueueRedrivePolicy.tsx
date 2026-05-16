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

export const AwsSqsQueueRedrivePolicyInputSchema = TfMetaSchema.extend({
  queue_url: resolvableValue(z.string()),
  redrive_policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSqsQueueRedrivePolicyOutputSchema = z.object({})

export const AwsSqsQueueRedrivePolicyImportSchema = z.object({
  queue_url: resolvableValue(z.string()),
})

export type AwsSqsQueueRedrivePolicyInputProps =
  & z.input<typeof AwsSqsQueueRedrivePolicyInputSchema>
  & z.input<typeof AwsSqsQueueRedrivePolicyImportSchema>
  & NodeProps

export type AwsSqsQueueRedrivePolicyOutputProps =
  & z.output<typeof AwsSqsQueueRedrivePolicyOutputSchema>
  & z.output<typeof AwsSqsQueueRedrivePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sqs_queue_redrive_policy

export function AwsSqsQueueRedrivePolicy(
  props: Partial<AwsSqsQueueRedrivePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sqs_queue_redrive_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSqsQueueRedrivePolicyInputSchema}
      _outputSchema={AwsSqsQueueRedrivePolicyOutputSchema}
      _importSchema={AwsSqsQueueRedrivePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsSqsQueueRedrivePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSqsQueueRedrivePolicyOutputProps>(
    AwsSqsQueueRedrivePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSqsQueueRedrivePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSqsQueueRedrivePolicyOutputProps>(
    AwsSqsQueueRedrivePolicy,
    idFilter,
    baseNode,
    optional,
  )
