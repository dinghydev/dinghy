import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshiftserverless_snapshot

export const InputSchema = z.object({
  namespace_name: resolvableValue(z.string()),
  snapshot_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
})

export const OutputSchema = z.object({
  accounts_with_provisioned_restore_access: z.string().array().optional(),
  accounts_with_restore_access: z.string().array().optional(),
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

export const useAwsRedshiftserverlessSnapshot = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftserverlessSnapshot, node, id)

export const useAwsRedshiftserverlessSnapshots = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftserverlessSnapshot, node, id)
