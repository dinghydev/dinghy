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

export const AwsDataexchangeDataSetInputSchema = TfMetaSchema.extend({
  asset_type: resolvableValue(z.string()),
  description: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDataexchangeDataSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDataexchangeDataSetInputProps =
  & z.input<typeof AwsDataexchangeDataSetInputSchema>
  & NodeProps

export type AwsDataexchangeDataSetOutputProps =
  & z.output<typeof AwsDataexchangeDataSetOutputSchema>
  & z.output<typeof AwsDataexchangeDataSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dataexchange_data_set

export function AwsDataexchangeDataSet(
  props: Partial<AwsDataexchangeDataSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dataexchange_data_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDataexchangeDataSetInputSchema}
      _outputSchema={AwsDataexchangeDataSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsDataexchangeDataSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDataexchangeDataSetOutputProps>(
    AwsDataexchangeDataSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDataexchangeDataSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDataexchangeDataSetOutputProps>(
    AwsDataexchangeDataSet,
    idFilter,
    baseNode,
    optional,
  )
