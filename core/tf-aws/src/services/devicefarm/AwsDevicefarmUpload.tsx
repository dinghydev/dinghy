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

export const AwsDevicefarmUploadInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  project_arn: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  content_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDevicefarmUploadOutputSchema = z.object({
  arn: z.string().optional(),
  category: z.string().optional(),
  metadata: z.string().optional(),
  url: z.string().optional(),
})

export const AwsDevicefarmUploadImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDevicefarmUploadInputProps =
  & z.input<typeof AwsDevicefarmUploadInputSchema>
  & z.input<typeof AwsDevicefarmUploadImportSchema>
  & NodeProps

export type AwsDevicefarmUploadOutputProps =
  & z.output<typeof AwsDevicefarmUploadOutputSchema>
  & z.output<typeof AwsDevicefarmUploadInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devicefarm_upload

export function AwsDevicefarmUpload(
  props: Partial<AwsDevicefarmUploadInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devicefarm_upload'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevicefarmUploadInputSchema}
      _outputSchema={AwsDevicefarmUploadOutputSchema}
      _importSchema={AwsDevicefarmUploadImportSchema}
      {...props}
    />
  )
}

export const useAwsDevicefarmUpload = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevicefarmUploadOutputProps>(
    AwsDevicefarmUpload,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevicefarmUploads = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDevicefarmUploadOutputProps>(
    AwsDevicefarmUpload,
    idFilter,
    baseNode,
    optional,
  )
