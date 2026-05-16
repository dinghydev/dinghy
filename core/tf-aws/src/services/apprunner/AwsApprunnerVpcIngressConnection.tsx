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

export const AwsApprunnerVpcIngressConnectionInputSchema = TfMetaSchema.extend({
  ingress_vpc_configuration: resolvableValue(z.object({
    vpc_endpoint_id: z.string().optional(),
    vpc_id: z.string().optional(),
  })),
  name: resolvableValue(z.string()),
  service_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApprunnerVpcIngressConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsApprunnerVpcIngressConnectionImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsApprunnerVpcIngressConnectionInputProps =
  & z.input<typeof AwsApprunnerVpcIngressConnectionInputSchema>
  & z.input<typeof AwsApprunnerVpcIngressConnectionImportSchema>
  & NodeProps

export type AwsApprunnerVpcIngressConnectionOutputProps =
  & z.output<typeof AwsApprunnerVpcIngressConnectionOutputSchema>
  & z.output<typeof AwsApprunnerVpcIngressConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_vpc_ingress_connection

export function AwsApprunnerVpcIngressConnection(
  props: Partial<AwsApprunnerVpcIngressConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_vpc_ingress_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerVpcIngressConnectionInputSchema}
      _outputSchema={AwsApprunnerVpcIngressConnectionOutputSchema}
      _importSchema={AwsApprunnerVpcIngressConnectionImportSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerVpcIngressConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerVpcIngressConnectionOutputProps>(
    AwsApprunnerVpcIngressConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerVpcIngressConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerVpcIngressConnectionOutputProps>(
    AwsApprunnerVpcIngressConnection,
    idFilter,
    baseNode,
    optional,
  )
