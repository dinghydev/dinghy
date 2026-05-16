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

export const AwsVerifiedpermissionsPolicyStoreInputSchema = TfMetaSchema.extend(
  {
    deletion_protection: resolvableValue(z.string().optional()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    validation_settings: resolvableValue(
      z.object({
        mode: z.string(),
      }).array().optional(),
    ),
  },
)

export const AwsVerifiedpermissionsPolicyStoreOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  policy_store_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVerifiedpermissionsPolicyStoreInputProps =
  & z.input<typeof AwsVerifiedpermissionsPolicyStoreInputSchema>
  & NodeProps

export type AwsVerifiedpermissionsPolicyStoreOutputProps =
  & z.output<typeof AwsVerifiedpermissionsPolicyStoreOutputSchema>
  & z.output<typeof AwsVerifiedpermissionsPolicyStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/verifiedpermissions_policy_store

export function AwsVerifiedpermissionsPolicyStore(
  props: Partial<AwsVerifiedpermissionsPolicyStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedpermissions_policy_store'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVerifiedpermissionsPolicyStoreInputSchema}
      _outputSchema={AwsVerifiedpermissionsPolicyStoreOutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedpermissionsPolicyStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVerifiedpermissionsPolicyStoreOutputProps>(
    AwsVerifiedpermissionsPolicyStore,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedpermissionsPolicyStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVerifiedpermissionsPolicyStoreOutputProps>(
    AwsVerifiedpermissionsPolicyStore,
    idFilter,
    baseNode,
    optional,
  )
