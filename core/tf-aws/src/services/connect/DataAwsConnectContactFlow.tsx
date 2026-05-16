import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectContactFlow } from './AwsConnectContactFlow.tsx'

export const DataAwsConnectContactFlowInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  contact_flow_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsConnectContactFlowOutputSchema = z.object({
  arn: z.string().optional(),
  content: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type DataAwsConnectContactFlowInputProps =
  & z.input<typeof DataAwsConnectContactFlowInputSchema>
  & NodeProps

export type DataAwsConnectContactFlowOutputProps =
  & z.output<typeof DataAwsConnectContactFlowOutputSchema>
  & z.output<typeof DataAwsConnectContactFlowInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_contact_flow

export function DataAwsConnectContactFlow(
  props: Partial<DataAwsConnectContactFlowInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectContactFlow
      _type='aws_connect_contact_flow'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectContactFlowInputSchema}
      _outputSchema={DataAwsConnectContactFlowOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectContactFlow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectContactFlowOutputProps>(
    DataAwsConnectContactFlow,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectContactFlows = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectContactFlowOutputProps>(
    DataAwsConnectContactFlow,
    idFilter,
    baseNode,
    optional,
  )
