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

export const AwsRedshiftLoggingInputSchema = TfMetaSchema.extend({
  cluster_identifier: resolvableValue(z.string()),
  bucket_name: resolvableValue(z.string().optional()),
  log_destination_type: resolvableValue(z.string().optional()),
  log_exports: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_key_prefix: resolvableValue(z.string().optional()),
})

export const AwsRedshiftLoggingOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRedshiftLoggingInputProps =
  & z.input<typeof AwsRedshiftLoggingInputSchema>
  & NodeProps

export type AwsRedshiftLoggingOutputProps =
  & z.output<typeof AwsRedshiftLoggingOutputSchema>
  & z.output<typeof AwsRedshiftLoggingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_logging

export function AwsRedshiftLogging(
  props: Partial<AwsRedshiftLoggingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_logging'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftLoggingInputSchema}
      _outputSchema={AwsRedshiftLoggingOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftLogging = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftLoggingOutputProps>(
    AwsRedshiftLogging,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftLoggings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftLoggingOutputProps>(
    AwsRedshiftLogging,
    idFilter,
    baseNode,
    optional,
  )
