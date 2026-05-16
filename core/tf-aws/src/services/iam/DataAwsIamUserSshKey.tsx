import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamUserSshKey } from './AwsIamUserSshKey.tsx'

export const DataAwsIamUserSshKeyInputSchema = TfMetaSchema.extend({
  encoding: resolvableValue(z.string()),
  ssh_public_key_id: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsIamUserSshKeyOutputSchema = z.object({
  fingerprint: z.string().optional(),
  public_key: z.string().optional(),
  status: z.string().optional(),
})

export type DataAwsIamUserSshKeyInputProps =
  & z.input<typeof DataAwsIamUserSshKeyInputSchema>
  & NodeProps

export type DataAwsIamUserSshKeyOutputProps =
  & z.output<typeof DataAwsIamUserSshKeyOutputSchema>
  & z.output<typeof DataAwsIamUserSshKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_user_ssh_key

export function DataAwsIamUserSshKey(
  props: Partial<DataAwsIamUserSshKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamUserSshKey
      _type='aws_iam_user_ssh_key'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamUserSshKeyInputSchema}
      _outputSchema={DataAwsIamUserSshKeyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamUserSshKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamUserSshKeyOutputProps>(
    DataAwsIamUserSshKey,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamUserSshKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamUserSshKeyOutputProps>(
    DataAwsIamUserSshKey,
    idFilter,
    baseNode,
    optional,
  )
