import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_instance_access_control_attributes

export const InputSchema = z.object({
  attribute: resolvableValue(
    z.object({
      key: z.string(),
    }).array(),
  ),
  instance_arn: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
  status_reason: resolvableValue(z.string()),
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

export function AwsSsoadminInstanceAccessControlAttributes(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_instance_access_control_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminInstanceAccessControlAttributess = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsSsoadminInstanceAccessControlAttributes,
    node,
    id,
  )
