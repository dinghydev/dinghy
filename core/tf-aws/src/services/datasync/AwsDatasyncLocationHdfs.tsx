import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsDatasyncLocationHdfsInputSchema = TfMetaSchema.extend({
  agent_arns: resolvableValue(z.string().array()),
  name_node: resolvableValue(
    z.object({
      hostname: z.string(),
      port: z.number(),
    }).array(),
  ),
  authentication_type: resolvableValue(z.string().optional()),
  block_size: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  kerberos_keytab: resolvableValue(z.string().optional()),
  kerberos_keytab_base64: resolvableValue(z.string().optional()),
  kerberos_krb5_conf: resolvableValue(z.string().optional()),
  kerberos_krb5_conf_base64: resolvableValue(z.string().optional()),
  kerberos_principal: resolvableValue(z.string().optional()),
  kms_key_provider_uri: resolvableValue(z.string().optional()),
  qop_configuration: resolvableValue(
    z.object({
      data_transfer_protection: z.string().optional(),
      rpc_protection: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  replication_factor: resolvableValue(z.number().optional()),
  simple_user: resolvableValue(z.string().optional()),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatasyncLocationHdfsOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const AwsDatasyncLocationHdfsImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncLocationHdfsInputProps =
  & z.input<typeof AwsDatasyncLocationHdfsInputSchema>
  & z.input<typeof AwsDatasyncLocationHdfsImportSchema>
  & NodeProps

export type AwsDatasyncLocationHdfsOutputProps =
  & z.output<typeof AwsDatasyncLocationHdfsOutputSchema>
  & z.output<typeof AwsDatasyncLocationHdfsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_hdfs

export function AwsDatasyncLocationHdfs(
  props: Partial<AwsDatasyncLocationHdfsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_hdfs'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationHdfsInputSchema}
      _outputSchema={AwsDatasyncLocationHdfsOutputSchema}
      _importSchema={AwsDatasyncLocationHdfsImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationHdfss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationHdfsOutputProps>(
    AwsDatasyncLocationHdfs,
    idFilter,
    baseNode,
    optional,
  )
