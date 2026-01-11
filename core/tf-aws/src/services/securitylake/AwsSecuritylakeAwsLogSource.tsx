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
  region: resolvableValue(z.string().optional()),
  source: resolvableValue(
    z.object({
      accounts: z.string().array().optional(),
      regions: z.string().array(),
      source_name: z.string(),
      source_version: z.string().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/securitylake_aws_log_source

export function AwsSecuritylakeAwsLogSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_aws_log_source'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeAwsLogSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSecuritylakeAwsLogSource,
    idFilter,
    baseNode,
    optional,
  )
