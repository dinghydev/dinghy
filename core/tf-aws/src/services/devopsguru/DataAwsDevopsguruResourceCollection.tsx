import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDevopsguruResourceCollection } from './AwsDevopsguruResourceCollection.tsx'

export const InputSchema = z.object({
  type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  cloudformation: z.object({
    stack_names: z.string().array(),
  }).array().optional(),
  id: z.string().optional(),
  tags: z.object({
    app_boundary_key: z.string(),
    tag_values: z.string().array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/devopsguru_resource_collection

export function DataAwsDevopsguruResourceCollection(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDevopsguruResourceCollection
      _type='aws_devopsguru_resource_collection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDevopsguruResourceCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsDevopsguruResourceCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDevopsguruResourceCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsDevopsguruResourceCollection,
    idFilter,
    baseNode,
    optional,
  )
