import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsQuicksightGroup } from './AwsQuicksightGroup.tsx'

export const DataAwsQuicksightGroupInputSchema = TfMetaSchema.extend({
  group_name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsQuicksightGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  principal_id: z.string().optional(),
})

export type DataAwsQuicksightGroupInputProps =
  & z.input<typeof DataAwsQuicksightGroupInputSchema>
  & NodeProps

export type DataAwsQuicksightGroupOutputProps =
  & z.output<typeof DataAwsQuicksightGroupOutputSchema>
  & z.output<typeof DataAwsQuicksightGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/quicksight_group

export function DataAwsQuicksightGroup(
  props: Partial<DataAwsQuicksightGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsQuicksightGroup
      _type='aws_quicksight_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsQuicksightGroupInputSchema}
      _outputSchema={DataAwsQuicksightGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsQuicksightGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsQuicksightGroupOutputProps>(
    DataAwsQuicksightGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsQuicksightGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsQuicksightGroupOutputProps>(
    DataAwsQuicksightGroup,
    idFilter,
    baseNode,
    optional,
  )
