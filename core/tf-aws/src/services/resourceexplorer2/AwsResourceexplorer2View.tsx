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

export const AwsResourceexplorer2ViewInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  default_view: resolvableValue(z.boolean().optional()),
  filters: resolvableValue(
    z.object({
      filter_string: z.string(),
    }).array().optional(),
  ),
  included_property: resolvableValue(
    z.object({
      name: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsResourceexplorer2ViewOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsResourceexplorer2ViewImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsResourceexplorer2ViewInputProps =
  & z.input<typeof AwsResourceexplorer2ViewInputSchema>
  & z.input<typeof AwsResourceexplorer2ViewImportSchema>
  & NodeProps

export type AwsResourceexplorer2ViewOutputProps =
  & z.output<typeof AwsResourceexplorer2ViewOutputSchema>
  & z.output<typeof AwsResourceexplorer2ViewInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/resourceexplorer2_view

export function AwsResourceexplorer2View(
  props: Partial<AwsResourceexplorer2ViewInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourceexplorer2_view'
      _category='resource'
      _title={_title}
      _inputSchema={AwsResourceexplorer2ViewInputSchema}
      _outputSchema={AwsResourceexplorer2ViewOutputSchema}
      _importSchema={AwsResourceexplorer2ViewImportSchema}
      {...props}
    />
  )
}

export const useAwsResourceexplorer2View = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsResourceexplorer2ViewOutputProps>(
    AwsResourceexplorer2View,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsResourceexplorer2Views = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsResourceexplorer2ViewOutputProps>(
    AwsResourceexplorer2View,
    idFilter,
    baseNode,
    optional,
  )
