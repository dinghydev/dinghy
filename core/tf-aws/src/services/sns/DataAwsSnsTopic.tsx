import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSnsTopic } from './AwsSnsTopic.tsx'

export const DataAwsSnsTopicInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSnsTopicOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsSnsTopicInputProps =
  & z.input<typeof DataAwsSnsTopicInputSchema>
  & NodeProps

export type DataAwsSnsTopicOutputProps =
  & z.output<typeof DataAwsSnsTopicOutputSchema>
  & z.output<typeof DataAwsSnsTopicInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sns_topic

export function DataAwsSnsTopic(props: Partial<DataAwsSnsTopicInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSnsTopic
      _type='aws_sns_topic'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSnsTopicInputSchema}
      _outputSchema={DataAwsSnsTopicOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSnsTopic = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSnsTopicOutputProps>(
    DataAwsSnsTopic,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSnsTopics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSnsTopicOutputProps>(
    DataAwsSnsTopic,
    idFilter,
    baseNode,
    optional,
  )
