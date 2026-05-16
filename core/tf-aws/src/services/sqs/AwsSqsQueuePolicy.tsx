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

export const AwsSqsQueuePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  queue_url: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSqsQueuePolicyOutputSchema = z.object({})

export const AwsSqsQueuePolicyImportSchema = z.object({
  queue_url: resolvableValue(z.string()),
})

export type AwsSqsQueuePolicyInputProps =
  & z.input<typeof AwsSqsQueuePolicyInputSchema>
  & z.input<typeof AwsSqsQueuePolicyImportSchema>
  & NodeProps

export type AwsSqsQueuePolicyOutputProps =
  & z.output<typeof AwsSqsQueuePolicyOutputSchema>
  & z.output<typeof AwsSqsQueuePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sqs_queue_policy

export function AwsSqsQueuePolicy(props: Partial<AwsSqsQueuePolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sqs_queue_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSqsQueuePolicyInputSchema}
      _outputSchema={AwsSqsQueuePolicyOutputSchema}
      _importSchema={AwsSqsQueuePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsSqsQueuePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSqsQueuePolicyOutputProps>(
    AwsSqsQueuePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSqsQueuePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSqsQueuePolicyOutputProps>(
    AwsSqsQueuePolicy,
    idFilter,
    baseNode,
    optional,
  )
