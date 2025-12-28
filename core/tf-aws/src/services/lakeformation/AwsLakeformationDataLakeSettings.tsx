import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  admins: resolvableValue(z.string().array().optional()),
  allow_external_data_filtering: resolvableValue(z.boolean().optional()),
  allow_full_table_external_data_access: resolvableValue(
    z.boolean().optional(),
  ),
  authorized_session_tag_value_list: resolvableValue(
    z.string().array().optional(),
  ),
  catalog_id: resolvableValue(z.string().optional()),
  create_database_default_permissions: resolvableValue(
    z.object({
      permissions: z.string().array().optional(),
      principal: z.string().optional(),
    }).array().optional(),
  ),
  create_table_default_permissions: resolvableValue(
    z.object({
      permissions: z.string().array().optional(),
      principal: z.string().optional(),
    }).array().optional(),
  ),
  external_data_filtering_allow_list: resolvableValue(
    z.string().array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  read_only_admins: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  trusted_resource_owners: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_data_lake_settings

export function AwsLakeformationDataLakeSettings(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_data_lake_settings'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationDataLakeSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLakeformationDataLakeSettings,
    idFilter,
    baseNode,
    optional,
  )
