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

export const AwsS3controlAccessGrantsInstanceResourcePolicyInputSchema =
  TfMetaSchema.extend({
    policy: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsS3controlAccessGrantsInstanceResourcePolicyOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsS3controlAccessGrantsInstanceResourcePolicyInputProps =
  & z.input<typeof AwsS3controlAccessGrantsInstanceResourcePolicyInputSchema>
  & NodeProps

export type AwsS3controlAccessGrantsInstanceResourcePolicyOutputProps =
  & z.output<typeof AwsS3controlAccessGrantsInstanceResourcePolicyOutputSchema>
  & z.output<typeof AwsS3controlAccessGrantsInstanceResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_access_grants_instance_resource_policy

export function AwsS3controlAccessGrantsInstanceResourcePolicy(
  props: Partial<AwsS3controlAccessGrantsInstanceResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_access_grants_instance_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlAccessGrantsInstanceResourcePolicyInputSchema}
      _outputSchema={AwsS3controlAccessGrantsInstanceResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlAccessGrantsInstanceResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlAccessGrantsInstanceResourcePolicyOutputProps>(
    AwsS3controlAccessGrantsInstanceResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlAccessGrantsInstanceResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlAccessGrantsInstanceResourcePolicyOutputProps>(
    AwsS3controlAccessGrantsInstanceResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
