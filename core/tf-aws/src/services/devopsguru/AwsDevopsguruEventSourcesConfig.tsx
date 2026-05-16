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

export const AwsDevopsguruEventSourcesConfigInputSchema = TfMetaSchema.extend({
  event_sources: resolvableValue(
    z.object({
      amazon_code_guru_profiler: z.object({
        status: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsDevopsguruEventSourcesConfigOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDevopsguruEventSourcesConfigInputProps =
  & z.input<typeof AwsDevopsguruEventSourcesConfigInputSchema>
  & NodeProps

export type AwsDevopsguruEventSourcesConfigOutputProps =
  & z.output<typeof AwsDevopsguruEventSourcesConfigOutputSchema>
  & z.output<typeof AwsDevopsguruEventSourcesConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devopsguru_event_sources_config

export function AwsDevopsguruEventSourcesConfig(
  props: Partial<AwsDevopsguruEventSourcesConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devopsguru_event_sources_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevopsguruEventSourcesConfigInputSchema}
      _outputSchema={AwsDevopsguruEventSourcesConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsDevopsguruEventSourcesConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevopsguruEventSourcesConfigOutputProps>(
    AwsDevopsguruEventSourcesConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevopsguruEventSourcesConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDevopsguruEventSourcesConfigOutputProps>(
    AwsDevopsguruEventSourcesConfig,
    idFilter,
    baseNode,
    optional,
  )
