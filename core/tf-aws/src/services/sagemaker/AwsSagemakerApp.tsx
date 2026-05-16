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

export const AwsSagemakerAppInputSchema = TfMetaSchema.extend({
  app_name: resolvableValue(z.string()),
  app_type: resolvableValue(z.string()),
  domain_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  resource_spec: resolvableValue(
    z.object({
      instance_type: z.string().optional(),
      lifecycle_config_arn: z.string().optional(),
      sagemaker_image_arn: z.string().optional(),
      sagemaker_image_version_alias: z.string().optional(),
      sagemaker_image_version_arn: z.string().optional(),
    }).optional(),
  ),
  space_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_profile_name: resolvableValue(z.string().optional()),
})

export const AwsSagemakerAppOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerAppInputProps =
  & z.input<typeof AwsSagemakerAppInputSchema>
  & NodeProps

export type AwsSagemakerAppOutputProps =
  & z.output<typeof AwsSagemakerAppOutputSchema>
  & z.output<typeof AwsSagemakerAppInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_app

export function AwsSagemakerApp(props: Partial<AwsSagemakerAppInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_app'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerAppInputSchema}
      _outputSchema={AwsSagemakerAppOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerApp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerAppOutputProps>(
    AwsSagemakerApp,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerApps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerAppOutputProps>(
    AwsSagemakerApp,
    idFilter,
    baseNode,
    optional,
  )
