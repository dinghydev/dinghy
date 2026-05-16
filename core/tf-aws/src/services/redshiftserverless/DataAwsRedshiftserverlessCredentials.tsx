import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRedshiftserverlessCredentialsInputSchema = TfMetaSchema
  .extend({
    workgroup_name: resolvableValue(z.string()),
    db_name: resolvableValue(z.string().optional()),
    duration_seconds: resolvableValue(z.number().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsRedshiftserverlessCredentialsOutputSchema = z.object({
  db_password: z.string().optional(),
  db_user: z.string().optional(),
  expiration: z.string().optional(),
})

export type DataAwsRedshiftserverlessCredentialsInputProps =
  & z.input<typeof DataAwsRedshiftserverlessCredentialsInputSchema>
  & NodeProps

export type DataAwsRedshiftserverlessCredentialsOutputProps =
  & z.output<typeof DataAwsRedshiftserverlessCredentialsOutputSchema>
  & z.output<typeof DataAwsRedshiftserverlessCredentialsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/redshiftserverless_credentials

export function DataAwsRedshiftserverlessCredentials(
  props: Partial<DataAwsRedshiftserverlessCredentialsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_credentials'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRedshiftserverlessCredentialsInputSchema}
      _outputSchema={DataAwsRedshiftserverlessCredentialsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRedshiftserverlessCredentialss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRedshiftserverlessCredentialsOutputProps>(
    DataAwsRedshiftserverlessCredentials,
    idFilter,
    baseNode,
    optional,
  )
