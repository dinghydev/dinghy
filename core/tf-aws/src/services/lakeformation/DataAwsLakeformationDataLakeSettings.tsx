import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLakeformationDataLakeSettings } from './AwsLakeformationDataLakeSettings.tsx'

export const InputSchema = z.object({
  catalog_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  admins: z.set(z.string()).optional(),
  allow_external_data_filtering: z.boolean().optional(),
  allow_full_table_external_data_access: z.boolean().optional(),
  authorized_session_tag_value_list: z.string().array().optional(),
  create_database_default_permissions: z.object({
    permissions: z.set(z.string()),
    principal: z.string(),
  }).array().optional(),
  create_table_default_permissions: z.object({
    permissions: z.set(z.string()),
    principal: z.string(),
  }).array().optional(),
  external_data_filtering_allow_list: z.set(z.string()).optional(),
  parameters: z.record(z.string(), z.string()).optional(),
  read_only_admins: z.set(z.string()).optional(),
  trusted_resource_owners: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lakeformation_data_lake_settings

export function DataAwsLakeformationDataLakeSettings(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLakeformationDataLakeSettings
      _type='aws_lakeformation_data_lake_settings'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLakeformationDataLakeSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsLakeformationDataLakeSettings,
    idFilter,
    baseNode,
    optional,
  )
