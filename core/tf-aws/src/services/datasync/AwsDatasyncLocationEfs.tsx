import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsDatasyncLocationEfsInputSchema = TfMetaSchema.extend({
  ec2_config: resolvableValue(z.object({
    security_group_arns: z.string().array(),
    subnet_arn: z.string(),
  })),
  efs_file_system_arn: resolvableValue(z.string()),
  access_point_arn: resolvableValue(z.string().optional()),
  file_system_access_role_arn: resolvableValue(z.string().optional()),
  in_transit_encryption: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatasyncLocationEfsOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const AwsDatasyncLocationEfsImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncLocationEfsInputProps =
  & z.input<typeof AwsDatasyncLocationEfsInputSchema>
  & z.input<typeof AwsDatasyncLocationEfsImportSchema>
  & NodeProps

export type AwsDatasyncLocationEfsOutputProps =
  & z.output<typeof AwsDatasyncLocationEfsOutputSchema>
  & z.output<typeof AwsDatasyncLocationEfsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_efs

export function AwsDatasyncLocationEfs(
  props: Partial<AwsDatasyncLocationEfsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_efs'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationEfsInputSchema}
      _outputSchema={AwsDatasyncLocationEfsOutputSchema}
      _importSchema={AwsDatasyncLocationEfsImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationEfss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationEfsOutputProps>(
    AwsDatasyncLocationEfs,
    idFilter,
    baseNode,
    optional,
  )
