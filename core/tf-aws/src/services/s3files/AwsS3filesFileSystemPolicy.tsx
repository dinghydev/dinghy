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

export const AwsS3filesFileSystemPolicyInputSchema = TfMetaSchema.extend({
  file_system_id: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3filesFileSystemPolicyOutputSchema = z.object({})

export const AwsS3filesFileSystemPolicyImportSchema = z.object({
  file_system_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3filesFileSystemPolicyInputProps =
  & z.input<typeof AwsS3filesFileSystemPolicyInputSchema>
  & z.input<typeof AwsS3filesFileSystemPolicyImportSchema>
  & NodeProps

export type AwsS3filesFileSystemPolicyOutputProps =
  & z.output<typeof AwsS3filesFileSystemPolicyOutputSchema>
  & z.output<typeof AwsS3filesFileSystemPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_file_system_policy

export function AwsS3filesFileSystemPolicy(
  props: Partial<AwsS3filesFileSystemPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3files_file_system_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3filesFileSystemPolicyInputSchema}
      _outputSchema={AwsS3filesFileSystemPolicyOutputSchema}
      _importSchema={AwsS3filesFileSystemPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsS3filesFileSystemPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3filesFileSystemPolicyOutputProps>(
    AwsS3filesFileSystemPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3filesFileSystemPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3filesFileSystemPolicyOutputProps>(
    AwsS3filesFileSystemPolicy,
    idFilter,
    baseNode,
    optional,
  )
