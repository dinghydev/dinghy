import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOamLink } from './AwsOamLink.tsx'

export const DataAwsOamLinkInputSchema = TfMetaSchema.extend({
  link_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsOamLinkOutputSchema = z.object({
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
  resource_types: z.set(z.string()).optional(),
  sink_arn: z.string().optional(),
})

export type DataAwsOamLinkInputProps =
  & z.input<typeof DataAwsOamLinkInputSchema>
  & NodeProps

export type DataAwsOamLinkOutputProps =
  & z.output<typeof DataAwsOamLinkOutputSchema>
  & z.output<typeof DataAwsOamLinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/oam_link

export function DataAwsOamLink(props: Partial<DataAwsOamLinkInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOamLink
      _type='aws_oam_link'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOamLinkInputSchema}
      _outputSchema={DataAwsOamLinkOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOamLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOamLinkOutputProps>(
    DataAwsOamLink,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOamLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOamLinkOutputProps>(
    DataAwsOamLink,
    idFilter,
    baseNode,
    optional,
  )
