import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsDbInstancesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsDbInstancesOutputSchema = z.object({
  instance_arns: z.string().array().optional(),
  instance_identifiers: z.string().array().optional(),
})

export type DataAwsDbInstancesInputProps =
  & z.input<typeof DataAwsDbInstancesInputSchema>
  & NodeProps

export type DataAwsDbInstancesOutputProps =
  & z.output<typeof DataAwsDbInstancesOutputSchema>
  & z.output<typeof DataAwsDbInstancesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/db_instances

export function DataAwsDbInstances(
  props: Partial<DataAwsDbInstancesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_instances'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDbInstancesInputSchema}
      _outputSchema={DataAwsDbInstancesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDbInstancess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDbInstancesOutputProps>(
    DataAwsDbInstances,
    idFilter,
    baseNode,
    optional,
  )
