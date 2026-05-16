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

export const AwsRdsIntegrationInputSchema = TfMetaSchema.extend({
  integration_name: resolvableValue(z.string()),
  source_arn: resolvableValue(z.string()),
  target_arn: resolvableValue(z.string()),
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  data_filter: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRdsIntegrationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  integration_identifier: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsRdsIntegrationImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsRdsIntegrationInputProps =
  & z.input<typeof AwsRdsIntegrationInputSchema>
  & z.input<typeof AwsRdsIntegrationImportSchema>
  & NodeProps

export type AwsRdsIntegrationOutputProps =
  & z.output<typeof AwsRdsIntegrationOutputSchema>
  & z.output<typeof AwsRdsIntegrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rds_integration

export function AwsRdsIntegration(props: Partial<AwsRdsIntegrationInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_integration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRdsIntegrationInputSchema}
      _outputSchema={AwsRdsIntegrationOutputSchema}
      _importSchema={AwsRdsIntegrationImportSchema}
      {...props}
    />
  )
}

export const useAwsRdsIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRdsIntegrationOutputProps>(
    AwsRdsIntegration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsIntegrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRdsIntegrationOutputProps>(
    AwsRdsIntegration,
    idFilter,
    baseNode,
    optional,
  )
