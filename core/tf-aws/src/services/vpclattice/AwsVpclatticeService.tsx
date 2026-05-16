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

export const AwsVpclatticeServiceInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  auth_type: resolvableValue(z.string().optional()),
  certificate_arn: resolvableValue(z.string().optional()),
  custom_domain_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpclatticeServiceOutputSchema = z.object({
  arn: z.string().optional(),
  dns_entry: z.object({
    domain_name: z.string(),
    hosted_zone_id: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpclatticeServiceInputProps =
  & z.input<typeof AwsVpclatticeServiceInputSchema>
  & NodeProps

export type AwsVpclatticeServiceOutputProps =
  & z.output<typeof AwsVpclatticeServiceOutputSchema>
  & z.output<typeof AwsVpclatticeServiceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_service

export function AwsVpclatticeService(
  props: Partial<AwsVpclatticeServiceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_service'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeServiceInputSchema}
      _outputSchema={AwsVpclatticeServiceOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeServiceOutputProps>(
    AwsVpclatticeService,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeServiceOutputProps>(
    AwsVpclatticeService,
    idFilter,
    baseNode,
    optional,
  )
