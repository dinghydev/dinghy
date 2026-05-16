import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsImagebuilderComponentsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsImagebuilderComponentsOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsImagebuilderComponentsInputProps =
  & z.input<typeof DataAwsImagebuilderComponentsInputSchema>
  & NodeProps

export type DataAwsImagebuilderComponentsOutputProps =
  & z.output<typeof DataAwsImagebuilderComponentsOutputSchema>
  & z.output<typeof DataAwsImagebuilderComponentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_components

export function DataAwsImagebuilderComponents(
  props: Partial<DataAwsImagebuilderComponentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_components'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderComponentsInputSchema}
      _outputSchema={DataAwsImagebuilderComponentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsImagebuilderComponentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderComponentsOutputProps>(
    DataAwsImagebuilderComponents,
    idFilter,
    baseNode,
    optional,
  )
