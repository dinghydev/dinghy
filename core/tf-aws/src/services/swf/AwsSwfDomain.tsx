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

export const AwsSwfDomainInputSchema = TfMetaSchema.extend({
  workflow_execution_retention_period_in_days: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSwfDomainOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSwfDomainInputProps =
  & z.input<typeof AwsSwfDomainInputSchema>
  & NodeProps

export type AwsSwfDomainOutputProps =
  & z.output<typeof AwsSwfDomainOutputSchema>
  & z.output<typeof AwsSwfDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/swf_domain

export function AwsSwfDomain(props: Partial<AwsSwfDomainInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_swf_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSwfDomainInputSchema}
      _outputSchema={AwsSwfDomainOutputSchema}
      {...props}
    />
  )
}

export const useAwsSwfDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSwfDomainOutputProps>(
    AwsSwfDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSwfDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSwfDomainOutputProps>(
    AwsSwfDomain,
    idFilter,
    baseNode,
    optional,
  )
