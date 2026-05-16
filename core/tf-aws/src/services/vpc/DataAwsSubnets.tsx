import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSubnetsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsSubnetsOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsSubnetsInputProps =
  & z.input<typeof DataAwsSubnetsInputSchema>
  & NodeProps

export type DataAwsSubnetsOutputProps =
  & z.output<typeof DataAwsSubnetsOutputSchema>
  & z.output<typeof DataAwsSubnetsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/subnets

export function DataAwsSubnets(props: Partial<DataAwsSubnetsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_subnets'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSubnetsInputSchema}
      _outputSchema={DataAwsSubnetsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSubnetss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSubnetsOutputProps>(
    DataAwsSubnets,
    idFilter,
    baseNode,
    optional,
  )
