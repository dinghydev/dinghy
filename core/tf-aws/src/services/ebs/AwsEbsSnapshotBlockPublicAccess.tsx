import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsEbsSnapshotBlockPublicAccessInputSchema = TfMetaSchema.extend({
  state: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEbsSnapshotBlockPublicAccessOutputSchema = z.object({})

export type AwsEbsSnapshotBlockPublicAccessInputProps =
  & z.input<typeof AwsEbsSnapshotBlockPublicAccessInputSchema>
  & NodeProps

export type AwsEbsSnapshotBlockPublicAccessOutputProps =
  & z.output<typeof AwsEbsSnapshotBlockPublicAccessOutputSchema>
  & z.output<typeof AwsEbsSnapshotBlockPublicAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_snapshot_block_public_access

export function AwsEbsSnapshotBlockPublicAccess(
  props: Partial<AwsEbsSnapshotBlockPublicAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot_block_public_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsSnapshotBlockPublicAccessInputSchema}
      _outputSchema={AwsEbsSnapshotBlockPublicAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsSnapshotBlockPublicAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsSnapshotBlockPublicAccessOutputProps>(
    AwsEbsSnapshotBlockPublicAccess,
    idFilter,
    baseNode,
    optional,
  )
