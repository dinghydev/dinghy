import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsDatasyncLocationNfsInputSchema = TfMetaSchema.extend({
  on_prem_config: resolvableValue(z.object({
    agent_arns: z.string().array(),
  })),
  server_hostname: resolvableValue(z.string()),
  subdirectory: resolvableValue(z.string()),
  mount_options: resolvableValue(
    z.object({
      version: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatasyncLocationNfsOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const AwsDatasyncLocationNfsImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncLocationNfsInputProps =
  & z.input<typeof AwsDatasyncLocationNfsInputSchema>
  & z.input<typeof AwsDatasyncLocationNfsImportSchema>
  & NodeProps

export type AwsDatasyncLocationNfsOutputProps =
  & z.output<typeof AwsDatasyncLocationNfsOutputSchema>
  & z.output<typeof AwsDatasyncLocationNfsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_nfs

export function AwsDatasyncLocationNfs(
  props: Partial<AwsDatasyncLocationNfsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_nfs'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationNfsInputSchema}
      _outputSchema={AwsDatasyncLocationNfsOutputSchema}
      _importSchema={AwsDatasyncLocationNfsImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationNfss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationNfsOutputProps>(
    AwsDatasyncLocationNfs,
    idFilter,
    baseNode,
    optional,
  )
