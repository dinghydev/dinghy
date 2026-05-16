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

export const AwsAppconfigExtensionInputSchema = TfMetaSchema.extend({
  action_point: resolvableValue(
    z.object({
      point: z.string(),
      action: z.object({
        description: z.string().optional(),
        name: z.string(),
        role_arn: z.string().optional(),
        uri: z.string(),
      }).array(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  parameter: resolvableValue(
    z.object({
      description: z.string().optional(),
      name: z.string(),
      required: z.boolean().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppconfigExtensionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  version: z.number().optional(),
})

export type AwsAppconfigExtensionInputProps =
  & z.input<typeof AwsAppconfigExtensionInputSchema>
  & NodeProps

export type AwsAppconfigExtensionOutputProps =
  & z.output<typeof AwsAppconfigExtensionOutputSchema>
  & z.output<typeof AwsAppconfigExtensionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appconfig_extension

export function AwsAppconfigExtension(
  props: Partial<AwsAppconfigExtensionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_extension'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppconfigExtensionInputSchema}
      _outputSchema={AwsAppconfigExtensionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigExtension = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppconfigExtensionOutputProps>(
    AwsAppconfigExtension,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppconfigExtensions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppconfigExtensionOutputProps>(
    AwsAppconfigExtension,
    idFilter,
    baseNode,
    optional,
  )
