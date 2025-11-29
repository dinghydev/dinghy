import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecs_container_definition

export const InputSchema = z.object({
  container_name: resolvableValue(z.string()),
  task_definition: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  cpu: z.number().optional(),
  disable_networking: z.boolean().optional(),
  docker_labels: z.record(z.string(), z.string()).optional(),
  environment: z.record(z.string(), z.string()).optional(),
  image: z.string().optional(),
  image_digest: z.string().optional(),
  memory: z.number().optional(),
  memory_reservation: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcsContainerDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_container_definition'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcsContainerDefinition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEcsContainerDefinition, node, id)

export const useDataAwsEcsContainerDefinitions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEcsContainerDefinition, node, id)
