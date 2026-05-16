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

export const AwsSecretsmanagerTagInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  secret_id: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSecretsmanagerTagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSecretsmanagerTagInputProps =
  & z.input<typeof AwsSecretsmanagerTagInputSchema>
  & NodeProps

export type AwsSecretsmanagerTagOutputProps =
  & z.output<typeof AwsSecretsmanagerTagOutputSchema>
  & z.output<typeof AwsSecretsmanagerTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/secretsmanager_tag

export function AwsSecretsmanagerTag(
  props: Partial<AwsSecretsmanagerTagInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecretsmanagerTagInputSchema}
      _outputSchema={AwsSecretsmanagerTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecretsmanagerTagOutputProps>(
    AwsSecretsmanagerTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecretsmanagerTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecretsmanagerTagOutputProps>(
    AwsSecretsmanagerTag,
    idFilter,
    baseNode,
    optional,
  )
