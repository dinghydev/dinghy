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

export const AwsSecuritylakeAwsLogSourceInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  source: resolvableValue(
    z.object({
      accounts: z.string().array().optional(),
      regions: z.string().array(),
      source_name: z.string(),
      source_version: z.string().optional(),
    }).array().optional(),
  ),
})

export const AwsSecuritylakeAwsLogSourceOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSecuritylakeAwsLogSourceInputProps =
  & z.input<typeof AwsSecuritylakeAwsLogSourceInputSchema>
  & NodeProps

export type AwsSecuritylakeAwsLogSourceOutputProps =
  & z.output<typeof AwsSecuritylakeAwsLogSourceOutputSchema>
  & z.output<typeof AwsSecuritylakeAwsLogSourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securitylake_aws_log_source

export function AwsSecuritylakeAwsLogSource(
  props: Partial<AwsSecuritylakeAwsLogSourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_aws_log_source'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecuritylakeAwsLogSourceInputSchema}
      _outputSchema={AwsSecuritylakeAwsLogSourceOutputSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeAwsLogSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecuritylakeAwsLogSourceOutputProps>(
    AwsSecuritylakeAwsLogSource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecuritylakeAwsLogSources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecuritylakeAwsLogSourceOutputProps>(
    AwsSecuritylakeAwsLogSource,
    idFilter,
    baseNode,
    optional,
  )
