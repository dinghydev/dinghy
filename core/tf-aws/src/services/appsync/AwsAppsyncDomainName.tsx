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
  certificate_arn: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  appsync_domain_name: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appsync_domain_name

export function AwsAppsyncDomainName(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_domain_name'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncDomainName = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsAppsyncDomainName, idFilter, baseNode, optional)

export const useAwsAppsyncDomainNames = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAppsyncDomainName, idFilter, baseNode, optional)
