import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOutpostsOutpostsInputSchema = TfMetaSchema.extend({
  availability_zone: resolvableValue(z.string().optional()),
  availability_zone_id: resolvableValue(z.string().optional()),
  owner_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  site_id: resolvableValue(z.string().optional()),
})

export const DataAwsOutpostsOutpostsOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  id: z.string().optional(),
  ids: z.set(z.string()).optional(),
})

export type DataAwsOutpostsOutpostsInputProps =
  & z.input<typeof DataAwsOutpostsOutpostsInputSchema>
  & NodeProps

export type DataAwsOutpostsOutpostsOutputProps =
  & z.output<typeof DataAwsOutpostsOutpostsOutputSchema>
  & z.output<typeof DataAwsOutpostsOutpostsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_outposts

export function DataAwsOutpostsOutposts(
  props: Partial<DataAwsOutpostsOutpostsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_outposts'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsOutpostsInputSchema}
      _outputSchema={DataAwsOutpostsOutpostsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsOutpostss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsOutpostsOutputProps>(
    DataAwsOutpostsOutposts,
    idFilter,
    baseNode,
    optional,
  )
