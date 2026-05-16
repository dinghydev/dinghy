import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudwatchLogGroup } from './AwsCloudwatchLogGroup.tsx'

export const DataAwsCloudwatchLogGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudwatchLogGroupOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.number().optional(),
  deletion_protection_enabled: z.boolean().optional(),
  kms_key_id: z.string().optional(),
  log_group_class: z.string().optional(),
  retention_in_days: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsCloudwatchLogGroupInputProps =
  & z.input<typeof DataAwsCloudwatchLogGroupInputSchema>
  & NodeProps

export type DataAwsCloudwatchLogGroupOutputProps =
  & z.output<typeof DataAwsCloudwatchLogGroupOutputSchema>
  & z.output<typeof DataAwsCloudwatchLogGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudwatch_log_group

export function DataAwsCloudwatchLogGroup(
  props: Partial<DataAwsCloudwatchLogGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudwatchLogGroup
      _type='aws_cloudwatch_log_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudwatchLogGroupInputSchema}
      _outputSchema={DataAwsCloudwatchLogGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudwatchLogGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudwatchLogGroupOutputProps>(
    DataAwsCloudwatchLogGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudwatchLogGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudwatchLogGroupOutputProps>(
    DataAwsCloudwatchLogGroup,
    idFilter,
    baseNode,
    optional,
  )
