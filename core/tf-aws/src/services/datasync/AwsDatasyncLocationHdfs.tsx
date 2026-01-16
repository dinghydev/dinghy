import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  agent_arns: resolvableValue(z.string().array()),
  name_node: resolvableValue(
    z.object({
      hostname: z.string(),
      port: z.number(),
    }).array(),
  ),
  uri: resolvableValue(z.string()),
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/datasync_location_hdfs

export function AwsDatasyncLocationHdfs(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_hdfs'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationHdfss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDatasyncLocationHdfs,
    idFilter,
    baseNode,
    optional,
  )
