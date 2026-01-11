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

export const InputSchema = z.object({
  source_db_instance_arn: resolvableValue(z.string()),
  kms_key_id: resolvableValue(z.string().optional()),
  pre_signed_url: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/db_instance_automated_backups_replication

export function AwsDbInstanceAutomatedBackupsReplication(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_instance_automated_backups_replication'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDbInstanceAutomatedBackupsReplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDbInstanceAutomatedBackupsReplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbInstanceAutomatedBackupsReplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDbInstanceAutomatedBackupsReplication,
    idFilter,
    baseNode,
    optional,
  )
