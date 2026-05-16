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

export const AwsVerifiedaccessGroupInputSchema = TfMetaSchema.extend({
  verifiedaccess_instance_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  policy_document: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sse_configuration: resolvableValue(
    z.object({
      customer_managed_key_enabled: z.boolean().optional(),
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsVerifiedaccessGroupOutputSchema = z.object({
  creation_time: z.string().optional(),
  deletion_time: z.string().optional(),
  last_updated_time: z.string().optional(),
  owner: z.string().optional(),
  verifiedaccess_group_arn: z.string().optional(),
  verifiedaccess_group_id: z.string().optional(),
})

export type AwsVerifiedaccessGroupInputProps =
  & z.input<typeof AwsVerifiedaccessGroupInputSchema>
  & NodeProps

export type AwsVerifiedaccessGroupOutputProps =
  & z.output<typeof AwsVerifiedaccessGroupOutputSchema>
  & z.output<typeof AwsVerifiedaccessGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/verifiedaccess_group

export function AwsVerifiedaccessGroup(
  props: Partial<AwsVerifiedaccessGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVerifiedaccessGroupInputSchema}
      _outputSchema={AwsVerifiedaccessGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVerifiedaccessGroupOutputProps>(
    AwsVerifiedaccessGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedaccessGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVerifiedaccessGroupOutputProps>(
    AwsVerifiedaccessGroup,
    idFilter,
    baseNode,
    optional,
  )
