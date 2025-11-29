import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOamLink } from './AwsOamLink.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/oam_link

export const InputSchema = z.object({
  link_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  label: z.string().optional(),
  label_template: z.string().optional(),
  link_configuration: z.object({
    log_group_configuration: z.object({
      filter: z.string(),
    }).array(),
    metric_configuration: z.object({
      filter: z.string(),
    }).array(),
  }).array().optional(),
  link_id: z.string().optional(),
  resource_types: z.string().array().optional(),
  sink_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOamLink(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOamLink
      _type='aws_oam_link'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOamLink = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsOamLink, node, id)

export const useDataAwsOamLinks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsOamLink, node, id)
