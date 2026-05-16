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

export const AwsBcmdataexportsExportInputSchema = TfMetaSchema.extend({
  export: resolvableValue(
    z.object({
      description: z.string().optional(),
      export_arn: z.string().optional(),
      name: z.string(),
      data_query: z.object({
        query_statement: z.string(),
        table_configurations: z.record(
          z.string(),
          z.record(z.string(), z.string()),
        ).optional(),
      }).array().optional(),
      destination_configurations: z.object({
        s3_destination: z.object({
          s3_bucket: z.string(),
          s3_prefix: z.string(),
          s3_region: z.string(),
          s3_output_configurations: z.object({
            compression: z.string(),
            format: z.string(),
            output_type: z.string(),
            overwrite: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      refresh_cadence: z.object({
        frequency: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBcmdataexportsExportOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsBcmdataexportsExportImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsBcmdataexportsExportInputProps =
  & z.input<typeof AwsBcmdataexportsExportInputSchema>
  & z.input<typeof AwsBcmdataexportsExportImportSchema>
  & NodeProps

export type AwsBcmdataexportsExportOutputProps =
  & z.output<typeof AwsBcmdataexportsExportOutputSchema>
  & z.output<typeof AwsBcmdataexportsExportInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bcmdataexports_export

export function AwsBcmdataexportsExport(
  props: Partial<AwsBcmdataexportsExportInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bcmdataexports_export'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBcmdataexportsExportInputSchema}
      _outputSchema={AwsBcmdataexportsExportOutputSchema}
      _importSchema={AwsBcmdataexportsExportImportSchema}
      {...props}
    />
  )
}

export const useAwsBcmdataexportsExport = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBcmdataexportsExportOutputProps>(
    AwsBcmdataexportsExport,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBcmdataexportsExports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBcmdataexportsExportOutputProps>(
    AwsBcmdataexportsExport,
    idFilter,
    baseNode,
    optional,
  )
