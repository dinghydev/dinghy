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

export const AwsWorkspaceswebSessionLoggerAssociationInputSchema = TfMetaSchema
  .extend({
    portal_arn: resolvableValue(z.string()),
    session_logger_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebSessionLoggerAssociationOutputSchema = z.object({})

export type AwsWorkspaceswebSessionLoggerAssociationInputProps =
  & z.input<typeof AwsWorkspaceswebSessionLoggerAssociationInputSchema>
  & NodeProps

export type AwsWorkspaceswebSessionLoggerAssociationOutputProps =
  & z.output<typeof AwsWorkspaceswebSessionLoggerAssociationOutputSchema>
  & z.output<typeof AwsWorkspaceswebSessionLoggerAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_session_logger_association

export function AwsWorkspaceswebSessionLoggerAssociation(
  props: Partial<AwsWorkspaceswebSessionLoggerAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_session_logger_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebSessionLoggerAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebSessionLoggerAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebSessionLoggerAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebSessionLoggerAssociationOutputProps>(
    AwsWorkspaceswebSessionLoggerAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebSessionLoggerAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebSessionLoggerAssociationOutputProps>(
    AwsWorkspaceswebSessionLoggerAssociation,
    idFilter,
    baseNode,
    optional,
  )
