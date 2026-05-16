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

export const AwsCloudwatchEventArchiveInputSchema = TfMetaSchema.extend({
  event_source_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  event_pattern: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  retention_days: resolvableValue(z.number().optional()),
})

export const AwsCloudwatchEventArchiveOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsCloudwatchEventArchiveInputProps =
  & z.input<typeof AwsCloudwatchEventArchiveInputSchema>
  & NodeProps

export type AwsCloudwatchEventArchiveOutputProps =
  & z.output<typeof AwsCloudwatchEventArchiveOutputSchema>
  & z.output<typeof AwsCloudwatchEventArchiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_event_archive

export function AwsCloudwatchEventArchive(
  props: Partial<AwsCloudwatchEventArchiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_archive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchEventArchiveInputSchema}
      _outputSchema={AwsCloudwatchEventArchiveOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventArchive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchEventArchiveOutputProps>(
    AwsCloudwatchEventArchive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchEventArchives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchEventArchiveOutputProps>(
    AwsCloudwatchEventArchive,
    idFilter,
    baseNode,
    optional,
  )
