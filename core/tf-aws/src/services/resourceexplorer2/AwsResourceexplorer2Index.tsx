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

export const AwsResourceexplorer2IndexInputSchema = TfMetaSchema.extend({
  type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsResourceexplorer2IndexOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsResourceexplorer2IndexImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsResourceexplorer2IndexInputProps =
  & z.input<typeof AwsResourceexplorer2IndexInputSchema>
  & z.input<typeof AwsResourceexplorer2IndexImportSchema>
  & NodeProps

export type AwsResourceexplorer2IndexOutputProps =
  & z.output<typeof AwsResourceexplorer2IndexOutputSchema>
  & z.output<typeof AwsResourceexplorer2IndexInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/resourceexplorer2_index

export function AwsResourceexplorer2Index(
  props: Partial<AwsResourceexplorer2IndexInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourceexplorer2_index'
      _category='resource'
      _title={_title}
      _inputSchema={AwsResourceexplorer2IndexInputSchema}
      _outputSchema={AwsResourceexplorer2IndexOutputSchema}
      _importSchema={AwsResourceexplorer2IndexImportSchema}
      {...props}
    />
  )
}

export const useAwsResourceexplorer2Index = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsResourceexplorer2IndexOutputProps>(
    AwsResourceexplorer2Index,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsResourceexplorer2Indexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsResourceexplorer2IndexOutputProps>(
    AwsResourceexplorer2Index,
    idFilter,
    baseNode,
    optional,
  )
