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

export const AwsDevicefarmTestGridProjectInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnet_ids: z.string().array(),
      vpc_id: z.string(),
    }).optional(),
  ),
})

export const AwsDevicefarmTestGridProjectOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsDevicefarmTestGridProjectImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDevicefarmTestGridProjectInputProps =
  & z.input<typeof AwsDevicefarmTestGridProjectInputSchema>
  & z.input<typeof AwsDevicefarmTestGridProjectImportSchema>
  & NodeProps

export type AwsDevicefarmTestGridProjectOutputProps =
  & z.output<typeof AwsDevicefarmTestGridProjectOutputSchema>
  & z.output<typeof AwsDevicefarmTestGridProjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devicefarm_test_grid_project

export function AwsDevicefarmTestGridProject(
  props: Partial<AwsDevicefarmTestGridProjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devicefarm_test_grid_project'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevicefarmTestGridProjectInputSchema}
      _outputSchema={AwsDevicefarmTestGridProjectOutputSchema}
      _importSchema={AwsDevicefarmTestGridProjectImportSchema}
      {...props}
    />
  )
}

export const useAwsDevicefarmTestGridProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevicefarmTestGridProjectOutputProps>(
    AwsDevicefarmTestGridProject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevicefarmTestGridProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDevicefarmTestGridProjectOutputProps>(
    AwsDevicefarmTestGridProject,
    idFilter,
    baseNode,
    optional,
  )
