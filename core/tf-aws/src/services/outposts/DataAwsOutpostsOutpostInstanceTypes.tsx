import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOutpostsOutpostInstanceTypesInputSchema = TfMetaSchema
  .extend({
    arn: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOutpostsOutpostInstanceTypesOutputSchema = z.object({
  instance_types: z.set(z.string()).optional(),
})

export type DataAwsOutpostsOutpostInstanceTypesInputProps =
  & z.input<typeof DataAwsOutpostsOutpostInstanceTypesInputSchema>
  & NodeProps

export type DataAwsOutpostsOutpostInstanceTypesOutputProps =
  & z.output<typeof DataAwsOutpostsOutpostInstanceTypesOutputSchema>
  & z.output<typeof DataAwsOutpostsOutpostInstanceTypesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_outpost_instance_types

export function DataAwsOutpostsOutpostInstanceTypes(
  props: Partial<DataAwsOutpostsOutpostInstanceTypesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_outpost_instance_types'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsOutpostInstanceTypesInputSchema}
      _outputSchema={DataAwsOutpostsOutpostInstanceTypesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsOutpostInstanceTypess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsOutpostInstanceTypesOutputProps>(
    DataAwsOutpostsOutpostInstanceTypes,
    idFilter,
    baseNode,
    optional,
  )
