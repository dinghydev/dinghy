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

export const AwsCloudwatchQueryDefinitionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  query_string: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  log_group_names: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchQueryDefinitionOutputSchema = z.object({
  query_definition_id: z.string().optional(),
})

export type AwsCloudwatchQueryDefinitionInputProps =
  & z.input<typeof AwsCloudwatchQueryDefinitionInputSchema>
  & NodeProps

export type AwsCloudwatchQueryDefinitionOutputProps =
  & z.output<typeof AwsCloudwatchQueryDefinitionOutputSchema>
  & z.output<typeof AwsCloudwatchQueryDefinitionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_query_definition

export function AwsCloudwatchQueryDefinition(
  props: Partial<AwsCloudwatchQueryDefinitionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_query_definition'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchQueryDefinitionInputSchema}
      _outputSchema={AwsCloudwatchQueryDefinitionOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchQueryDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchQueryDefinitionOutputProps>(
    AwsCloudwatchQueryDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchQueryDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchQueryDefinitionOutputProps>(
    AwsCloudwatchQueryDefinition,
    idFilter,
    baseNode,
    optional,
  )
