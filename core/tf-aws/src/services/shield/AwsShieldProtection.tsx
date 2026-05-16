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

export const AwsShieldProtectionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsShieldProtectionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsShieldProtectionInputProps =
  & z.input<typeof AwsShieldProtectionInputSchema>
  & NodeProps

export type AwsShieldProtectionOutputProps =
  & z.output<typeof AwsShieldProtectionOutputSchema>
  & z.output<typeof AwsShieldProtectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_protection

export function AwsShieldProtection(
  props: Partial<AwsShieldProtectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_protection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldProtectionInputSchema}
      _outputSchema={AwsShieldProtectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldProtection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldProtectionOutputProps>(
    AwsShieldProtection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldProtections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldProtectionOutputProps>(
    AwsShieldProtection,
    idFilter,
    baseNode,
    optional,
  )
