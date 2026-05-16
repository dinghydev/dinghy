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

export const AwsSchemasDiscovererInputSchema = TfMetaSchema.extend({
  source_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSchemasDiscovererOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSchemasDiscovererInputProps =
  & z.input<typeof AwsSchemasDiscovererInputSchema>
  & NodeProps

export type AwsSchemasDiscovererOutputProps =
  & z.output<typeof AwsSchemasDiscovererOutputSchema>
  & z.output<typeof AwsSchemasDiscovererInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/schemas_discoverer

export function AwsSchemasDiscoverer(
  props: Partial<AwsSchemasDiscovererInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_schemas_discoverer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSchemasDiscovererInputSchema}
      _outputSchema={AwsSchemasDiscovererOutputSchema}
      {...props}
    />
  )
}

export const useAwsSchemasDiscoverer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSchemasDiscovererOutputProps>(
    AwsSchemasDiscoverer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSchemasDiscoverers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSchemasDiscovererOutputProps>(
    AwsSchemasDiscoverer,
    idFilter,
    baseNode,
    optional,
  )
