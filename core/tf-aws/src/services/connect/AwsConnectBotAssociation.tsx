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

export const AwsConnectBotAssociationInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  lex_bot: resolvableValue(z.object({
    lex_region: z.string().optional(),
    name: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const AwsConnectBotAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsConnectBotAssociationInputProps =
  & z.input<typeof AwsConnectBotAssociationInputSchema>
  & NodeProps

export type AwsConnectBotAssociationOutputProps =
  & z.output<typeof AwsConnectBotAssociationOutputSchema>
  & z.output<typeof AwsConnectBotAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_bot_association

export function AwsConnectBotAssociation(
  props: Partial<AwsConnectBotAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_bot_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectBotAssociationInputSchema}
      _outputSchema={AwsConnectBotAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectBotAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectBotAssociationOutputProps>(
    AwsConnectBotAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectBotAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectBotAssociationOutputProps>(
    AwsConnectBotAssociation,
    idFilter,
    baseNode,
    optional,
  )
