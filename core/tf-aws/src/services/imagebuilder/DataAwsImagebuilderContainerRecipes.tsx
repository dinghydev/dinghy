import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsImagebuilderContainerRecipesInputSchema = TfMetaSchema
  .extend({
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

export const DataAwsImagebuilderContainerRecipesOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsImagebuilderContainerRecipesInputProps =
  & z.input<typeof DataAwsImagebuilderContainerRecipesInputSchema>
  & NodeProps

export type DataAwsImagebuilderContainerRecipesOutputProps =
  & z.output<typeof DataAwsImagebuilderContainerRecipesOutputSchema>
  & z.output<typeof DataAwsImagebuilderContainerRecipesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_container_recipes

export function DataAwsImagebuilderContainerRecipes(
  props: Partial<DataAwsImagebuilderContainerRecipesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_container_recipes'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderContainerRecipesInputSchema}
      _outputSchema={DataAwsImagebuilderContainerRecipesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsImagebuilderContainerRecipess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderContainerRecipesOutputProps>(
    DataAwsImagebuilderContainerRecipes,
    idFilter,
    baseNode,
    optional,
  )
