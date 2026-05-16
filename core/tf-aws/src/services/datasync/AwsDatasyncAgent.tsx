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

export const AwsDatasyncAgentInputSchema = TfMetaSchema.extend({
  activation_key: resolvableValue(z.string().optional()),
  ip_address: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  private_link_endpoint: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_arns: resolvableValue(z.string().array().optional()),
  subnet_arns: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  vpc_endpoint_id: resolvableValue(z.string().optional()),
})

export const AwsDatasyncAgentOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsDatasyncAgentImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncAgentInputProps =
  & z.input<typeof AwsDatasyncAgentInputSchema>
  & z.input<typeof AwsDatasyncAgentImportSchema>
  & NodeProps

export type AwsDatasyncAgentOutputProps =
  & z.output<typeof AwsDatasyncAgentOutputSchema>
  & z.output<typeof AwsDatasyncAgentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_agent

export function AwsDatasyncAgent(props: Partial<AwsDatasyncAgentInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_agent'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncAgentInputSchema}
      _outputSchema={AwsDatasyncAgentOutputSchema}
      _importSchema={AwsDatasyncAgentImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncAgent = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncAgentOutputProps>(
    AwsDatasyncAgent,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncAgents = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncAgentOutputProps>(
    AwsDatasyncAgent,
    idFilter,
    baseNode,
    optional,
  )
