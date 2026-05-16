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

export const AwsRekognitionProjectInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  auto_update: resolvableValue(z.string().optional()),
  feature: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRekognitionProjectOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRekognitionProjectInputProps =
  & z.input<typeof AwsRekognitionProjectInputSchema>
  & NodeProps

export type AwsRekognitionProjectOutputProps =
  & z.output<typeof AwsRekognitionProjectOutputSchema>
  & z.output<typeof AwsRekognitionProjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rekognition_project

export function AwsRekognitionProject(
  props: Partial<AwsRekognitionProjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rekognition_project'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRekognitionProjectInputSchema}
      _outputSchema={AwsRekognitionProjectOutputSchema}
      {...props}
    />
  )
}

export const useAwsRekognitionProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRekognitionProjectOutputProps>(
    AwsRekognitionProject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRekognitionProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRekognitionProjectOutputProps>(
    AwsRekognitionProject,
    idFilter,
    baseNode,
    optional,
  )
