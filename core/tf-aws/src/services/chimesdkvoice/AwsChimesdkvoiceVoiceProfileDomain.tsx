import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chimesdkvoice_voice_profile_domain

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsChimesdkvoiceVoiceProfileDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkvoice_voice_profile_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkvoiceVoiceProfileDomain = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsChimesdkvoiceVoiceProfileDomain, node, id)

export const useAwsChimesdkvoiceVoiceProfileDomains = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsChimesdkvoiceVoiceProfileDomain, node, id)
