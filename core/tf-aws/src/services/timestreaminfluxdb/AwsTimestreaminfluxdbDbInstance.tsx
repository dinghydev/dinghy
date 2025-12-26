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

export const InputSchema = z.object({
  allocated_storage: resolvableValue(z.number()),
  bucket: resolvableValue(z.string()),
  db_instance_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  organization: resolvableValue(z.string()),
  password: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  vpc_security_group_ids: resolvableValue(z.string().array()),
  vpc_subnet_ids: resolvableValue(z.string().array()),
  db_parameter_group_identifier: resolvableValue(z.string().optional()),
  db_storage_type: resolvableValue(z.string().optional()),
  deployment_type: resolvableValue(z.string().optional()),
  log_delivery_configuration: resolvableValue(
    z.object({
      s3_configuration: z.object({
        bucket_name: z.string(),
        enabled: z.boolean(),
      }).array().optional(),
    }).array().optional(),
  ),
  network_type: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  influx_auth_parameters_secret_arn: z.string().optional(),
  secondary_availability_zone: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/timestreaminfluxdb_db_instance

export function AwsTimestreaminfluxdbDbInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_timestreaminfluxdb_db_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTimestreaminfluxdbDbInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsTimestreaminfluxdbDbInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTimestreaminfluxdbDbInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsTimestreaminfluxdbDbInstance,
    idFilter,
    baseNode,
    optional,
  )
