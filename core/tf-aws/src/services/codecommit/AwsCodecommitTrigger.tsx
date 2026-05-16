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

export const AwsCodecommitTriggerInputSchema = TfMetaSchema.extend({
  repository_name: resolvableValue(z.string()),
  trigger: resolvableValue(
    z.object({
      branches: z.string().array().optional(),
      custom_data: z.string().optional(),
      destination_arn: z.string(),
      events: z.string().array(),
      name: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCodecommitTriggerOutputSchema = z.object({
  configuration_id: z.string().optional(),
})

export type AwsCodecommitTriggerInputProps =
  & z.input<typeof AwsCodecommitTriggerInputSchema>
  & NodeProps

export type AwsCodecommitTriggerOutputProps =
  & z.output<typeof AwsCodecommitTriggerOutputSchema>
  & z.output<typeof AwsCodecommitTriggerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codecommit_trigger

export function AwsCodecommitTrigger(
  props: Partial<AwsCodecommitTriggerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecommit_trigger'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodecommitTriggerInputSchema}
      _outputSchema={AwsCodecommitTriggerOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecommitTrigger = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodecommitTriggerOutputProps>(
    AwsCodecommitTrigger,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodecommitTriggers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodecommitTriggerOutputProps>(
    AwsCodecommitTrigger,
    idFilter,
    baseNode,
    optional,
  )
