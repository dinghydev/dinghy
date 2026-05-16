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

export const AwsWafv2ApiKeyInputSchema = TfMetaSchema.extend({
  scope: resolvableValue(z.string()),
  token_domains: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
})

export const AwsWafv2ApiKeyOutputSchema = z.object({
  api_key: z.string().optional(),
})

export type AwsWafv2ApiKeyInputProps =
  & z.input<typeof AwsWafv2ApiKeyInputSchema>
  & NodeProps

export type AwsWafv2ApiKeyOutputProps =
  & z.output<typeof AwsWafv2ApiKeyOutputSchema>
  & z.output<typeof AwsWafv2ApiKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_api_key

export function AwsWafv2ApiKey(props: Partial<AwsWafv2ApiKeyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_api_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafv2ApiKeyInputSchema}
      _outputSchema={AwsWafv2ApiKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2ApiKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafv2ApiKeyOutputProps>(
    AwsWafv2ApiKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2ApiKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafv2ApiKeyOutputProps>(
    AwsWafv2ApiKey,
    idFilter,
    baseNode,
    optional,
  )
