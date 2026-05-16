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

export const AwsXrayEncryptionConfigInputSchema = TfMetaSchema.extend({
  type: resolvableValue(z.string()),
  key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsXrayEncryptionConfigOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsXrayEncryptionConfigInputProps =
  & z.input<typeof AwsXrayEncryptionConfigInputSchema>
  & NodeProps

export type AwsXrayEncryptionConfigOutputProps =
  & z.output<typeof AwsXrayEncryptionConfigOutputSchema>
  & z.output<typeof AwsXrayEncryptionConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/xray_encryption_config

export function AwsXrayEncryptionConfig(
  props: Partial<AwsXrayEncryptionConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_xray_encryption_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsXrayEncryptionConfigInputSchema}
      _outputSchema={AwsXrayEncryptionConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsXrayEncryptionConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsXrayEncryptionConfigOutputProps>(
    AwsXrayEncryptionConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsXrayEncryptionConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsXrayEncryptionConfigOutputProps>(
    AwsXrayEncryptionConfig,
    idFilter,
    baseNode,
    optional,
  )
