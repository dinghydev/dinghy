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

export const AwsConfigOrganizationConformancePackInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    delivery_s3_bucket: resolvableValue(z.string().optional()),
    delivery_s3_key_prefix: resolvableValue(z.string().optional()),
    excluded_accounts: resolvableValue(z.string().array().optional()),
    id: resolvableValue(z.string().optional()),
    input_parameter: resolvableValue(
      z.object({
        parameter_name: z.string(),
        parameter_value: z.string(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    template_body: resolvableValue(z.string().optional()),
    template_s3_uri: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsConfigOrganizationConformancePackOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsConfigOrganizationConformancePackImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigOrganizationConformancePackInputProps =
  & z.input<typeof AwsConfigOrganizationConformancePackInputSchema>
  & z.input<typeof AwsConfigOrganizationConformancePackImportSchema>
  & NodeProps

export type AwsConfigOrganizationConformancePackOutputProps =
  & z.output<typeof AwsConfigOrganizationConformancePackOutputSchema>
  & z.output<typeof AwsConfigOrganizationConformancePackInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_organization_conformance_pack

export function AwsConfigOrganizationConformancePack(
  props: Partial<AwsConfigOrganizationConformancePackInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_organization_conformance_pack'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigOrganizationConformancePackInputSchema}
      _outputSchema={AwsConfigOrganizationConformancePackOutputSchema}
      _importSchema={AwsConfigOrganizationConformancePackImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigOrganizationConformancePack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigOrganizationConformancePackOutputProps>(
    AwsConfigOrganizationConformancePack,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigOrganizationConformancePacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigOrganizationConformancePackOutputProps>(
    AwsConfigOrganizationConformancePack,
    idFilter,
    baseNode,
    optional,
  )
