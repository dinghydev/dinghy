import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsmInstancesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmInstancesOutputSchema = z.object({
  ids: z.set(z.string()).optional(),
})

export type DataAwsSsmInstancesInputProps =
  & z.input<typeof DataAwsSsmInstancesInputSchema>
  & NodeProps

export type DataAwsSsmInstancesOutputProps =
  & z.output<typeof DataAwsSsmInstancesOutputSchema>
  & z.output<typeof DataAwsSsmInstancesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssm_instances

export function DataAwsSsmInstances(
  props: Partial<DataAwsSsmInstancesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_instances'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmInstancesInputSchema}
      _outputSchema={DataAwsSsmInstancesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsmInstancess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmInstancesOutputProps>(
    DataAwsSsmInstances,
    idFilter,
    baseNode,
    optional,
  )
