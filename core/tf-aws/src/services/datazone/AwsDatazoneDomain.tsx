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

export const AwsDatazoneDomainInputSchema = TfMetaSchema.extend({
  domain_execution_role: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  domain_version: resolvableValue(z.string().optional()),
  kms_key_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  service_role: resolvableValue(z.string().optional()),
  single_sign_on: resolvableValue(
    z.object({
      type: z.string().optional(),
      user_assignment: z.string().optional(),
    }).array().optional(),
  ),
  skip_deletion_check: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDatazoneDomainOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  portal_url: z.string().optional(),
  root_domain_unit_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDatazoneDomainInputProps =
  & z.input<typeof AwsDatazoneDomainInputSchema>
  & NodeProps

export type AwsDatazoneDomainOutputProps =
  & z.output<typeof AwsDatazoneDomainOutputSchema>
  & z.output<typeof AwsDatazoneDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datazone_domain

export function AwsDatazoneDomain(props: Partial<AwsDatazoneDomainInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatazoneDomainInputSchema}
      _outputSchema={AwsDatazoneDomainOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatazoneDomainOutputProps>(
    AwsDatazoneDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatazoneDomainOutputProps>(
    AwsDatazoneDomain,
    idFilter,
    baseNode,
    optional,
  )
