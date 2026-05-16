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

export const AwsEksFargateProfileInputSchema = TfMetaSchema.extend({
  cluster_name: resolvableValue(z.string()),
  fargate_profile_name: resolvableValue(z.string()),
  pod_execution_role_arn: resolvableValue(z.string()),
  selector: resolvableValue(
    z.object({
      labels: z.record(z.string(), z.string()).optional(),
      namespace: z.string(),
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEksFargateProfileOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEksFargateProfileImportSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  fargate_profile_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEksFargateProfileInputProps =
  & z.input<typeof AwsEksFargateProfileInputSchema>
  & z.input<typeof AwsEksFargateProfileImportSchema>
  & NodeProps

export type AwsEksFargateProfileOutputProps =
  & z.output<typeof AwsEksFargateProfileOutputSchema>
  & z.output<typeof AwsEksFargateProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eks_fargate_profile

export function AwsEksFargateProfile(
  props: Partial<AwsEksFargateProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_fargate_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEksFargateProfileInputSchema}
      _outputSchema={AwsEksFargateProfileOutputSchema}
      _importSchema={AwsEksFargateProfileImportSchema}
      {...props}
    />
  )
}

export const useAwsEksFargateProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEksFargateProfileOutputProps>(
    AwsEksFargateProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEksFargateProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEksFargateProfileOutputProps>(
    AwsEksFargateProfile,
    idFilter,
    baseNode,
    optional,
  )
