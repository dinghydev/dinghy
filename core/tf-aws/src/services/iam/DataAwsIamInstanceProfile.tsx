import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamInstanceProfile } from './AwsIamInstanceProfile.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_instance_profile

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_date: z.string().optional(),
  path: z.string().optional(),
  role_arn: z.string().optional(),
  role_id: z.string().optional(),
  role_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamInstanceProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamInstanceProfile
      _type='aws_iam_instance_profile'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamInstanceProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamInstanceProfile, node, id)

export const useDataAwsIamInstanceProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamInstanceProfile, node, id)
