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

export const AwsBackupFrameworkInputSchema = TfMetaSchema.extend({
  control: resolvableValue(
    z.object({
      name: z.string(),
      input_parameter: z.object({
        name: z.string().optional(),
        value: z.string().optional(),
      }).array().optional(),
      scope: z.object({
        compliance_resource_ids: z.string().array().optional(),
        compliance_resource_types: z.string().array().optional(),
        tags: z.record(z.string(), z.string()).optional(),
      }).optional(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBackupFrameworkOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  deployment_status: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBackupFrameworkInputProps =
  & z.input<typeof AwsBackupFrameworkInputSchema>
  & NodeProps

export type AwsBackupFrameworkOutputProps =
  & z.output<typeof AwsBackupFrameworkOutputSchema>
  & z.output<typeof AwsBackupFrameworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_framework

export function AwsBackupFramework(
  props: Partial<AwsBackupFrameworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_framework'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupFrameworkInputSchema}
      _outputSchema={AwsBackupFrameworkOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupFramework = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupFrameworkOutputProps>(
    AwsBackupFramework,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupFrameworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupFrameworkOutputProps>(
    AwsBackupFramework,
    idFilter,
    baseNode,
    optional,
  )
