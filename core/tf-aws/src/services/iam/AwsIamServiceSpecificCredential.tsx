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

export const AwsIamServiceSpecificCredentialInputSchema = TfMetaSchema.extend({
  service_name: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  credential_age_days: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
})

export const AwsIamServiceSpecificCredentialOutputSchema = z.object({
  create_date: z.string().optional(),
  expiration_date: z.string().optional(),
  service_credential_alias: z.string().optional(),
  service_credential_secret: z.string().optional(),
  service_password: z.string().optional(),
  service_specific_credential_id: z.string().optional(),
  service_user_name: z.string().optional(),
})

export type AwsIamServiceSpecificCredentialInputProps =
  & z.input<typeof AwsIamServiceSpecificCredentialInputSchema>
  & NodeProps

export type AwsIamServiceSpecificCredentialOutputProps =
  & z.output<typeof AwsIamServiceSpecificCredentialOutputSchema>
  & z.output<typeof AwsIamServiceSpecificCredentialInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_service_specific_credential

export function AwsIamServiceSpecificCredential(
  props: Partial<AwsIamServiceSpecificCredentialInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_service_specific_credential'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamServiceSpecificCredentialInputSchema}
      _outputSchema={AwsIamServiceSpecificCredentialOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamServiceSpecificCredential = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamServiceSpecificCredentialOutputProps>(
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
  useTypedNodes<AwsIamServiceSpecificCredentialOutputProps>(
    AwsIamServiceSpecificCredential,
    idFilter,
    baseNode,
    optional,
  )
