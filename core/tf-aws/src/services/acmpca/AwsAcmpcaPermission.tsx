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

export const AwsAcmpcaPermissionInputSchema = TfMetaSchema.extend({
  actions: resolvableValue(z.string().array()),
  certificate_authority_arn: resolvableValue(z.string()),
  principal: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_account: resolvableValue(z.string().optional()),
})

export const AwsAcmpcaPermissionOutputSchema = z.object({
  policy: z.string().optional(),
})

export type AwsAcmpcaPermissionInputProps =
  & z.input<typeof AwsAcmpcaPermissionInputSchema>
  & NodeProps

export type AwsAcmpcaPermissionOutputProps =
  & z.output<typeof AwsAcmpcaPermissionOutputSchema>
  & z.output<typeof AwsAcmpcaPermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/acmpca_permission

export function AwsAcmpcaPermission(
  props: Partial<AwsAcmpcaPermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acmpca_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAcmpcaPermissionInputSchema}
      _outputSchema={AwsAcmpcaPermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAcmpcaPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAcmpcaPermissionOutputProps>(
    AwsAcmpcaPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAcmpcaPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAcmpcaPermissionOutputProps>(
    AwsAcmpcaPermission,
    idFilter,
    baseNode,
    optional,
  )
