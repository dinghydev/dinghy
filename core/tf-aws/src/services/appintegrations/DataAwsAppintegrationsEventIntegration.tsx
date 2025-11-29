import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppintegrationsEventIntegration } from './AwsAppintegrationsEventIntegration.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appintegrations_event_integration

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  event_filter: z.object({
    source: z.string(),
  }).array().optional(),
  eventbridge_bus: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsAppintegrationsEventIntegration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAppintegrationsEventIntegration
      _type='aws_appintegrations_event_integration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppintegrationsEventIntegration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsAppintegrationsEventIntegration, node, id)

export const useDataAwsAppintegrationsEventIntegrations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsAppintegrationsEventIntegration, node, id)
