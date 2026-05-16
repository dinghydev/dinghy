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

export const AwsCodecatalystProjectInputSchema = TfMetaSchema.extend({
  display_name: resolvableValue(z.string()),
  space_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCodecatalystProjectOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
})

export type AwsCodecatalystProjectInputProps =
  & z.input<typeof AwsCodecatalystProjectInputSchema>
  & NodeProps

export type AwsCodecatalystProjectOutputProps =
  & z.output<typeof AwsCodecatalystProjectOutputSchema>
  & z.output<typeof AwsCodecatalystProjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codecatalyst_project

export function AwsCodecatalystProject(
  props: Partial<AwsCodecatalystProjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecatalyst_project'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodecatalystProjectInputSchema}
      _outputSchema={AwsCodecatalystProjectOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecatalystProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodecatalystProjectOutputProps>(
    AwsCodecatalystProject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodecatalystProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodecatalystProjectOutputProps>(
    AwsCodecatalystProject,
    idFilter,
    baseNode,
    optional,
  )
