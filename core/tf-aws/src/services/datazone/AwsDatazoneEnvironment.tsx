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
  domain_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  profile_identifier: resolvableValue(z.string()),
  project_identifier: resolvableValue(z.string()),
  provisioned_resources: resolvableValue(
    z.object({
      name: z.string(),
      provider: z.string(),
      type: z.string(),
      value: z.string(),
    }).array(),
  ),
  account_identifier: resolvableValue(z.string().optional()),
  account_region: resolvableValue(z.string().optional()),
  blueprint_identifier: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  glossary_terms: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_parameters: resolvableValue(
    z.object({
      name: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  id: z.string().optional(),
  last_deployment: z.object({
    deployment_id: z.string(),
    deployment_status: z.string(),
    deployment_type: z.string(),
    failure_reasons: z.object({
      code: z.string(),
      message: z.string(),
    }).array(),
    is_deployment_complete: z.boolean(),
    messages: z.string().array(),
  }).array().optional(),
  provider_environment: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/datazone_environment

export function AwsDatazoneEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_environment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDatazoneEnvironment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneEnvironments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDatazoneEnvironment,
    idFilter,
    baseNode,
    optional,
  )
