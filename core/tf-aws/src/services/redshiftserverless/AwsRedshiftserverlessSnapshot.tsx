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
  namespace_name: resolvableValue(z.string()),
  snapshot_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  accounts_with_provisioned_restore_access: z.set(z.string()).optional(),
  accounts_with_restore_access: z.set(z.string()).optional(),
  admin_username: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  namespace_arn: z.string().optional(),
  owner_account: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshiftserverless_snapshot

export function AwsRedshiftserverlessSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessSnapshot = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsRedshiftserverlessSnapshot, idFilter, baseNode)

export const useAwsRedshiftserverlessSnapshots = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsRedshiftserverlessSnapshot, idFilter, baseNode)
