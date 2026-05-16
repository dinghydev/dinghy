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

export const AwsIamUserSshKeyInputSchema = TfMetaSchema.extend({
  encoding: resolvableValue(z.string()),
  public_key: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
})

export const AwsIamUserSshKeyOutputSchema = z.object({
  fingerprint: z.string().optional(),
  ssh_public_key_id: z.string().optional(),
})

export type AwsIamUserSshKeyInputProps =
  & z.input<typeof AwsIamUserSshKeyInputSchema>
  & NodeProps

export type AwsIamUserSshKeyOutputProps =
  & z.output<typeof AwsIamUserSshKeyOutputSchema>
  & z.output<typeof AwsIamUserSshKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_user_ssh_key

export function AwsIamUserSshKey(props: Partial<AwsIamUserSshKeyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_ssh_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamUserSshKeyInputSchema}
      _outputSchema={AwsIamUserSshKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserSshKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamUserSshKeyOutputProps>(
    AwsIamUserSshKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamUserSshKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamUserSshKeyOutputProps>(
    AwsIamUserSshKey,
    idFilter,
    baseNode,
    optional,
  )
