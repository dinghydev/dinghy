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

export const AwsAppintegrationsDataIntegrationInputSchema = TfMetaSchema.extend(
  {
    kms_key: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    schedule_config: resolvableValue(z.object({
      first_execution_from: z.string(),
      object: z.string(),
      schedule_expression: z.string(),
    })),
    source_uri: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  },
)

export const AwsAppintegrationsDataIntegrationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppintegrationsDataIntegrationInputProps =
  & z.input<typeof AwsAppintegrationsDataIntegrationInputSchema>
  & NodeProps

export type AwsAppintegrationsDataIntegrationOutputProps =
  & z.output<typeof AwsAppintegrationsDataIntegrationOutputSchema>
  & z.output<typeof AwsAppintegrationsDataIntegrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appintegrations_data_integration

export function AwsAppintegrationsDataIntegration(
  props: Partial<AwsAppintegrationsDataIntegrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appintegrations_data_integration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppintegrationsDataIntegrationInputSchema}
      _outputSchema={AwsAppintegrationsDataIntegrationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppintegrationsDataIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppintegrationsDataIntegrationOutputProps>(
    AwsAppintegrationsDataIntegration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppintegrationsDataIntegrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppintegrationsDataIntegrationOutputProps>(
    AwsAppintegrationsDataIntegration,
    idFilter,
    baseNode,
    optional,
  )
