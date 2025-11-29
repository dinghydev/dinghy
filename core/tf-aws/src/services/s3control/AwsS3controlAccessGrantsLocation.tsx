import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_access_grants_location

export const InputSchema = z.object({
  iam_role_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  location_scope: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  access_grants_location_arn: z.string().optional(),
  access_grants_location_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlAccessGrantsLocation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_access_grants_location'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlAccessGrantsLocation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3controlAccessGrantsLocation, node, id)

export const useAwsS3controlAccessGrantsLocations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3controlAccessGrantsLocation, node, id)
