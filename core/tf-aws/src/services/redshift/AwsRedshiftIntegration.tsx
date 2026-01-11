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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/redshift_integration

export function AwsRedshiftIntegration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_integration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsRedshiftIntegration,
    idFilter,
    baseNode,
    optional,
  )
