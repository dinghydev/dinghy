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
  create_date: resolvableValue(z.string()),
  expiration_date: resolvableValue(z.string()),
  service_credential_alias: resolvableValue(z.string()),
  service_credential_secret: resolvableValue(z.string()),
  service_name: resolvableValue(z.string()),
  service_password: resolvableValue(z.string()),
  service_specific_credential_id: resolvableValue(z.string()),
  service_user_name: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  credential_age_days: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_service_specific_credential

export function AwsIamServiceSpecificCredential(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_service_specific_credential'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamServiceSpecificCredential = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsIamServiceSpecificCredential,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamServiceSpecificCredentials = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsIamServiceSpecificCredential,
    idFilter,
    baseNode,
    optional,
  )
