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

export const DataAwsElasticBeanstalkHostedZoneInputSchema = TfMetaSchema.extend(
  {
    region: resolvableValue(z.string().optional()),
  },
)

export const DataAwsElasticBeanstalkHostedZoneOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsElasticBeanstalkHostedZoneInputProps =
  & z.input<typeof DataAwsElasticBeanstalkHostedZoneInputSchema>
  & NodeProps

export type DataAwsElasticBeanstalkHostedZoneOutputProps =
  & z.output<typeof DataAwsElasticBeanstalkHostedZoneOutputSchema>
  & z.output<typeof DataAwsElasticBeanstalkHostedZoneInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elastic_beanstalk_hosted_zone

export function DataAwsElasticBeanstalkHostedZone(
  props: Partial<DataAwsElasticBeanstalkHostedZoneInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastic_beanstalk_hosted_zone'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElasticBeanstalkHostedZoneInputSchema}
      _outputSchema={DataAwsElasticBeanstalkHostedZoneOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElasticBeanstalkHostedZone = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElasticBeanstalkHostedZoneOutputProps>(
    DataAwsElasticBeanstalkHostedZone,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticBeanstalkHostedZones = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsElasticBeanstalkHostedZoneOutputProps>(
    DataAwsElasticBeanstalkHostedZone,
    idFilter,
    baseNode,
    optional,
  )
