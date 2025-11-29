import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/eks_fargate_profile

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  fargate_profile_name: resolvableValue(z.string()),
  pod_execution_role_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  selector: resolvableValue(
    z.object({
      labels: z.record(z.string(), z.string()).optional(),
      namespace: z.string(),
    }).array(),
  ),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEksFargateProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_fargate_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksFargateProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEksFargateProfile, node, id)

export const useAwsEksFargateProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEksFargateProfile, node, id)
