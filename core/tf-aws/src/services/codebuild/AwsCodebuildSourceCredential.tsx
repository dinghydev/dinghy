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

export const AwsCodebuildSourceCredentialInputSchema = TfMetaSchema.extend({
  auth_type: resolvableValue(z.string()),
  server_type: resolvableValue(z.string()),
  token: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  user_name: resolvableValue(z.string().optional()),
})

export const AwsCodebuildSourceCredentialOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const AwsCodebuildSourceCredentialImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodebuildSourceCredentialInputProps =
  & z.input<typeof AwsCodebuildSourceCredentialInputSchema>
  & z.input<typeof AwsCodebuildSourceCredentialImportSchema>
  & NodeProps

export type AwsCodebuildSourceCredentialOutputProps =
  & z.output<typeof AwsCodebuildSourceCredentialOutputSchema>
  & z.output<typeof AwsCodebuildSourceCredentialInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codebuild_source_credential

export function AwsCodebuildSourceCredential(
  props: Partial<AwsCodebuildSourceCredentialInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codebuild_source_credential'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodebuildSourceCredentialInputSchema}
      _outputSchema={AwsCodebuildSourceCredentialOutputSchema}
      _importSchema={AwsCodebuildSourceCredentialImportSchema}
      {...props}
    />
  )
}

export const useAwsCodebuildSourceCredential = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodebuildSourceCredentialOutputProps>(
    AwsCodebuildSourceCredential,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodebuildSourceCredentials = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodebuildSourceCredentialOutputProps>(
    AwsCodebuildSourceCredential,
    idFilter,
    baseNode,
    optional,
  )
