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

export const InputSchema = TfMetaSchema.extend({
  capability_name: resolvableValue(z.string()),
  cluster_name: resolvableValue(z.string()),
  delete_propagation_policy: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      argo_cd: z.object({
        namespace: z.string().optional(),
        server_url: z.string().optional(),
        aws_idc: z.object({
          idc_instance_arn: z.string(),
          idc_managed_application_arn: z.string().optional(),
          idc_region: z.string().optional(),
        }).array().optional(),
        network_access: z.object({
          vpce_ids: z.string().array().optional(),
        }).array().optional(),
        rbac_role_mapping: z.object({
          role: z.string(),
          identity: z.object({
            id: z.string(),
            type: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
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
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_capability

export function AwsEksCapability(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_capability'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksCapability = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEksCapability, idFilter, baseNode, optional)

export const useAwsEksCapabilitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEksCapability, idFilter, baseNode, optional)
