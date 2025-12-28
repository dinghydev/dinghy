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
  resource_set_name: resolvableValue(z.string()),
  resource_set_type: resolvableValue(z.string()),
  resources: resolvableValue(
    z.object({
      component_id: z.string(),
      readiness_scopes: z.string().array().optional(),
      resource_arn: z.string().optional(),
      dns_target_resource: z.object({
        domain_name: z.string(),
        hosted_zone_arn: z.string().optional(),
        record_set_id: z.string().optional(),
        record_type: z.string().optional(),
        target_resource: z.object({
          nlb_resource: z.object({
            arn: z.string().optional(),
          }).optional(),
          r53_resource: z.object({
            domain_name: z.string().optional(),
            record_set_id: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53recoveryreadiness_resource_set

export function AwsRoute53recoveryreadinessResourceSet(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoveryreadiness_resource_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoveryreadinessResourceSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRoute53recoveryreadinessResourceSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoveryreadinessResourceSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRoute53recoveryreadinessResourceSet,
    idFilter,
    baseNode,
    optional,
  )
