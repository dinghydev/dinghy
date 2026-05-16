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

export const AwsChimesdkvoiceVoiceProfileDomainInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    server_side_encryption_configuration: resolvableValue(z.object({
      kms_key_arn: z.string(),
    })),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsChimesdkvoiceVoiceProfileDomainOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsChimesdkvoiceVoiceProfileDomainInputProps =
  & z.input<typeof AwsChimesdkvoiceVoiceProfileDomainInputSchema>
  & NodeProps

export type AwsChimesdkvoiceVoiceProfileDomainOutputProps =
  & z.output<typeof AwsChimesdkvoiceVoiceProfileDomainOutputSchema>
  & z.output<typeof AwsChimesdkvoiceVoiceProfileDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chimesdkvoice_voice_profile_domain

export function AwsChimesdkvoiceVoiceProfileDomain(
  props: Partial<AwsChimesdkvoiceVoiceProfileDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkvoice_voice_profile_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimesdkvoiceVoiceProfileDomainInputSchema}
      _outputSchema={AwsChimesdkvoiceVoiceProfileDomainOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkvoiceVoiceProfileDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimesdkvoiceVoiceProfileDomainOutputProps>(
    AwsChimesdkvoiceVoiceProfileDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimesdkvoiceVoiceProfileDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimesdkvoiceVoiceProfileDomainOutputProps>(
    AwsChimesdkvoiceVoiceProfileDomain,
    idFilter,
    baseNode,
    optional,
  )
