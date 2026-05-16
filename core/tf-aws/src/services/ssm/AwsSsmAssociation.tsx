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

export const AwsSsmAssociationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  apply_only_at_cron_interval: resolvableValue(z.boolean().optional()),
  association_name: resolvableValue(z.string().optional()),
  automation_target_parameter_name: resolvableValue(z.string().optional()),
  calendar_names: resolvableValue(z.string().array().optional()),
  compliance_severity: resolvableValue(z.string().optional()),
  document_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  max_concurrency: resolvableValue(z.string().optional()),
  max_errors: resolvableValue(z.string().optional()),
  output_location: resolvableValue(
    z.object({
      s3_bucket_name: z.string(),
      s3_key_prefix: z.string().optional(),
      s3_region: z.string().optional(),
    }).optional(),
  ),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  schedule_expression: resolvableValue(z.string().optional()),
  sync_compliance: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  targets: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  wait_for_success_timeout_seconds: resolvableValue(z.number().optional()),
})

export const AwsSsmAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  association_id: z.string().optional(),
  name: z.string().optional(),
  parameters: z.record(z.string(), z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSsmAssociationImportSchema = z.object({
  association_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsmAssociationInputProps =
  & z.input<typeof AwsSsmAssociationInputSchema>
  & z.input<typeof AwsSsmAssociationImportSchema>
  & NodeProps

export type AwsSsmAssociationOutputProps =
  & z.output<typeof AwsSsmAssociationOutputSchema>
  & z.output<typeof AwsSsmAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_association

export function AwsSsmAssociation(props: Partial<AwsSsmAssociationInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmAssociationInputSchema}
      _outputSchema={AwsSsmAssociationOutputSchema}
      _importSchema={AwsSsmAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmAssociationOutputProps>(
    AwsSsmAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmAssociationOutputProps>(
    AwsSsmAssociation,
    idFilter,
    baseNode,
    optional,
  )
