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

export const AwsShieldProtectionGroupInputSchema = TfMetaSchema.extend({
  aggregation: resolvableValue(z.string()),
  pattern: resolvableValue(z.string()),
  protection_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  members: resolvableValue(z.string().array().optional()),
  resource_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsShieldProtectionGroupOutputSchema = z.object({
  protection_group_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsShieldProtectionGroupInputProps =
  & z.input<typeof AwsShieldProtectionGroupInputSchema>
  & NodeProps

export type AwsShieldProtectionGroupOutputProps =
  & z.output<typeof AwsShieldProtectionGroupOutputSchema>
  & z.output<typeof AwsShieldProtectionGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_protection_group

export function AwsShieldProtectionGroup(
  props: Partial<AwsShieldProtectionGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_protection_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldProtectionGroupInputSchema}
      _outputSchema={AwsShieldProtectionGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldProtectionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldProtectionGroupOutputProps>(
    AwsShieldProtectionGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldProtectionGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldProtectionGroupOutputProps>(
    AwsShieldProtectionGroup,
    idFilter,
    baseNode,
    optional,
  )
