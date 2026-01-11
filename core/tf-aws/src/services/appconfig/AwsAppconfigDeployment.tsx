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
  application_id: resolvableValue(z.string()),
  configuration_profile_id: resolvableValue(z.string()),
  configuration_version: resolvableValue(z.string()),
  deployment_strategy_id: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  kms_key_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  deployment_number: z.number().optional(),
  id: z.string().optional(),
  kms_key_arn: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appconfig_deployment

export function AwsAppconfigDeployment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_deployment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigDeployment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsAppconfigDeployment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppconfigDeployments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsAppconfigDeployment,
    idFilter,
    baseNode,
    optional,
  )
