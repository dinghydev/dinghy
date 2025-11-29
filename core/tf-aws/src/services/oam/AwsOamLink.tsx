import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/oam_link

export const InputSchema = z.object({
  label_template: resolvableValue(z.string()),
  resource_types: resolvableValue(z.string().array()),
  sink_identifier: resolvableValue(z.string()),
  link_configuration: resolvableValue(
    z.object({
      log_group_configuration: z.object({
        filter: z.string(),
      }).optional(),
      metric_configuration: z.object({
        filter: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  label: z.string().optional(),
  link_id: z.string().optional(),
  sink_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOamLink(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_oam_link'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOamLink = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsOamLink, node, id)

export const useAwsOamLinks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsOamLink, node, id)
