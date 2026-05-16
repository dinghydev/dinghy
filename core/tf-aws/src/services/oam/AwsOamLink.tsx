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

export const AwsOamLinkInputSchema = TfMetaSchema.extend({
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

export const AwsOamLinkOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  label: z.string().optional(),
  link_id: z.string().optional(),
  sink_arn: z.string().optional(),
})

export type AwsOamLinkInputProps =
  & z.input<typeof AwsOamLinkInputSchema>
  & NodeProps

export type AwsOamLinkOutputProps =
  & z.output<typeof AwsOamLinkOutputSchema>
  & z.output<typeof AwsOamLinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/oam_link

export function AwsOamLink(props: Partial<AwsOamLinkInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_oam_link'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOamLinkInputSchema}
      _outputSchema={AwsOamLinkOutputSchema}
      {...props}
    />
  )
}

export const useAwsOamLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOamLinkOutputProps>(AwsOamLink, idFilter, baseNode, optional)

export const useAwsOamLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOamLinkOutputProps>(AwsOamLink, idFilter, baseNode, optional)
