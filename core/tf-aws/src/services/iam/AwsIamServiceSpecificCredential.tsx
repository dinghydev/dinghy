import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_service_specific_credential

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
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamServiceSpecificCredential(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsIamServiceSpecificCredential = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamServiceSpecificCredential, node, id)

export const useAwsIamServiceSpecificCredentials = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamServiceSpecificCredential, node, id)
