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

export const AwsSignerSigningProfilePermissionInputSchema = TfMetaSchema.extend(
  {
    action: resolvableValue(z.string()),
    principal: resolvableValue(z.string()),
    profile_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    profile_version: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    statement_id: resolvableValue(z.string().optional()),
    statement_id_prefix: resolvableValue(z.string().optional()),
  },
)

export const AwsSignerSigningProfilePermissionOutputSchema = z.object({})

export type AwsSignerSigningProfilePermissionInputProps =
  & z.input<typeof AwsSignerSigningProfilePermissionInputSchema>
  & NodeProps

export type AwsSignerSigningProfilePermissionOutputProps =
  & z.output<typeof AwsSignerSigningProfilePermissionOutputSchema>
  & z.output<typeof AwsSignerSigningProfilePermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/signer_signing_profile_permission

export function AwsSignerSigningProfilePermission(
  props: Partial<AwsSignerSigningProfilePermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_signer_signing_profile_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSignerSigningProfilePermissionInputSchema}
      _outputSchema={AwsSignerSigningProfilePermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsSignerSigningProfilePermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSignerSigningProfilePermissionOutputProps>(
    AwsSignerSigningProfilePermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSignerSigningProfilePermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSignerSigningProfilePermissionOutputProps>(
    AwsSignerSigningProfilePermission,
    idFilter,
    baseNode,
    optional,
  )
