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
  action: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  profile_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  profile_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  statement_id: resolvableValue(z.string().optional()),
  statement_id_prefix: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/signer_signing_profile_permission

export function AwsSignerSigningProfilePermission(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_signer_signing_profile_permission'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSignerSigningProfilePermission = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsSignerSigningProfilePermission,
    idFilter,
    baseNode,
  )

export const useAwsSignerSigningProfilePermissions = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsSignerSigningProfilePermission,
    idFilter,
    baseNode,
  )
