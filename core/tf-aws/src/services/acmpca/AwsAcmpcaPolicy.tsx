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

export const AwsAcmpcaPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAcmpcaPolicyOutputSchema = z.object({})

export const AwsAcmpcaPolicyImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type AwsAcmpcaPolicyInputProps =
  & z.input<typeof AwsAcmpcaPolicyInputSchema>
  & z.input<typeof AwsAcmpcaPolicyImportSchema>
  & NodeProps

export type AwsAcmpcaPolicyOutputProps =
  & z.output<typeof AwsAcmpcaPolicyOutputSchema>
  & z.output<typeof AwsAcmpcaPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/acmpca_policy

export function AwsAcmpcaPolicy(props: Partial<AwsAcmpcaPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acmpca_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAcmpcaPolicyInputSchema}
      _outputSchema={AwsAcmpcaPolicyOutputSchema}
      _importSchema={AwsAcmpcaPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsAcmpcaPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAcmpcaPolicyOutputProps>(
    AwsAcmpcaPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAcmpcaPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAcmpcaPolicyOutputProps>(
    AwsAcmpcaPolicy,
    idFilter,
    baseNode,
    optional,
  )
