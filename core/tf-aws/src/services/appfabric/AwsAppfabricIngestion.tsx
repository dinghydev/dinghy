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

export const AwsAppfabricIngestionInputSchema = TfMetaSchema.extend({
  app: resolvableValue(z.string()),
  app_bundle_arn: resolvableValue(z.string()),
  ingestion_type: resolvableValue(z.string()),
  tenant_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppfabricIngestionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppfabricIngestionInputProps =
  & z.input<typeof AwsAppfabricIngestionInputSchema>
  & NodeProps

export type AwsAppfabricIngestionOutputProps =
  & z.output<typeof AwsAppfabricIngestionOutputSchema>
  & z.output<typeof AwsAppfabricIngestionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appfabric_ingestion

export function AwsAppfabricIngestion(
  props: Partial<AwsAppfabricIngestionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appfabric_ingestion'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppfabricIngestionInputSchema}
      _outputSchema={AwsAppfabricIngestionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppfabricIngestion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppfabricIngestionOutputProps>(
    AwsAppfabricIngestion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppfabricIngestions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppfabricIngestionOutputProps>(
    AwsAppfabricIngestion,
    idFilter,
    baseNode,
    optional,
  )
