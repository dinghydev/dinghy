import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsLbsInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsLbsOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
})

export type DataAwsLbsInputProps =
  & z.input<typeof DataAwsLbsInputSchema>
  & NodeProps

export type DataAwsLbsOutputProps =
  & z.output<typeof DataAwsLbsOutputSchema>
  & z.output<typeof DataAwsLbsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lbs

export function DataAwsLbs(props: Partial<DataAwsLbsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lbs'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLbsInputSchema}
      _outputSchema={DataAwsLbsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsLbss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLbsOutputProps>(DataAwsLbs, idFilter, baseNode, optional)
