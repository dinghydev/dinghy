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

export const AwsAmplifyBackendEnvironmentInputSchema = TfMetaSchema.extend({
  app_id: resolvableValue(z.string()),
  environment_name: resolvableValue(z.string()),
  deployment_artifacts: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  stack_name: resolvableValue(z.string().optional()),
})

export const AwsAmplifyBackendEnvironmentOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsAmplifyBackendEnvironmentInputProps =
  & z.input<typeof AwsAmplifyBackendEnvironmentInputSchema>
  & NodeProps

export type AwsAmplifyBackendEnvironmentOutputProps =
  & z.output<typeof AwsAmplifyBackendEnvironmentOutputSchema>
  & z.output<typeof AwsAmplifyBackendEnvironmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/amplify_backend_environment

export function AwsAmplifyBackendEnvironment(
  props: Partial<AwsAmplifyBackendEnvironmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_amplify_backend_environment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAmplifyBackendEnvironmentInputSchema}
      _outputSchema={AwsAmplifyBackendEnvironmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsAmplifyBackendEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAmplifyBackendEnvironmentOutputProps>(
    AwsAmplifyBackendEnvironment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAmplifyBackendEnvironments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAmplifyBackendEnvironmentOutputProps>(
    AwsAmplifyBackendEnvironment,
    idFilter,
    baseNode,
    optional,
  )
