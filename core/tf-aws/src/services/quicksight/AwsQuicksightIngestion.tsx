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

export const AwsQuicksightIngestionInputSchema = TfMetaSchema.extend({
  data_set_id: resolvableValue(z.string()),
  ingestion_id: resolvableValue(z.string()),
  ingestion_type: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightIngestionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ingestion_status: z.string().optional(),
})

export type AwsQuicksightIngestionInputProps =
  & z.input<typeof AwsQuicksightIngestionInputSchema>
  & NodeProps

export type AwsQuicksightIngestionOutputProps =
  & z.output<typeof AwsQuicksightIngestionOutputSchema>
  & z.output<typeof AwsQuicksightIngestionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_ingestion

export function AwsQuicksightIngestion(
  props: Partial<AwsQuicksightIngestionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_ingestion'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightIngestionInputSchema}
      _outputSchema={AwsQuicksightIngestionOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightIngestion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightIngestionOutputProps>(
    AwsQuicksightIngestion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightIngestions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightIngestionOutputProps>(
    AwsQuicksightIngestion,
    idFilter,
    baseNode,
    optional,
  )
