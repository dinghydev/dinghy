import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_domain_entry

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  target: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  is_alias: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailDomainEntry(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_domain_entry'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDomainEntry = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLightsailDomainEntry, node, id)

export const useAwsLightsailDomainEntrys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLightsailDomainEntry, node, id)
