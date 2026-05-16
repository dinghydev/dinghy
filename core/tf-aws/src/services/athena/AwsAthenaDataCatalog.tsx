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

export const AwsAthenaDataCatalogInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  parameters: resolvableValue(z.record(z.string(), z.string())),
  type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAthenaDataCatalogOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsAthenaDataCatalogInputProps =
  & z.input<typeof AwsAthenaDataCatalogInputSchema>
  & NodeProps

export type AwsAthenaDataCatalogOutputProps =
  & z.output<typeof AwsAthenaDataCatalogOutputSchema>
  & z.output<typeof AwsAthenaDataCatalogInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/athena_data_catalog

export function AwsAthenaDataCatalog(
  props: Partial<AwsAthenaDataCatalogInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_data_catalog'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAthenaDataCatalogInputSchema}
      _outputSchema={AwsAthenaDataCatalogOutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaDataCatalog = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAthenaDataCatalogOutputProps>(
    AwsAthenaDataCatalog,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAthenaDataCatalogs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAthenaDataCatalogOutputProps>(
    AwsAthenaDataCatalog,
    idFilter,
    baseNode,
    optional,
  )
