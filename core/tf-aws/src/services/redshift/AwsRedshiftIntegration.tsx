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

export const AwsRedshiftIntegrationInputSchema = TfMetaSchema.extend({
  integration_name: resolvableValue(z.string()),
  source_arn: resolvableValue(z.string()),
  target_arn: resolvableValue(z.string()),
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  description: resolvableValue(z.string().optional()),
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

export const AwsRedshiftIntegrationOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsRedshiftIntegrationImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsRedshiftIntegrationInputProps =
  & z.input<typeof AwsRedshiftIntegrationInputSchema>
  & z.input<typeof AwsRedshiftIntegrationImportSchema>
  & NodeProps

export type AwsRedshiftIntegrationOutputProps =
  & z.output<typeof AwsRedshiftIntegrationOutputSchema>
  & z.output<typeof AwsRedshiftIntegrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_integration

export function AwsRedshiftIntegration(
  props: Partial<AwsRedshiftIntegrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_integration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftIntegrationInputSchema}
      _outputSchema={AwsRedshiftIntegrationOutputSchema}
      _importSchema={AwsRedshiftIntegrationImportSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftIntegrationOutputProps>(
    AwsRedshiftIntegration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftIntegrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftIntegrationOutputProps>(
    AwsRedshiftIntegration,
    idFilter,
    baseNode,
    optional,
  )
