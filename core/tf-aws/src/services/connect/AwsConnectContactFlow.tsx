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

export const AwsConnectContactFlowInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  content: resolvableValue(z.string().optional()),
  content_hash: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  filename: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const AwsConnectContactFlowOutputSchema = z.object({
  arn: z.string().optional(),
  contact_flow_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsConnectContactFlowInputProps =
  & z.input<typeof AwsConnectContactFlowInputSchema>
  & NodeProps

export type AwsConnectContactFlowOutputProps =
  & z.output<typeof AwsConnectContactFlowOutputSchema>
  & z.output<typeof AwsConnectContactFlowInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_contact_flow

export function AwsConnectContactFlow(
  props: Partial<AwsConnectContactFlowInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_contact_flow'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectContactFlowInputSchema}
      _outputSchema={AwsConnectContactFlowOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectContactFlow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectContactFlowOutputProps>(
    AwsConnectContactFlow,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectContactFlows = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectContactFlowOutputProps>(
    AwsConnectContactFlow,
    idFilter,
    baseNode,
    optional,
  )
