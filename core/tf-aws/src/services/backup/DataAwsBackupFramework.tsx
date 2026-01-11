import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupFramework } from './AwsBackupFramework.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  control: z.object({
    input_parameter: z.object({
      name: z.string(),
      value: z.string(),
    }).array(),
    name: z.string(),
    scope: z.object({
      compliance_resource_ids: z.string().array(),
      compliance_resource_types: z.string().array(),
      tags: z.record(z.string(), z.string()),
    }).array(),
  }).array().optional(),
  creation_time: z.string().optional(),
  deployment_status: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/backup_framework

export function DataAwsBackupFramework(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBackupFramework
      _type='aws_backup_framework'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupFramework = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsBackupFramework,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBackupFrameworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsBackupFramework,
    idFilter,
    baseNode,
    optional,
  )
