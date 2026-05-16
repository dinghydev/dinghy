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

export const AwsDevopsguruResourceCollectionInputSchema = TfMetaSchema.extend({
  type: resolvableValue(z.string()),
  cloudformation: resolvableValue(
    z.object({
      stack_names: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(
    z.object({
      app_boundary_key: z.string(),
      tag_values: z.string().array(),
    }).array().optional(),
  ),
})

export const AwsDevopsguruResourceCollectionOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDevopsguruResourceCollectionInputProps =
  & z.input<typeof AwsDevopsguruResourceCollectionInputSchema>
  & NodeProps

export type AwsDevopsguruResourceCollectionOutputProps =
  & z.output<typeof AwsDevopsguruResourceCollectionOutputSchema>
  & z.output<typeof AwsDevopsguruResourceCollectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devopsguru_resource_collection

export function AwsDevopsguruResourceCollection(
  props: Partial<AwsDevopsguruResourceCollectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devopsguru_resource_collection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevopsguruResourceCollectionInputSchema}
      _outputSchema={AwsDevopsguruResourceCollectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDevopsguruResourceCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevopsguruResourceCollectionOutputProps>(
    AwsDevopsguruResourceCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevopsguruResourceCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDevopsguruResourceCollectionOutputProps>(
    AwsDevopsguruResourceCollection,
    idFilter,
    baseNode,
    optional,
  )
