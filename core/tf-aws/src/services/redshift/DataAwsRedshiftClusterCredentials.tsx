import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRedshiftClusterCredentialsInputSchema = TfMetaSchema.extend(
  {
    cluster_identifier: resolvableValue(z.string()),
    db_user: resolvableValue(z.string()),
    auto_create: resolvableValue(z.boolean().optional()),
    db_groups: resolvableValue(z.string().array().optional()),
    db_name: resolvableValue(z.string().optional()),
    duration_seconds: resolvableValue(z.number().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const DataAwsRedshiftClusterCredentialsOutputSchema = z.object({
  db_password: z.string().optional(),
  expiration: z.string().optional(),
})

export type DataAwsRedshiftClusterCredentialsInputProps =
  & z.input<typeof DataAwsRedshiftClusterCredentialsInputSchema>
  & NodeProps

export type DataAwsRedshiftClusterCredentialsOutputProps =
  & z.output<typeof DataAwsRedshiftClusterCredentialsOutputSchema>
  & z.output<typeof DataAwsRedshiftClusterCredentialsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/redshift_cluster_credentials

export function DataAwsRedshiftClusterCredentials(
  props: Partial<DataAwsRedshiftClusterCredentialsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_cluster_credentials'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRedshiftClusterCredentialsInputSchema}
      _outputSchema={DataAwsRedshiftClusterCredentialsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRedshiftClusterCredentialss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRedshiftClusterCredentialsOutputProps>(
    DataAwsRedshiftClusterCredentials,
    idFilter,
    baseNode,
    optional,
  )
