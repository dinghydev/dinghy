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

export const AwsCodestarconnectionsConnectionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  host_arn: resolvableValue(z.string().optional()),
  provider_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCodestarconnectionsConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  connection_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCodestarconnectionsConnectionImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodestarconnectionsConnectionInputProps =
  & z.input<typeof AwsCodestarconnectionsConnectionInputSchema>
  & z.input<typeof AwsCodestarconnectionsConnectionImportSchema>
  & NodeProps

export type AwsCodestarconnectionsConnectionOutputProps =
  & z.output<typeof AwsCodestarconnectionsConnectionOutputSchema>
  & z.output<typeof AwsCodestarconnectionsConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codestarconnections_connection

export function AwsCodestarconnectionsConnection(
  props: Partial<AwsCodestarconnectionsConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codestarconnections_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodestarconnectionsConnectionInputSchema}
      _outputSchema={AwsCodestarconnectionsConnectionOutputSchema}
      _importSchema={AwsCodestarconnectionsConnectionImportSchema}
      {...props}
    />
  )
}

export const useAwsCodestarconnectionsConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodestarconnectionsConnectionOutputProps>(
    AwsCodestarconnectionsConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodestarconnectionsConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodestarconnectionsConnectionOutputProps>(
    AwsCodestarconnectionsConnection,
    idFilter,
    baseNode,
    optional,
  )
