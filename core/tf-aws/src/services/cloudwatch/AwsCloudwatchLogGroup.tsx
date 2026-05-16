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

export const AwsCloudwatchLogGroupInputSchema = TfMetaSchema.extend({
  deletion_protection_enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  log_group_class: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  retention_in_days: resolvableValue(z.number().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudwatchLogGroupOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCloudwatchLogGroupImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCloudwatchLogGroupInputProps =
  & z.input<typeof AwsCloudwatchLogGroupInputSchema>
  & z.input<typeof AwsCloudwatchLogGroupImportSchema>
  & NodeProps

export type AwsCloudwatchLogGroupOutputProps =
  & z.output<typeof AwsCloudwatchLogGroupOutputSchema>
  & z.output<typeof AwsCloudwatchLogGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_group

export function AwsCloudwatchLogGroup(
  props: Partial<AwsCloudwatchLogGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogGroupInputSchema}
      _outputSchema={AwsCloudwatchLogGroupOutputSchema}
      _importSchema={AwsCloudwatchLogGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogGroupOutputProps>(
    AwsCloudwatchLogGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogGroupOutputProps>(
    AwsCloudwatchLogGroup,
    idFilter,
    baseNode,
    optional,
  )
