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

export const AwsCodeconnectionsConnectionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  host_arn: resolvableValue(z.string().optional()),
  provider_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCodeconnectionsConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  connection_status: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCodeconnectionsConnectionImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodeconnectionsConnectionInputProps =
  & z.input<typeof AwsCodeconnectionsConnectionInputSchema>
  & z.input<typeof AwsCodeconnectionsConnectionImportSchema>
  & NodeProps

export type AwsCodeconnectionsConnectionOutputProps =
  & z.output<typeof AwsCodeconnectionsConnectionOutputSchema>
  & z.output<typeof AwsCodeconnectionsConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codeconnections_connection

export function AwsCodeconnectionsConnection(
  props: Partial<AwsCodeconnectionsConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeconnections_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodeconnectionsConnectionInputSchema}
      _outputSchema={AwsCodeconnectionsConnectionOutputSchema}
      _importSchema={AwsCodeconnectionsConnectionImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeconnectionsConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodeconnectionsConnectionOutputProps>(
    AwsCodeconnectionsConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodeconnectionsConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodeconnectionsConnectionOutputProps>(
    AwsCodeconnectionsConnection,
    idFilter,
    baseNode,
    optional,
  )
