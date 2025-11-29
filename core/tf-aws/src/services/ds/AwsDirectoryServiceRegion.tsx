import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/directory_service_region

export const InputSchema = z.object({
  directory_id: resolvableValue(z.string()),
  region_name: resolvableValue(z.string()),
  vpc_settings: resolvableValue(z.object({
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  })),
  desired_number_of_domain_controllers: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDirectoryServiceRegion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_region'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceRegion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDirectoryServiceRegion, node, id)

export const useAwsDirectoryServiceRegions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDirectoryServiceRegion, node, id)
