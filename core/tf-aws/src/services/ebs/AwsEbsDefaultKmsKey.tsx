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

export const AwsEbsDefaultKmsKeyInputSchema = TfMetaSchema.extend({
  key_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEbsDefaultKmsKeyOutputSchema = z.object({})

export type AwsEbsDefaultKmsKeyInputProps =
  & z.input<typeof AwsEbsDefaultKmsKeyInputSchema>
  & NodeProps

export type AwsEbsDefaultKmsKeyOutputProps =
  & z.output<typeof AwsEbsDefaultKmsKeyOutputSchema>
  & z.output<typeof AwsEbsDefaultKmsKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_default_kms_key

export function AwsEbsDefaultKmsKey(
  props: Partial<AwsEbsDefaultKmsKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_default_kms_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsDefaultKmsKeyInputSchema}
      _outputSchema={AwsEbsDefaultKmsKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsDefaultKmsKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEbsDefaultKmsKeyOutputProps>(
    AwsEbsDefaultKmsKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEbsDefaultKmsKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsDefaultKmsKeyOutputProps>(
    AwsEbsDefaultKmsKey,
    idFilter,
    baseNode,
    optional,
  )
