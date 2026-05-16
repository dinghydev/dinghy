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

export const AwsRedshiftNamespaceRegistrationInputSchema = TfMetaSchema.extend({
  consumer_identifier: resolvableValue(z.string()),
  namespace_type: resolvableValue(z.string()),
  provisioned_cluster_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  serverless_namespace_identifier: resolvableValue(z.string().optional()),
  serverless_workgroup_identifier: resolvableValue(z.string().optional()),
})

export const AwsRedshiftNamespaceRegistrationOutputSchema = z.object({})

export const AwsRedshiftNamespaceRegistrationImportSchema = z.object({
  consumer_identifier: resolvableValue(z.string()),
  namespace_type: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  provisioned_cluster_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  serverless_namespace_identifier: resolvableValue(z.string().optional()),
  serverless_workgroup_identifier: resolvableValue(z.string().optional()),
})

export type AwsRedshiftNamespaceRegistrationInputProps =
  & z.input<typeof AwsRedshiftNamespaceRegistrationInputSchema>
  & z.input<typeof AwsRedshiftNamespaceRegistrationImportSchema>
  & NodeProps

export type AwsRedshiftNamespaceRegistrationOutputProps =
  & z.output<typeof AwsRedshiftNamespaceRegistrationOutputSchema>
  & z.output<typeof AwsRedshiftNamespaceRegistrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_namespace_registration

export function AwsRedshiftNamespaceRegistration(
  props: Partial<AwsRedshiftNamespaceRegistrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_namespace_registration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftNamespaceRegistrationInputSchema}
      _outputSchema={AwsRedshiftNamespaceRegistrationOutputSchema}
      _importSchema={AwsRedshiftNamespaceRegistrationImportSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftNamespaceRegistration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftNamespaceRegistrationOutputProps>(
    AwsRedshiftNamespaceRegistration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftNamespaceRegistrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftNamespaceRegistrationOutputProps>(
    AwsRedshiftNamespaceRegistration,
    idFilter,
    baseNode,
    optional,
  )
