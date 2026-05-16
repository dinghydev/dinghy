import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsAmiIdsInputSchema = TfMetaSchema.extend({
  owners: resolvableValue(z.string().array()),
  executable_users: resolvableValue(z.string().array().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  include_deprecated: resolvableValue(z.boolean().optional()),
  name_regex: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sort_ascending: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsAmiIdsOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsAmiIdsInputProps =
  & z.input<typeof DataAwsAmiIdsInputSchema>
  & NodeProps

export type DataAwsAmiIdsOutputProps =
  & z.output<typeof DataAwsAmiIdsOutputSchema>
  & z.output<typeof DataAwsAmiIdsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ami_ids

export function DataAwsAmiIds(props: Partial<DataAwsAmiIdsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ami_ids'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAmiIdsInputSchema}
      _outputSchema={DataAwsAmiIdsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAmiIdss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAmiIdsOutputProps>(
    DataAwsAmiIds,
    idFilter,
    baseNode,
    optional,
  )
