import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elastic_beanstalk_hosted_zone

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsElasticBeanstalkHostedZone(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_hosted_zone'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElasticBeanstalkHostedZone = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsElasticBeanstalkHostedZone, node, id)

export const useDataAwsElasticBeanstalkHostedZones = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsElasticBeanstalkHostedZone, node, id)
