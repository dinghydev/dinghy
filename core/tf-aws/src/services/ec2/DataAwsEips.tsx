import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEipsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEipsOutputSchema = z.object({
  allocation_ids: z.string().array().optional(),
  id: z.string().optional(),
  public_ips: z.string().array().optional(),
})

export type DataAwsEipsInputProps =
  & z.input<typeof DataAwsEipsInputSchema>
  & NodeProps

export type DataAwsEipsOutputProps =
  & z.output<typeof DataAwsEipsOutputSchema>
  & z.output<typeof DataAwsEipsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eips

export function DataAwsEips(props: Partial<DataAwsEipsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eips'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEipsInputSchema}
      _outputSchema={DataAwsEipsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEipss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEipsOutputProps>(
    DataAwsEips,
    idFilter,
    baseNode,
    optional,
  )
