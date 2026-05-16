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

export const AwsGrafanaRoleAssociationInputSchema = TfMetaSchema.extend({
  role: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  group_ids: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  user_ids: resolvableValue(z.string().array().optional()),
})

export const AwsGrafanaRoleAssociationOutputSchema = z.object({})

export type AwsGrafanaRoleAssociationInputProps =
  & z.input<typeof AwsGrafanaRoleAssociationInputSchema>
  & NodeProps

export type AwsGrafanaRoleAssociationOutputProps =
  & z.output<typeof AwsGrafanaRoleAssociationOutputSchema>
  & z.output<typeof AwsGrafanaRoleAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_role_association

export function AwsGrafanaRoleAssociation(
  props: Partial<AwsGrafanaRoleAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_role_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGrafanaRoleAssociationInputSchema}
      _outputSchema={AwsGrafanaRoleAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaRoleAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGrafanaRoleAssociationOutputProps>(
    AwsGrafanaRoleAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGrafanaRoleAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGrafanaRoleAssociationOutputProps>(
    AwsGrafanaRoleAssociation,
    idFilter,
    baseNode,
    optional,
  )
