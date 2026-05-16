import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsoadminInstancesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsoadminInstancesOutputSchema = z.object({
  arns: z.string().array().optional(),
  id: z.string().optional(),
  identity_store_ids: z.string().array().optional(),
})

export type DataAwsSsoadminInstancesInputProps =
  & z.input<typeof DataAwsSsoadminInstancesInputSchema>
  & NodeProps

export type DataAwsSsoadminInstancesOutputProps =
  & z.output<typeof DataAwsSsoadminInstancesOutputSchema>
  & z.output<typeof DataAwsSsoadminInstancesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssoadmin_instances

export function DataAwsSsoadminInstances(
  props: Partial<DataAwsSsoadminInstancesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_instances'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsoadminInstancesInputSchema}
      _outputSchema={DataAwsSsoadminInstancesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsoadminInstancess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsoadminInstancesOutputProps>(
    DataAwsSsoadminInstances,
    idFilter,
    baseNode,
    optional,
  )
