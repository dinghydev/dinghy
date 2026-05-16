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

export const AwsQuicksightNamespaceInputSchema = TfMetaSchema.extend({
  namespace: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  identity_store: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsQuicksightNamespaceOutputSchema = z.object({
  arn: z.string().optional(),
  capacity_region: z.string().optional(),
  creation_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsQuicksightNamespaceInputProps =
  & z.input<typeof AwsQuicksightNamespaceInputSchema>
  & NodeProps

export type AwsQuicksightNamespaceOutputProps =
  & z.output<typeof AwsQuicksightNamespaceOutputSchema>
  & z.output<typeof AwsQuicksightNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_namespace

export function AwsQuicksightNamespace(
  props: Partial<AwsQuicksightNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightNamespaceInputSchema}
      _outputSchema={AwsQuicksightNamespaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightNamespaceOutputProps>(
    AwsQuicksightNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightNamespaceOutputProps>(
    AwsQuicksightNamespace,
    idFilter,
    baseNode,
    optional,
  )
