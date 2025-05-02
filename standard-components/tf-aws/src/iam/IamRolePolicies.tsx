import {
  type IacNodeProps,
  loadFilesData,
  ResolvableRecordSchema,
  ResolvableStringSchema,
  Shape,
  useRenderOptions,
} from '@reactiac/base-components'
import z from 'zod'
import { mergician } from 'mergician'
import { AwsIamRolePolicyAttachment } from './AwsIamRolePolicyAttachment.tsx'
import { AwsIamRolePolicy } from './AwsIamRolePolicy.tsx'
import { parsePolicies } from './parsePolicies.ts'
export const InputSchema = z.object({
  name: ResolvableStringSchema,
  initialPolicies: ResolvableRecordSchema.optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & IacNodeProps

export function IamRolePolicies(
  { name, initialPolicies, ...props }: InputProps,
) {
  const { renderOptions } = useRenderOptions()
  const data = loadFilesData(renderOptions, 'config/iam-policy', name as string)
  const policies = mergician(initialPolicies || {}, data || {})
  const { namedPolicies, inlinePolicies } = parsePolicies(policies)

  const NamedPolicies = () => {
    return (
      <Shape _direction='vertical'>
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
      <Shape _direction='vertical'>
        {inlinePolicies.map((policy: any) => (
          <AwsIamRolePolicy
            _title={policy.name}
            name={policy.name}
            _id={`aws_iam_role_policy_${name}_${policy.name}`}
            role={name}
            _height={30}
            policy={JSON.stringify({
              Version: '2012-10-17',
              Statement: policy.statements,
            })}
          />
        ))}
      </Shape>
    )
  }
  return (
    <Shape _direction='vertical' {...props}>
      {namedPolicies.length > 0 && <NamedPolicies />}
      {inlinePolicies.length > 0 && <InlinePolicies />}
    </Shape>
  )
}
