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

export const AwsSchemasRegistryInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSchemasRegistryOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSchemasRegistryInputProps =
  & z.input<typeof AwsSchemasRegistryInputSchema>
  & NodeProps

export type AwsSchemasRegistryOutputProps =
  & z.output<typeof AwsSchemasRegistryOutputSchema>
  & z.output<typeof AwsSchemasRegistryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/schemas_registry

export function AwsSchemasRegistry(
  props: Partial<AwsSchemasRegistryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_schemas_registry'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSchemasRegistryInputSchema}
      _outputSchema={AwsSchemasRegistryOutputSchema}
      {...props}
    />
  )
}

export const useAwsSchemasRegistry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSchemasRegistryOutputProps>(
    AwsSchemasRegistry,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSchemasRegistrys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSchemasRegistryOutputProps>(
    AwsSchemasRegistry,
    idFilter,
    baseNode,
    optional,
  )
