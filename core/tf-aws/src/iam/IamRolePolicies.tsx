import {
  deepMerge,
  deepResolve,
  type IacNodeProps,
  loadFilesData,
  ResolvableRecordSchema,
  ResolvableStringSchema,
  Shape,
  useRenderOptions,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamRolePolicyAttachment } from './AwsIamRolePolicyAttachment.tsx'
import { AwsIamRolePolicy } from './AwsIamRolePolicy.tsx'
import { parsePolicies } from './parsePolicies.ts'
export const InputSchema = z.object({
  name: ResolvableStringSchema,
  path: ResolvableStringSchema.optional(),
  initialPolicies: ResolvableRecordSchema.optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & IacNodeProps

export function IamRolePolicies(
  { name, path, initialPolicies, ...props }: InputProps,
) {
  const { renderOptions } = useRenderOptions()
  const data = path
    ? loadFilesData(renderOptions, path as string, name as string)
    : (loadFilesData(renderOptions, 'data/iam-policy', name as string) ||
      loadFilesData(renderOptions, 'config/iam-policy', name as string))
  const policies = {}
  if (initialPolicies) {
    deepMerge(policies, initialPolicies)
  }
  if (data) {
    deepMerge(policies, data)
  }
  const { namedPolicies, inlinePolicies } = parsePolicies(policies)

  const NamedPolicies = () => {
    return (
      <Shape _direction='vertical' _name={`${name}-named-policies`}>
        {namedPolicies.map((policy) => (
          <AwsIamRolePolicyAttachment
            role={name}
            _id={`aws_iam_role_policy_attachment_${name}_${
              policy.policy_arn.split('/').pop()
            }`}
            _height={30}
            _title={policy.title}
            policy_arn={policy.policy_arn}
            key={policy.policy_arn}
          />
        ))}
      </Shape>
    )
  }

  const InlinePolicies = () => {
    return (
      <Shape _direction='vertical' _name={`${name}-inline-policies`}>
        {inlinePolicies.map((policy: any) => (
          <AwsIamRolePolicy
            _title={policy.name}
            name={policy.name}
            _id={`aws_iam_role_policy_${name}_${policy.name}`}
            role={name}
            _height={30}
            policy={(node: any) => {
              const Statement = deepResolve(node, policy, 'statements')
              return JSON.stringify({
                Version: '2012-10-17',
                Statement,
              })
            }}
            key={policy.name}
          />
        ))}
      </Shape>
    )
  }
  return (
    <Shape _direction='vertical' {...props} _name={name}>
      {namedPolicies.length > 0 && <NamedPolicies />}
      {inlinePolicies.length > 0 && <InlinePolicies />}
    </Shape>
  )
}
