import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/macie2_organization_configuration

export const InputSchema = z.object({
  auto_enable: resolvableValue(z.boolean()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMacie2OrganizationConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2OrganizationConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsMacie2OrganizationConfiguration, node, id)

export const useAwsMacie2OrganizationConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsMacie2OrganizationConfiguration, node, id)
