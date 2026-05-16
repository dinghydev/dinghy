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

export const AwsDevicefarmProjectInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  default_job_timeout_minutes: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDevicefarmProjectOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsDevicefarmProjectImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDevicefarmProjectInputProps =
  & z.input<typeof AwsDevicefarmProjectInputSchema>
  & z.input<typeof AwsDevicefarmProjectImportSchema>
  & NodeProps

export type AwsDevicefarmProjectOutputProps =
  & z.output<typeof AwsDevicefarmProjectOutputSchema>
  & z.output<typeof AwsDevicefarmProjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/devicefarm_project

export function AwsDevicefarmProject(
  props: Partial<AwsDevicefarmProjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devicefarm_project'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDevicefarmProjectInputSchema}
      _outputSchema={AwsDevicefarmProjectOutputSchema}
      _importSchema={AwsDevicefarmProjectImportSchema}
      {...props}
    />
  )
}

export const useAwsDevicefarmProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDevicefarmProjectOutputProps>(
    AwsDevicefarmProject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevicefarmProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDevicefarmProjectOutputProps>(
    AwsDevicefarmProject,
    idFilter,
    baseNode,
    optional,
  )
