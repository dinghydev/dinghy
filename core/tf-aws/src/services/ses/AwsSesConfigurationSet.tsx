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

export const AwsSesConfigurationSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  delivery_options: resolvableValue(
    z.object({
      tls_policy: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  reputation_metrics_enabled: resolvableValue(z.boolean().optional()),
  sending_enabled: resolvableValue(z.boolean().optional()),
  tracking_options: resolvableValue(
    z.object({
      custom_redirect_domain: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSesConfigurationSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  last_fresh_start: z.string().optional(),
})

export type AwsSesConfigurationSetInputProps =
  & z.input<typeof AwsSesConfigurationSetInputSchema>
  & NodeProps

export type AwsSesConfigurationSetOutputProps =
  & z.output<typeof AwsSesConfigurationSetOutputSchema>
  & z.output<typeof AwsSesConfigurationSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_configuration_set

export function AwsSesConfigurationSet(
  props: Partial<AwsSesConfigurationSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_configuration_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesConfigurationSetInputSchema}
      _outputSchema={AwsSesConfigurationSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesConfigurationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesConfigurationSetOutputProps>(
    AwsSesConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesConfigurationSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesConfigurationSetOutputProps>(
    AwsSesConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )
