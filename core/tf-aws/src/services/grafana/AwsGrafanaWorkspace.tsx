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

export const InputSchema = z.object({
  account_access_type: resolvableValue(z.string()),
  authentication_providers: resolvableValue(z.string().array()),
  permission_type: resolvableValue(z.string()),
  saml_configuration_status: resolvableValue(z.string()),
  configuration: resolvableValue(z.string().optional()),
  data_sources: resolvableValue(z.string().array().optional()),
  description: resolvableValue(z.string().optional()),
  grafana_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  network_access_control: resolvableValue(
    z.object({
      prefix_list_ids: z.string().array(),
      vpce_ids: z.string().array(),
    }).optional(),
  ),
  notification_destinations: resolvableValue(z.string().array().optional()),
  organization_role_name: resolvableValue(z.string().optional()),
  organizational_units: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  stack_set_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_configuration: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnet_ids: z.string().array(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  grafana_version: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/grafana_workspace

export function AwsGrafanaWorkspace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsGrafanaWorkspace, idFilter, baseNode, optional)

export const useAwsGrafanaWorkspaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsGrafanaWorkspace, idFilter, baseNode, optional)
