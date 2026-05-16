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

export const AwsApprunnerVpcConnectorInputSchema = TfMetaSchema.extend({
  security_groups: resolvableValue(z.string().array()),
  subnets: resolvableValue(z.string().array()),
  vpc_connector_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApprunnerVpcConnectorOutputSchema = z.object({
  arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_connector_revision: z.number().optional(),
})

export const AwsApprunnerVpcConnectorImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsApprunnerVpcConnectorInputProps =
  & z.input<typeof AwsApprunnerVpcConnectorInputSchema>
  & z.input<typeof AwsApprunnerVpcConnectorImportSchema>
  & NodeProps

export type AwsApprunnerVpcConnectorOutputProps =
  & z.output<typeof AwsApprunnerVpcConnectorOutputSchema>
  & z.output<typeof AwsApprunnerVpcConnectorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_vpc_connector

export function AwsApprunnerVpcConnector(
  props: Partial<AwsApprunnerVpcConnectorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_vpc_connector'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerVpcConnectorInputSchema}
      _outputSchema={AwsApprunnerVpcConnectorOutputSchema}
      _importSchema={AwsApprunnerVpcConnectorImportSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerVpcConnector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerVpcConnectorOutputProps>(
    AwsApprunnerVpcConnector,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerVpcConnectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerVpcConnectorOutputProps>(
    AwsApprunnerVpcConnector,
    idFilter,
    baseNode,
    optional,
  )
