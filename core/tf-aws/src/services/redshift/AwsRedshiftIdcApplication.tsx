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

export const AwsRedshiftIdcApplicationInputSchema = TfMetaSchema.extend({
  iam_role_arn: resolvableValue(z.string()),
  idc_display_name: resolvableValue(z.string()),
  idc_instance_arn: resolvableValue(z.string()),
  redshift_idc_application_name: resolvableValue(z.string()),
  application_type: resolvableValue(z.string().optional()),
  authorized_token_issuer: resolvableValue(
    z.object({
      authorized_audiences_list: z.string().array().optional(),
      trusted_token_issuer_arn: z.string().optional(),
    }).array().optional(),
  ),
  identity_namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  service_integration: resolvableValue(
    z.object({
      lake_formation: z.object({
        lake_formation_query: z.object({
          authorization: z.string(),
        }).array().optional(),
      }).array().optional(),
      redshift: z.object({
        connect: z.object({
          authorization: z.string(),
        }).array().optional(),
      }).array().optional(),
      s3_access_grants: z.object({
        read_write_access: z.object({
          authorization: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRedshiftIdcApplicationOutputSchema = z.object({
  idc_managed_application_arn: z.string().optional(),
  redshift_idc_application_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftIdcApplicationInputProps =
  & z.input<typeof AwsRedshiftIdcApplicationInputSchema>
  & NodeProps

export type AwsRedshiftIdcApplicationOutputProps =
  & z.output<typeof AwsRedshiftIdcApplicationOutputSchema>
  & z.output<typeof AwsRedshiftIdcApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_idc_application

export function AwsRedshiftIdcApplication(
  props: Partial<AwsRedshiftIdcApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_idc_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftIdcApplicationInputSchema}
      _outputSchema={AwsRedshiftIdcApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftIdcApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftIdcApplicationOutputProps>(
    AwsRedshiftIdcApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftIdcApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftIdcApplicationOutputProps>(
    AwsRedshiftIdcApplication,
    idFilter,
    baseNode,
    optional,
  )
