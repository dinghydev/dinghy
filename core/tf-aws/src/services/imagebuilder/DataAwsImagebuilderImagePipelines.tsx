import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsImagebuilderImagePipelinesInputSchema = TfMetaSchema.extend(
  {
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const DataAwsImagebuilderImagePipelinesOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsImagebuilderImagePipelinesInputProps =
  & z.input<typeof DataAwsImagebuilderImagePipelinesInputSchema>
  & NodeProps

export type DataAwsImagebuilderImagePipelinesOutputProps =
  & z.output<typeof DataAwsImagebuilderImagePipelinesOutputSchema>
  & z.output<typeof DataAwsImagebuilderImagePipelinesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_image_pipelines

export function DataAwsImagebuilderImagePipelines(
  props: Partial<DataAwsImagebuilderImagePipelinesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_image_pipelines'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderImagePipelinesInputSchema}
      _outputSchema={DataAwsImagebuilderImagePipelinesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsImagebuilderImagePipeliness = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderImagePipelinesOutputProps>(
    DataAwsImagebuilderImagePipelines,
    idFilter,
    baseNode,
    optional,
  )
