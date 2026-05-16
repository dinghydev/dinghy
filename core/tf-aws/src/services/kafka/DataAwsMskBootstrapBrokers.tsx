import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsMskBootstrapBrokersInputSchema = TfMetaSchema.extend({
  cluster_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMskBootstrapBrokersOutputSchema = z.object({
  bootstrap_brokers: z.string().optional(),
  bootstrap_brokers_public_sasl_iam: z.string().optional(),
  bootstrap_brokers_public_sasl_scram: z.string().optional(),
  bootstrap_brokers_public_tls: z.string().optional(),
  bootstrap_brokers_sasl_iam: z.string().optional(),
  bootstrap_brokers_sasl_scram: z.string().optional(),
  bootstrap_brokers_tls: z.string().optional(),
  bootstrap_brokers_vpc_connectivity_sasl_iam: z.string().optional(),
  bootstrap_brokers_vpc_connectivity_sasl_scram: z.string().optional(),
  bootstrap_brokers_vpc_connectivity_tls: z.string().optional(),
})

export type DataAwsMskBootstrapBrokersInputProps =
  & z.input<typeof DataAwsMskBootstrapBrokersInputSchema>
  & NodeProps

export type DataAwsMskBootstrapBrokersOutputProps =
  & z.output<typeof DataAwsMskBootstrapBrokersOutputSchema>
  & z.output<typeof DataAwsMskBootstrapBrokersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/msk_bootstrap_brokers

export function DataAwsMskBootstrapBrokers(
  props: Partial<DataAwsMskBootstrapBrokersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_bootstrap_brokers'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskBootstrapBrokersInputSchema}
      _outputSchema={DataAwsMskBootstrapBrokersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMskBootstrapBrokerss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskBootstrapBrokersOutputProps>(
    DataAwsMskBootstrapBrokers,
    idFilter,
    baseNode,
    optional,
  )
