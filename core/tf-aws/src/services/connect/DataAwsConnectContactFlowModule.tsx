import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectContactFlowModule } from './AwsConnectContactFlowModule.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_contact_flow_module

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  contact_flow_module_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  content: z.string().optional(),
  description: z.string().optional(),
  state: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsConnectContactFlowModule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectContactFlowModule
      _type='aws_connect_contact_flow_module'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectContactFlowModule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsConnectContactFlowModule, node, id)

export const useDataAwsConnectContactFlowModules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsConnectContactFlowModule, node, id)
