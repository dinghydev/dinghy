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

export const AwsEbsEncryptionByDefaultInputSchema = TfMetaSchema.extend({
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEbsEncryptionByDefaultOutputSchema = z.object({})

export type AwsEbsEncryptionByDefaultInputProps =
  & z.input<typeof AwsEbsEncryptionByDefaultInputSchema>
  & NodeProps

export type AwsEbsEncryptionByDefaultOutputProps =
  & z.output<typeof AwsEbsEncryptionByDefaultOutputSchema>
  & z.output<typeof AwsEbsEncryptionByDefaultInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_encryption_by_default

export function AwsEbsEncryptionByDefault(
  props: Partial<AwsEbsEncryptionByDefaultInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_encryption_by_default'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsEncryptionByDefaultInputSchema}
      _outputSchema={AwsEbsEncryptionByDefaultOutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsEncryptionByDefault = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEbsEncryptionByDefaultOutputProps>(
    AwsEbsEncryptionByDefault,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEbsEncryptionByDefaults = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsEncryptionByDefaultOutputProps>(
    AwsEbsEncryptionByDefault,
    idFilter,
    baseNode,
    optional,
  )
