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
  name: resolvableValue(z.string()),
  power: resolvableValue(z.string()),
  scale: resolvableValue(z.number()),
  is_disabled: resolvableValue(z.boolean().optional()),
  private_registry_access: resolvableValue(
    z.object({
      ecr_image_puller_role: z.object({
        is_active: z.boolean().optional(),
        principal_arn: z.string(),
      }).optional(),
    }).optional(),
  ),
  public_domain_names: resolvableValue(
    z.object({
      certificate: z.object({
        certificate_name: z.string(),
        domain_names: z.string().array(),
      }).array(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  power_id: z.string().optional(),
  principal_arn: z.string().optional(),
  private_domain_name: z.string().optional(),
  private_registry_access: z.object({
    ecr_image_puller_role: z.object({
      is_active: z.boolean().optional(),
      principal_arn: z.string(),
    }).optional(),
  }).optional().optional(),
  resource_type: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_container_service

export function AwsLightsailContainerService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_container_service'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailContainerService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLightsailContainerService,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailContainerServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLightsailContainerService,
    idFilter,
    baseNode,
    optional,
  )
