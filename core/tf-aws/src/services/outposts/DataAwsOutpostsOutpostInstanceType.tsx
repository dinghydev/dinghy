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

export const DataAwsOutpostsOutpostInstanceTypeInputSchema = TfMetaSchema
  .extend({
    arn: resolvableValue(z.string()),
    instance_type: resolvableValue(z.string().optional()),
    preferred_instance_types: resolvableValue(z.string().array().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOutpostsOutpostInstanceTypeOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsOutpostsOutpostInstanceTypeInputProps =
  & z.input<typeof DataAwsOutpostsOutpostInstanceTypeInputSchema>
  & NodeProps

export type DataAwsOutpostsOutpostInstanceTypeOutputProps =
  & z.output<typeof DataAwsOutpostsOutpostInstanceTypeOutputSchema>
  & z.output<typeof DataAwsOutpostsOutpostInstanceTypeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_outpost_instance_type

export function DataAwsOutpostsOutpostInstanceType(
  props: Partial<DataAwsOutpostsOutpostInstanceTypeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_outpost_instance_type'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsOutpostInstanceTypeInputSchema}
      _outputSchema={DataAwsOutpostsOutpostInstanceTypeOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsOutpostInstanceType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOutpostsOutpostInstanceTypeOutputProps>(
    DataAwsOutpostsOutpostInstanceType,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOutpostsOutpostInstanceTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsOutpostInstanceTypeOutputProps>(
    DataAwsOutpostsOutpostInstanceType,
    idFilter,
    baseNode,
    optional,
  )
