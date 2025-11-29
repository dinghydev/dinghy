import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emr_block_public_access_configuration

export const InputSchema = z.object({
  block_public_security_group_rules: resolvableValue(z.boolean()),
  id: resolvableValue(z.string().optional()),
  permitted_public_security_group_rule_range: resolvableValue(
    z.object({
      max_range: z.number(),
      min_range: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEmrBlockPublicAccessConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_block_public_access_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrBlockPublicAccessConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsEmrBlockPublicAccessConfiguration, node, id)

export const useAwsEmrBlockPublicAccessConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsEmrBlockPublicAccessConfiguration, node, id)
