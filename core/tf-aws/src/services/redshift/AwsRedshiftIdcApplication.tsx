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
  iam_role_arn: resolvableValue(z.string()),
  idc_display_name: resolvableValue(z.string()),
  idc_instance_arn: resolvableValue(z.string()),
  redshift_idc_application_name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  idc_managed_application_arn: z.string().optional(),
  redshift_idc_application_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/redshift_idc_application

export function AwsRedshiftIdcApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_idc_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftIdcApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsRedshiftIdcApplication,
    idFilter,
    baseNode,
    optional,
  )
