import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dx_router_configuration

export const InputSchema = z.object({
  virtual_interface_id: resolvableValue(z.string()),
  virtual_interface_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  customer_router_config: z.string().optional(),
  router: z.object({
    platform: z.string(),
    router_type_identifier: z.string(),
    software: z.string(),
    vendor: z.string(),
    xslt_template_name: z.string(),
    xslt_template_name_for_mac_sec: z.string(),
  }).array().optional(),
  router_type_identifier: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDxRouterConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_router_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDxRouterConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsDxRouterConfiguration, node, id)

export const useDataAwsDxRouterConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsDxRouterConfiguration, node, id)
