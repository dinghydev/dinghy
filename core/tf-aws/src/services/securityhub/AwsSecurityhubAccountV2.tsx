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

export const AwsSecurityhubAccountV2InputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSecurityhubAccountV2OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSecurityhubAccountV2ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSecurityhubAccountV2InputProps =
  & z.input<typeof AwsSecurityhubAccountV2InputSchema>
  & z.input<typeof AwsSecurityhubAccountV2ImportSchema>
  & NodeProps

export type AwsSecurityhubAccountV2OutputProps =
  & z.output<typeof AwsSecurityhubAccountV2OutputSchema>
  & z.output<typeof AwsSecurityhubAccountV2InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_account_v2

export function AwsSecurityhubAccountV2(
  props: Partial<AwsSecurityhubAccountV2InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_account_v2'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubAccountV2InputSchema}
      _outputSchema={AwsSecurityhubAccountV2OutputSchema}
      _importSchema={AwsSecurityhubAccountV2ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubAccountV2 = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubAccountV2OutputProps>(
    AwsSecurityhubAccountV2,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubAccountV2s = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubAccountV2OutputProps>(
    AwsSecurityhubAccountV2,
    idFilter,
    baseNode,
    optional,
  )
