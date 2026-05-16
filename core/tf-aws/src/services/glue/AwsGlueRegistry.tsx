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

export const AwsGlueRegistryInputSchema = TfMetaSchema.extend({
  registry_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGlueRegistryOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsGlueRegistryImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsGlueRegistryInputProps =
  & z.input<typeof AwsGlueRegistryInputSchema>
  & z.input<typeof AwsGlueRegistryImportSchema>
  & NodeProps

export type AwsGlueRegistryOutputProps =
  & z.output<typeof AwsGlueRegistryOutputSchema>
  & z.output<typeof AwsGlueRegistryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_registry

export function AwsGlueRegistry(props: Partial<AwsGlueRegistryInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_registry'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueRegistryInputSchema}
      _outputSchema={AwsGlueRegistryOutputSchema}
      _importSchema={AwsGlueRegistryImportSchema}
      {...props}
    />
  )
}

export const useAwsGlueRegistry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueRegistryOutputProps>(
    AwsGlueRegistry,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueRegistrys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueRegistryOutputProps>(
    AwsGlueRegistry,
    idFilter,
    baseNode,
    optional,
  )
