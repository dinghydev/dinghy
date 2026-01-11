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

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  source_name: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      crawler_configuration: z.object({
        role_arn: z.string(),
      }).array().optional(),
      provider_identity: z.object({
        external_id: z.string(),
        principal: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  event_classes: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  source_version: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  attributes: z.object({
    crawler_arn: z.string(),
    database_arn: z.string(),
    table_arn: z.string(),
  }).array().optional(),
  provider_details: z.object({
    location: z.string(),
    role_arn: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/securitylake_custom_log_source

export function AwsSecuritylakeCustomLogSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_custom_log_source'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeCustomLogSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSecuritylakeCustomLogSource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecuritylakeCustomLogSources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSecuritylakeCustomLogSource,
    idFilter,
    baseNode,
    optional,
  )
