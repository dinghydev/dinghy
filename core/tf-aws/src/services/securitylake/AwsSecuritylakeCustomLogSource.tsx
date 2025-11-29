import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securitylake_custom_log_source

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  source_name: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      crawler_configuration: z.object({
        role_arn: z.string(),
      }).optional(),
      provider_identity: z.object({
        external_id: z.string(),
        principal: z.string(),
      }).optional(),
    }).optional(),
  ),
  event_classes: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  source_version: resolvableValue(z.string().optional()),
})

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

export function AwsSecuritylakeCustomLogSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsSecuritylakeCustomLogSource = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSecuritylakeCustomLogSource, node, id)

export const useAwsSecuritylakeCustomLogSources = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSecuritylakeCustomLogSource, node, id)
