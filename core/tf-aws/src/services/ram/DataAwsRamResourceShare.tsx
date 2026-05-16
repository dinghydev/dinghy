import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRamResourceShare } from './AwsRamResourceShare.tsx'

export const DataAwsRamResourceShareInputSchema = TfMetaSchema.extend({
  resource_owner: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_share_status: resolvableValue(z.string().optional()),
})

export const DataAwsRamResourceShareOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owning_account_id: z.string().optional(),
  resource_arns: z.string().array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsRamResourceShareInputProps =
  & z.input<typeof DataAwsRamResourceShareInputSchema>
  & NodeProps

export type DataAwsRamResourceShareOutputProps =
  & z.output<typeof DataAwsRamResourceShareOutputSchema>
  & z.output<typeof DataAwsRamResourceShareInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ram_resource_share

export function DataAwsRamResourceShare(
  props: Partial<DataAwsRamResourceShareInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRamResourceShare
      _type='aws_ram_resource_share'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRamResourceShareInputSchema}
      _outputSchema={DataAwsRamResourceShareOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRamResourceShare = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRamResourceShareOutputProps>(
    DataAwsRamResourceShare,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRamResourceShares = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRamResourceShareOutputProps>(
    DataAwsRamResourceShare,
    idFilter,
    baseNode,
    optional,
  )
