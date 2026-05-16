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

export const DataAwsOutpostsOutpostInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  owner_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOutpostsOutpostOutputSchema = z.object({
  availability_zone: z.string().optional(),
  availability_zone_id: z.string().optional(),
  description: z.string().optional(),
  lifecycle_status: z.string().optional(),
  site_arn: z.string().optional(),
  site_id: z.string().optional(),
  supported_hardware_type: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsOutpostsOutpostInputProps =
  & z.input<typeof DataAwsOutpostsOutpostInputSchema>
  & NodeProps

export type DataAwsOutpostsOutpostOutputProps =
  & z.output<typeof DataAwsOutpostsOutpostOutputSchema>
  & z.output<typeof DataAwsOutpostsOutpostInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_outpost

export function DataAwsOutpostsOutpost(
  props: Partial<DataAwsOutpostsOutpostInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_outpost'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsOutpostInputSchema}
      _outputSchema={DataAwsOutpostsOutpostOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsOutpost = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOutpostsOutpostOutputProps>(
    DataAwsOutpostsOutpost,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOutpostsOutposts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsOutpostOutputProps>(
    DataAwsOutpostsOutpost,
    idFilter,
    baseNode,
    optional,
  )
