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

export const AwsConnectContactFlowModuleInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  content: resolvableValue(z.string().optional()),
  content_hash: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  filename: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsConnectContactFlowModuleOutputSchema = z.object({
  arn: z.string().optional(),
  contact_flow_module_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsConnectContactFlowModuleInputProps =
  & z.input<typeof AwsConnectContactFlowModuleInputSchema>
  & NodeProps

export type AwsConnectContactFlowModuleOutputProps =
  & z.output<typeof AwsConnectContactFlowModuleOutputSchema>
  & z.output<typeof AwsConnectContactFlowModuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_contact_flow_module

export function AwsConnectContactFlowModule(
  props: Partial<AwsConnectContactFlowModuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_contact_flow_module'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectContactFlowModuleInputSchema}
      _outputSchema={AwsConnectContactFlowModuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectContactFlowModule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectContactFlowModuleOutputProps>(
    AwsConnectContactFlowModule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectContactFlowModules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectContactFlowModuleOutputProps>(
    AwsConnectContactFlowModule,
    idFilter,
    baseNode,
    optional,
  )
