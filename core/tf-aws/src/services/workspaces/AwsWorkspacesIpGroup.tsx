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

export const AwsWorkspacesIpGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rules: resolvableValue(
    z.object({
      description: z.string().optional(),
      source: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWorkspacesIpGroupOutputSchema = z.object({
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWorkspacesIpGroupInputProps =
  & z.input<typeof AwsWorkspacesIpGroupInputSchema>
  & NodeProps

export type AwsWorkspacesIpGroupOutputProps =
  & z.output<typeof AwsWorkspacesIpGroupOutputSchema>
  & z.output<typeof AwsWorkspacesIpGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspaces_ip_group

export function AwsWorkspacesIpGroup(
  props: Partial<AwsWorkspacesIpGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspaces_ip_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspacesIpGroupInputSchema}
      _outputSchema={AwsWorkspacesIpGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspacesIpGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspacesIpGroupOutputProps>(
    AwsWorkspacesIpGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspacesIpGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspacesIpGroupOutputProps>(
    AwsWorkspacesIpGroup,
    idFilter,
    baseNode,
    optional,
  )
