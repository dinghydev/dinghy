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

export const AwsLightsailDomainEntryInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  target: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  is_alias: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailDomainEntryOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailDomainEntryInputProps =
  & z.input<typeof AwsLightsailDomainEntryInputSchema>
  & NodeProps

export type AwsLightsailDomainEntryOutputProps =
  & z.output<typeof AwsLightsailDomainEntryOutputSchema>
  & z.output<typeof AwsLightsailDomainEntryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_domain_entry

export function AwsLightsailDomainEntry(
  props: Partial<AwsLightsailDomainEntryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_domain_entry'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailDomainEntryInputSchema}
      _outputSchema={AwsLightsailDomainEntryOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDomainEntry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailDomainEntryOutputProps>(
    AwsLightsailDomainEntry,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailDomainEntrys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailDomainEntryOutputProps>(
    AwsLightsailDomainEntry,
    idFilter,
    baseNode,
    optional,
  )
