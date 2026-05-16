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

export const AwsApprunnerDeploymentInputSchema = TfMetaSchema.extend({
  service_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsApprunnerDeploymentOutputSchema = z.object({
  id: z.string().optional(),
  operation_id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsApprunnerDeploymentInputProps =
  & z.input<typeof AwsApprunnerDeploymentInputSchema>
  & NodeProps

export type AwsApprunnerDeploymentOutputProps =
  & z.output<typeof AwsApprunnerDeploymentOutputSchema>
  & z.output<typeof AwsApprunnerDeploymentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_deployment

export function AwsApprunnerDeployment(
  props: Partial<AwsApprunnerDeploymentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_deployment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerDeploymentInputSchema}
      _outputSchema={AwsApprunnerDeploymentOutputSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerDeployment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerDeploymentOutputProps>(
    AwsApprunnerDeployment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerDeployments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerDeploymentOutputProps>(
    AwsApprunnerDeployment,
    idFilter,
    baseNode,
    optional,
  )
