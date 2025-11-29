import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/m2_deployment

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  application_version: resolvableValue(z.number()),
  deployment_id: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  start: resolvableValue(z.boolean()),
  force_stop: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsM2Deployment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_m2_deployment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsM2Deployment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsM2Deployment, node, id)

export const useAwsM2Deployments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsM2Deployment, node, id)
