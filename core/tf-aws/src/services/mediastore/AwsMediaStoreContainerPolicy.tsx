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

export const AwsMediaStoreContainerPolicyInputSchema = TfMetaSchema.extend({
  container_name: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsMediaStoreContainerPolicyOutputSchema = z.object({})

export type AwsMediaStoreContainerPolicyInputProps =
  & z.input<typeof AwsMediaStoreContainerPolicyInputSchema>
  & NodeProps

export type AwsMediaStoreContainerPolicyOutputProps =
  & z.output<typeof AwsMediaStoreContainerPolicyOutputSchema>
  & z.output<typeof AwsMediaStoreContainerPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_store_container_policy

export function AwsMediaStoreContainerPolicy(
  props: Partial<AwsMediaStoreContainerPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_media_store_container_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMediaStoreContainerPolicyInputSchema}
      _outputSchema={AwsMediaStoreContainerPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsMediaStoreContainerPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMediaStoreContainerPolicyOutputProps>(
    AwsMediaStoreContainerPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMediaStoreContainerPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMediaStoreContainerPolicyOutputProps>(
    AwsMediaStoreContainerPolicy,
    idFilter,
    baseNode,
    optional,
  )
