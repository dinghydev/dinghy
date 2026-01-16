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

export const InputSchema = TfMetaSchema.extend({
  user: resolvableValue(z.string()),
  pgp_key: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  create_date: z.string().optional(),
  encrypted_secret: z.string().optional(),
  encrypted_ses_smtp_password_v4: z.string().optional(),
  id: z.string().optional(),
  key_fingerprint: z.string().optional(),
  secret: z.string().optional(),
  ses_smtp_password_v4: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_access_key

export function AwsIamAccessKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_access_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamAccessKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsIamAccessKey, idFilter, baseNode, optional)

export const useAwsIamAccessKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsIamAccessKey, idFilter, baseNode, optional)
