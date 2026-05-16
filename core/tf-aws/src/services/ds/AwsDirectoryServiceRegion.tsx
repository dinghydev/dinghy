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

export const AwsDirectoryServiceRegionInputSchema = TfMetaSchema.extend({
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

export const AwsDirectoryServiceRegionOutputSchema = z.object({
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDirectoryServiceRegionInputProps =
  & z.input<typeof AwsDirectoryServiceRegionInputSchema>
  & NodeProps

export type AwsDirectoryServiceRegionOutputProps =
  & z.output<typeof AwsDirectoryServiceRegionOutputSchema>
  & z.output<typeof AwsDirectoryServiceRegionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/directory_service_region

export function AwsDirectoryServiceRegion(
  props: Partial<AwsDirectoryServiceRegionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_region'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDirectoryServiceRegionInputSchema}
      _outputSchema={AwsDirectoryServiceRegionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceRegion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDirectoryServiceRegionOutputProps>(
    AwsDirectoryServiceRegion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDirectoryServiceRegions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDirectoryServiceRegionOutputProps>(
    AwsDirectoryServiceRegion,
    idFilter,
    baseNode,
    optional,
  )
