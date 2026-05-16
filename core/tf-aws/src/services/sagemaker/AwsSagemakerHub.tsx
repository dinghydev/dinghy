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

export const AwsSagemakerHubInputSchema = TfMetaSchema.extend({
  hub_description: resolvableValue(z.string()),
  hub_name: resolvableValue(z.string()),
  hub_display_name: resolvableValue(z.string().optional()),
  hub_search_keywords: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_storage_config: resolvableValue(
    z.object({
      s3_output_path: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerHubOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerHubInputProps =
  & z.input<typeof AwsSagemakerHubInputSchema>
  & NodeProps

export type AwsSagemakerHubOutputProps =
  & z.output<typeof AwsSagemakerHubOutputSchema>
  & z.output<typeof AwsSagemakerHubInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_hub

export function AwsSagemakerHub(props: Partial<AwsSagemakerHubInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_hub'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerHubInputSchema}
      _outputSchema={AwsSagemakerHubOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerHub = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerHubOutputProps>(
    AwsSagemakerHub,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerHubs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerHubOutputProps>(
    AwsSagemakerHub,
    idFilter,
    baseNode,
    optional,
  )
