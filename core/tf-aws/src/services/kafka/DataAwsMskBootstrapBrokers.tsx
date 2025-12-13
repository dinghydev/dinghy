import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  cluster_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/msk_bootstrap_brokers

export function DataAwsMskBootstrapBrokers(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_bootstrap_brokers'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMskBootstrapBrokerss = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsMskBootstrapBrokers, idFilter, baseNode)
