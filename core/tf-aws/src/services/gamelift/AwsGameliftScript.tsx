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

export const AwsGameliftScriptInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  storage_location: resolvableValue(
    z.object({
      bucket: z.string(),
      key: z.string(),
      object_version: z.string().optional(),
      role_arn: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  version: resolvableValue(z.string().optional()),
  zip_file: resolvableValue(z.string().optional()),
})

export const AwsGameliftScriptOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGameliftScriptInputProps =
  & z.input<typeof AwsGameliftScriptInputSchema>
  & NodeProps

export type AwsGameliftScriptOutputProps =
  & z.output<typeof AwsGameliftScriptOutputSchema>
  & z.output<typeof AwsGameliftScriptInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/gamelift_script

export function AwsGameliftScript(props: Partial<AwsGameliftScriptInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_gamelift_script'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGameliftScriptInputSchema}
      _outputSchema={AwsGameliftScriptOutputSchema}
      {...props}
    />
  )
}

export const useAwsGameliftScript = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGameliftScriptOutputProps>(
    AwsGameliftScript,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGameliftScripts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGameliftScriptOutputProps>(
    AwsGameliftScript,
    idFilter,
    baseNode,
    optional,
  )
