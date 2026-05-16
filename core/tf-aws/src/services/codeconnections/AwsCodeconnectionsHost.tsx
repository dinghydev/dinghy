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

export const AwsCodeconnectionsHostInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  provider_endpoint: resolvableValue(z.string()),
  provider_type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_configuration: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnet_ids: z.string().array(),
      tls_certificate: z.string().optional(),
      vpc_id: z.string(),
    }).array().optional(),
  ),
})

export const AwsCodeconnectionsHostOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCodeconnectionsHostImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodeconnectionsHostInputProps =
  & z.input<typeof AwsCodeconnectionsHostInputSchema>
  & z.input<typeof AwsCodeconnectionsHostImportSchema>
  & NodeProps

export type AwsCodeconnectionsHostOutputProps =
  & z.output<typeof AwsCodeconnectionsHostOutputSchema>
  & z.output<typeof AwsCodeconnectionsHostInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codeconnections_host

export function AwsCodeconnectionsHost(
  props: Partial<AwsCodeconnectionsHostInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeconnections_host'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodeconnectionsHostInputSchema}
      _outputSchema={AwsCodeconnectionsHostOutputSchema}
      _importSchema={AwsCodeconnectionsHostImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeconnectionsHost = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodeconnectionsHostOutputProps>(
    AwsCodeconnectionsHost,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodeconnectionsHosts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodeconnectionsHostOutputProps>(
    AwsCodeconnectionsHost,
    idFilter,
    baseNode,
    optional,
  )
