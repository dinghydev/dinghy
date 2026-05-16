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

export const AwsAppintegrationsEventIntegrationInputSchema = TfMetaSchema
  .extend({
    event_filter: resolvableValue(z.object({
      source: z.string(),
    })),
    eventbridge_bus: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsAppintegrationsEventIntegrationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppintegrationsEventIntegrationInputProps =
  & z.input<typeof AwsAppintegrationsEventIntegrationInputSchema>
  & NodeProps

export type AwsAppintegrationsEventIntegrationOutputProps =
  & z.output<typeof AwsAppintegrationsEventIntegrationOutputSchema>
  & z.output<typeof AwsAppintegrationsEventIntegrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appintegrations_event_integration

export function AwsAppintegrationsEventIntegration(
  props: Partial<AwsAppintegrationsEventIntegrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appintegrations_event_integration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppintegrationsEventIntegrationInputSchema}
      _outputSchema={AwsAppintegrationsEventIntegrationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppintegrationsEventIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppintegrationsEventIntegrationOutputProps>(
    AwsAppintegrationsEventIntegration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppintegrationsEventIntegrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppintegrationsEventIntegrationOutputProps>(
    AwsAppintegrationsEventIntegration,
    idFilter,
    baseNode,
    optional,
  )
