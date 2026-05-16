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

export const AwsAppsyncDomainNameInputSchema = TfMetaSchema.extend({
  certificate_arn: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAppsyncDomainNameOutputSchema = z.object({
  appsync_domain_name: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsAppsyncDomainNameInputProps =
  & z.input<typeof AwsAppsyncDomainNameInputSchema>
  & NodeProps

export type AwsAppsyncDomainNameOutputProps =
  & z.output<typeof AwsAppsyncDomainNameOutputSchema>
  & z.output<typeof AwsAppsyncDomainNameInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_domain_name

export function AwsAppsyncDomainName(
  props: Partial<AwsAppsyncDomainNameInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_domain_name'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncDomainNameInputSchema}
      _outputSchema={AwsAppsyncDomainNameOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncDomainName = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncDomainNameOutputProps>(
    AwsAppsyncDomainName,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncDomainNames = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncDomainNameOutputProps>(
    AwsAppsyncDomainName,
    idFilter,
    baseNode,
    optional,
  )
