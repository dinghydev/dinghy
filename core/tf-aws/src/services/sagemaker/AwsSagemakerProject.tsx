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

export const AwsSagemakerProjectInputSchema = TfMetaSchema.extend({
  project_name: resolvableValue(z.string()),
  service_catalog_provisioning_details: resolvableValue(z.object({
    path_id: z.string().optional(),
    product_id: z.string(),
    provisioning_artifact_id: z.string().optional(),
    provisioning_parameter: z.object({
      key: z.string(),
      value: z.string().optional(),
    }).array().optional(),
  })),
  project_description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerProjectOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  project_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerProjectInputProps =
  & z.input<typeof AwsSagemakerProjectInputSchema>
  & NodeProps

export type AwsSagemakerProjectOutputProps =
  & z.output<typeof AwsSagemakerProjectOutputSchema>
  & z.output<typeof AwsSagemakerProjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_project

export function AwsSagemakerProject(
  props: Partial<AwsSagemakerProjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_project'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerProjectInputSchema}
      _outputSchema={AwsSagemakerProjectOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerProjectOutputProps>(
    AwsSagemakerProject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerProjectOutputProps>(
    AwsSagemakerProject,
    idFilter,
    baseNode,
    optional,
  )
