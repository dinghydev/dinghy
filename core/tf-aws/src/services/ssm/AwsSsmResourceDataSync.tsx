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

export const AwsSsmResourceDataSyncInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  s3_destination: resolvableValue(z.object({
    bucket_name: z.string(),
    kms_key_arn: z.string().optional(),
    prefix: z.string().optional(),
    region: z.string(),
    sync_format: z.string().optional(),
  })),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSsmResourceDataSyncOutputSchema = z.object({})

export type AwsSsmResourceDataSyncInputProps =
  & z.input<typeof AwsSsmResourceDataSyncInputSchema>
  & NodeProps

export type AwsSsmResourceDataSyncOutputProps =
  & z.output<typeof AwsSsmResourceDataSyncOutputSchema>
  & z.output<typeof AwsSsmResourceDataSyncInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_resource_data_sync

export function AwsSsmResourceDataSync(
  props: Partial<AwsSsmResourceDataSyncInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_resource_data_sync'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmResourceDataSyncInputSchema}
      _outputSchema={AwsSsmResourceDataSyncOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmResourceDataSync = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmResourceDataSyncOutputProps>(
    AwsSsmResourceDataSync,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmResourceDataSyncs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmResourceDataSyncOutputProps>(
    AwsSsmResourceDataSync,
    idFilter,
    baseNode,
    optional,
  )
