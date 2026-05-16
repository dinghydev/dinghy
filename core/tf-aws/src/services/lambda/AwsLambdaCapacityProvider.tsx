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

export const AwsLambdaCapacityProviderInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  capacity_provider_scaling_config: resolvableValue(
    z.object({
      max_vcpu_count: z.number(),
      scaling_mode: z.string(),
      scaling_policies: z.object({
        predefined_metric_type: z.string(),
        target_value: z.number(),
      }).array(),
    }).array().optional(),
  ),
  instance_requirements: resolvableValue(
    z.object({
      allowed_instance_types: z.string().array(),
      architectures: z.string().array(),
      excluded_instance_types: z.string().array(),
    }).array().optional(),
  ),
  kms_key_arn: resolvableValue(z.string().optional()),
  permissions_config: resolvableValue(
    z.object({
      capacity_provider_operator_role_arn: z.string(),
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
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnet_ids: z.string().array(),
    }).array().optional(),
  ),
})

export const AwsLambdaCapacityProviderOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsLambdaCapacityProviderImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsLambdaCapacityProviderInputProps =
  & z.input<typeof AwsLambdaCapacityProviderInputSchema>
  & z.input<typeof AwsLambdaCapacityProviderImportSchema>
  & NodeProps

export type AwsLambdaCapacityProviderOutputProps =
  & z.output<typeof AwsLambdaCapacityProviderOutputSchema>
  & z.output<typeof AwsLambdaCapacityProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lambda_capacity_provider

export function AwsLambdaCapacityProvider(
  props: Partial<AwsLambdaCapacityProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_capacity_provider'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLambdaCapacityProviderInputSchema}
      _outputSchema={AwsLambdaCapacityProviderOutputSchema}
      _importSchema={AwsLambdaCapacityProviderImportSchema}
      {...props}
    />
  )
}

export const useAwsLambdaCapacityProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLambdaCapacityProviderOutputProps>(
    AwsLambdaCapacityProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaCapacityProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLambdaCapacityProviderOutputProps>(
    AwsLambdaCapacityProvider,
    idFilter,
    baseNode,
    optional,
  )
