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

export const AwsRedshiftserverlessSnapshotInputSchema = TfMetaSchema.extend({
  namespace_name: resolvableValue(z.string()),
  snapshot_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
})

export const AwsRedshiftserverlessSnapshotOutputSchema = z.object({
  accounts_with_provisioned_restore_access: z.set(z.string()).optional(),
  accounts_with_restore_access: z.set(z.string()).optional(),
  admin_username: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  namespace_arn: z.string().optional(),
  owner_account: z.string().optional(),
})

export type AwsRedshiftserverlessSnapshotInputProps =
  & z.input<typeof AwsRedshiftserverlessSnapshotInputSchema>
  & NodeProps

export type AwsRedshiftserverlessSnapshotOutputProps =
  & z.output<typeof AwsRedshiftserverlessSnapshotOutputSchema>
  & z.output<typeof AwsRedshiftserverlessSnapshotInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftserverless_snapshot

export function AwsRedshiftserverlessSnapshot(
  props: Partial<AwsRedshiftserverlessSnapshotInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftserverlessSnapshotInputSchema}
      _outputSchema={AwsRedshiftserverlessSnapshotOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftserverlessSnapshotOutputProps>(
    AwsRedshiftserverlessSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftserverlessSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftserverlessSnapshotOutputProps>(
    AwsRedshiftserverlessSnapshot,
    idFilter,
    baseNode,
    optional,
  )
