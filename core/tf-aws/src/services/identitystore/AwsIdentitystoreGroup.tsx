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

export const AwsIdentitystoreGroupInputSchema = TfMetaSchema.extend({
  display_name: resolvableValue(z.string()),
  identity_store_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsIdentitystoreGroupOutputSchema = z.object({
  arn: z.string().optional(),
  external_ids: z.object({
    id: z.string(),
    issuer: z.string(),
  }).array().optional(),
  group_id: z.string().optional(),
})

export type AwsIdentitystoreGroupInputProps =
  & z.input<typeof AwsIdentitystoreGroupInputSchema>
  & NodeProps

export type AwsIdentitystoreGroupOutputProps =
  & z.output<typeof AwsIdentitystoreGroupOutputSchema>
  & z.output<typeof AwsIdentitystoreGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/identitystore_group

export function AwsIdentitystoreGroup(
  props: Partial<AwsIdentitystoreGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIdentitystoreGroupInputSchema}
      _outputSchema={AwsIdentitystoreGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsIdentitystoreGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIdentitystoreGroupOutputProps>(
    AwsIdentitystoreGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIdentitystoreGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIdentitystoreGroupOutputProps>(
    AwsIdentitystoreGroup,
    idFilter,
    baseNode,
    optional,
  )
