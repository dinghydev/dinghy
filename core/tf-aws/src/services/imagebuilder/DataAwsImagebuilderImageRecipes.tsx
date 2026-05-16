import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsImagebuilderImageRecipesInputSchema = TfMetaSchema.extend({
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

export const DataAwsImagebuilderImageRecipesOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsImagebuilderImageRecipesInputProps =
  & z.input<typeof DataAwsImagebuilderImageRecipesInputSchema>
  & NodeProps

export type DataAwsImagebuilderImageRecipesOutputProps =
  & z.output<typeof DataAwsImagebuilderImageRecipesOutputSchema>
  & z.output<typeof DataAwsImagebuilderImageRecipesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_image_recipes

export function DataAwsImagebuilderImageRecipes(
  props: Partial<DataAwsImagebuilderImageRecipesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_image_recipes'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderImageRecipesInputSchema}
      _outputSchema={DataAwsImagebuilderImageRecipesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsImagebuilderImageRecipess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderImageRecipesOutputProps>(
    DataAwsImagebuilderImageRecipes,
    idFilter,
    baseNode,
    optional,
  )
