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

export const AwsRoute53QueryLogInputSchema = TfMetaSchema.extend({
  cloudwatch_log_group_arn: resolvableValue(z.string()),
  zone_id: resolvableValue(z.string()),
})

export const AwsRoute53QueryLogOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsRoute53QueryLogInputProps =
  & z.input<typeof AwsRoute53QueryLogInputSchema>
  & NodeProps

export type AwsRoute53QueryLogOutputProps =
  & z.output<typeof AwsRoute53QueryLogOutputSchema>
  & z.output<typeof AwsRoute53QueryLogInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_query_log

export function AwsRoute53QueryLog(
  props: Partial<AwsRoute53QueryLogInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_query_log'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53QueryLogInputSchema}
      _outputSchema={AwsRoute53QueryLogOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53QueryLog = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53QueryLogOutputProps>(
    AwsRoute53QueryLog,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53QueryLogs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53QueryLogOutputProps>(
    AwsRoute53QueryLog,
    idFilter,
    baseNode,
    optional,
  )
