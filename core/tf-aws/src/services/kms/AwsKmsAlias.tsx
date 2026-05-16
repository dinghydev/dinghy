import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsKmsAliasInputSchema = TfMetaSchema.extend({
  target_key_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsKmsAliasOutputSchema = z.object({
  arn: z.string().optional(),
  target_key_arn: z.string().optional(),
})

export const AwsKmsAliasImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsKmsAliasInputProps =
  & z.input<typeof AwsKmsAliasInputSchema>
  & z.input<typeof AwsKmsAliasImportSchema>
  & NodeProps

export type AwsKmsAliasOutputProps =
  & z.output<typeof AwsKmsAliasOutputSchema>
  & z.output<typeof AwsKmsAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kms_alias

export function AwsKmsAlias(props: Partial<AwsKmsAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKmsAliasInputSchema}
      _outputSchema={AwsKmsAliasOutputSchema}
      _importSchema={AwsKmsAliasImportSchema}
      {...props}
    />
  )
}

export const useAwsKmsAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKmsAliasOutputProps>(
    AwsKmsAlias,
    idFilter,
    baseNode,
    optional,
  )
