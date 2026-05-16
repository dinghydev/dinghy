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

export const AwsLightsailDomainInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailDomainOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsLightsailDomainInputProps =
  & z.input<typeof AwsLightsailDomainInputSchema>
  & NodeProps

export type AwsLightsailDomainOutputProps =
  & z.output<typeof AwsLightsailDomainOutputSchema>
  & z.output<typeof AwsLightsailDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_domain

export function AwsLightsailDomain(
  props: Partial<AwsLightsailDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailDomainInputSchema}
      _outputSchema={AwsLightsailDomainOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailDomainOutputProps>(
    AwsLightsailDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailDomainOutputProps>(
    AwsLightsailDomain,
    idFilter,
    baseNode,
    optional,
  )
