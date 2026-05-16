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

export const DataAwsEcsContainerDefinitionInputSchema = TfMetaSchema.extend({
  container_name: resolvableValue(z.string()),
  task_definition: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEcsContainerDefinitionOutputSchema = z.object({
  cpu: z.number().optional(),
  disable_networking: z.boolean().optional(),
  docker_labels: z.record(z.string(), z.string()).optional(),
  environment: z.record(z.string(), z.string()).optional(),
  image: z.string().optional(),
  image_digest: z.string().optional(),
  memory: z.number().optional(),
  memory_reservation: z.number().optional(),
})

export type DataAwsEcsContainerDefinitionInputProps =
  & z.input<typeof DataAwsEcsContainerDefinitionInputSchema>
  & NodeProps

export type DataAwsEcsContainerDefinitionOutputProps =
  & z.output<typeof DataAwsEcsContainerDefinitionOutputSchema>
  & z.output<typeof DataAwsEcsContainerDefinitionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecs_container_definition

export function DataAwsEcsContainerDefinition(
  props: Partial<DataAwsEcsContainerDefinitionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_container_definition'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcsContainerDefinitionInputSchema}
      _outputSchema={DataAwsEcsContainerDefinitionOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcsContainerDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcsContainerDefinitionOutputProps>(
    DataAwsEcsContainerDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcsContainerDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcsContainerDefinitionOutputProps>(
    DataAwsEcsContainerDefinition,
    idFilter,
    baseNode,
    optional,
  )
