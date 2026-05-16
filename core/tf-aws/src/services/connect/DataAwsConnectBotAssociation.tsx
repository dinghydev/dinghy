import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectBotAssociation } from './AwsConnectBotAssociation.tsx'

export const DataAwsConnectBotAssociationInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  lex_bot: resolvableValue(z.object({
    lex_region: z.string().optional(),
    name: z.string(),
  })),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsConnectBotAssociationOutputSchema = z.object({})

export type DataAwsConnectBotAssociationInputProps =
  & z.input<typeof DataAwsConnectBotAssociationInputSchema>
  & NodeProps

export type DataAwsConnectBotAssociationOutputProps =
  & z.output<typeof DataAwsConnectBotAssociationOutputSchema>
  & z.output<typeof DataAwsConnectBotAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_bot_association

export function DataAwsConnectBotAssociation(
  props: Partial<DataAwsConnectBotAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectBotAssociation
      _type='aws_connect_bot_association'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectBotAssociationInputSchema}
      _outputSchema={DataAwsConnectBotAssociationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectBotAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectBotAssociationOutputProps>(
    DataAwsConnectBotAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectBotAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectBotAssociationOutputProps>(
    DataAwsConnectBotAssociation,
    idFilter,
    baseNode,
    optional,
  )
