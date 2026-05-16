import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueRegistry } from './AwsGlueRegistry.tsx'

export const DataAwsGlueRegistryInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsGlueRegistryOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
})

export type DataAwsGlueRegistryInputProps =
  & z.input<typeof DataAwsGlueRegistryInputSchema>
  & NodeProps

export type DataAwsGlueRegistryOutputProps =
  & z.output<typeof DataAwsGlueRegistryOutputSchema>
  & z.output<typeof DataAwsGlueRegistryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/glue_registry

export function DataAwsGlueRegistry(
  props: Partial<DataAwsGlueRegistryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGlueRegistry
      _type='aws_glue_registry'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsGlueRegistryInputSchema}
      _outputSchema={DataAwsGlueRegistryOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueRegistry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsGlueRegistryOutputProps>(
    DataAwsGlueRegistry,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsGlueRegistrys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsGlueRegistryOutputProps>(
    DataAwsGlueRegistry,
    idFilter,
    baseNode,
    optional,
  )
