import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectContactFlowModule } from './AwsConnectContactFlowModule.tsx'

export const DataAwsConnectContactFlowModuleInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  contact_flow_module_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsConnectContactFlowModuleOutputSchema = z.object({
  arn: z.string().optional(),
  content: z.string().optional(),
  description: z.string().optional(),
  state: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsConnectContactFlowModuleInputProps =
  & z.input<typeof DataAwsConnectContactFlowModuleInputSchema>
  & NodeProps

export type DataAwsConnectContactFlowModuleOutputProps =
  & z.output<typeof DataAwsConnectContactFlowModuleOutputSchema>
  & z.output<typeof DataAwsConnectContactFlowModuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_contact_flow_module

export function DataAwsConnectContactFlowModule(
  props: Partial<DataAwsConnectContactFlowModuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectContactFlowModule
      _type='aws_connect_contact_flow_module'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectContactFlowModuleInputSchema}
      _outputSchema={DataAwsConnectContactFlowModuleOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectContactFlowModule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectContactFlowModuleOutputProps>(
    DataAwsConnectContactFlowModule,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectContactFlowModules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectContactFlowModuleOutputProps>(
    DataAwsConnectContactFlowModule,
    idFilter,
    baseNode,
    optional,
  )
