import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_dev_endpoint

export const InputSchema = z.object({
  role_arn: resolvableValue(z.string()),
  arguments: resolvableValue(z.record(z.string(), z.string()).optional()),
  extra_jars_s3_path: resolvableValue(z.string().optional()),
  extra_python_libs_s3_path: resolvableValue(z.string().optional()),
  glue_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  number_of_nodes: resolvableValue(z.number().optional()),
  number_of_workers: resolvableValue(z.number().optional()),
  public_key: resolvableValue(z.string().optional()),
  public_keys: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  security_configuration: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  worker_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  failure_reason: z.string().optional(),
  name: z.string().optional(),
  private_address: z.string().optional(),
  public_address: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
  yarn_endpoint_address: z.string().optional(),
  zeppelin_remote_spark_interpreter_port: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueDevEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_dev_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueDevEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueDevEndpoint, node, id)

export const useAwsGlueDevEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueDevEndpoint, node, id)
