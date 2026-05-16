import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsRedshiftClusterIamRolesInputSchema = TfMetaSchema.extend({
  cluster_identifier: resolvableValue(z.string()),
  default_iam_role_arn: resolvableValue(z.string().optional()),
  iam_role_arns: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRedshiftClusterIamRolesOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRedshiftClusterIamRolesInputProps =
  & z.input<typeof AwsRedshiftClusterIamRolesInputSchema>
  & NodeProps

export type AwsRedshiftClusterIamRolesOutputProps =
  & z.output<typeof AwsRedshiftClusterIamRolesOutputSchema>
  & z.output<typeof AwsRedshiftClusterIamRolesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_cluster_iam_roles

export function AwsRedshiftClusterIamRoles(
  props: Partial<AwsRedshiftClusterIamRolesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_cluster_iam_roles'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftClusterIamRolesInputSchema}
      _outputSchema={AwsRedshiftClusterIamRolesOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftClusterIamRoless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftClusterIamRolesOutputProps>(
    AwsRedshiftClusterIamRoles,
    idFilter,
    baseNode,
    optional,
  )
