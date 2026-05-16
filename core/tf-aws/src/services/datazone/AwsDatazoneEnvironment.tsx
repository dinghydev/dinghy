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

export const AwsDatazoneEnvironmentInputSchema = TfMetaSchema.extend({
  domain_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  profile_identifier: resolvableValue(z.string()),
  project_identifier: resolvableValue(z.string()),
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
})

export const AwsDatazoneEnvironmentOutputSchema = z.object({
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
  provisioned_resources: z.object({
    name: z.string(),
    provider: z.string(),
    type: z.string(),
    value: z.string(),
  }).array().optional(),
})

export type AwsDatazoneEnvironmentInputProps =
  & z.input<typeof AwsDatazoneEnvironmentInputSchema>
  & NodeProps

export type AwsDatazoneEnvironmentOutputProps =
  & z.output<typeof AwsDatazoneEnvironmentOutputSchema>
  & z.output<typeof AwsDatazoneEnvironmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datazone_environment

export function AwsDatazoneEnvironment(
  props: Partial<AwsDatazoneEnvironmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_environment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatazoneEnvironmentInputSchema}
      _outputSchema={AwsDatazoneEnvironmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatazoneEnvironmentOutputProps>(
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
  useTypedNodes<AwsDatazoneEnvironmentOutputProps>(
    AwsDatazoneEnvironment,
    idFilter,
    baseNode,
    optional,
  )
