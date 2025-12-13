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
  aggregation: resolvableValue(z.string()),
  pattern: resolvableValue(z.string()),
  protection_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  members: resolvableValue(z.string().array().optional()),
  resource_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  protection_group_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/shield_protection_group

export function AwsShieldProtectionGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_protection_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldProtectionGroup = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsShieldProtectionGroup, idFilter, baseNode)

export const useAwsShieldProtectionGroups = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsShieldProtectionGroup, idFilter, baseNode)
