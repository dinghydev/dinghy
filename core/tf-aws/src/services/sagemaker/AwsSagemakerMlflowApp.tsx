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

export const AwsSagemakerMlflowAppInputSchema = TfMetaSchema.extend({
  artifact_store_uri: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  account_default_status: resolvableValue(z.string().optional()),
  default_domain_id_list: resolvableValue(z.string().array().optional()),
  model_registration_mode: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  weekly_maintenance_window_start: resolvableValue(z.string().optional()),
})

export const AwsSagemakerMlflowAppOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSagemakerMlflowAppImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSagemakerMlflowAppInputProps =
  & z.input<typeof AwsSagemakerMlflowAppInputSchema>
  & z.input<typeof AwsSagemakerMlflowAppImportSchema>
  & NodeProps

export type AwsSagemakerMlflowAppOutputProps =
  & z.output<typeof AwsSagemakerMlflowAppOutputSchema>
  & z.output<typeof AwsSagemakerMlflowAppInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app

export function AwsSagemakerMlflowApp(
  props: Partial<AwsSagemakerMlflowAppInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_mlflow_app'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerMlflowAppInputSchema}
      _outputSchema={AwsSagemakerMlflowAppOutputSchema}
      _importSchema={AwsSagemakerMlflowAppImportSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerMlflowApp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerMlflowAppOutputProps>(
    AwsSagemakerMlflowApp,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerMlflowApps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerMlflowAppOutputProps>(
    AwsSagemakerMlflowApp,
    idFilter,
    baseNode,
    optional,
  )
