import { deepResolve, NodeProps } from '@dinghy/base-components'

import { useAwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import { AwsIamRolePolicy } from '../../services/iam/AwsIamRolePolicy.tsx'
export function IamRolePolicy(
  { policy, ...props }: NodeProps & { policy: any },
) {
  const { iamRole } = useAwsIamRole()
  const RolePolicyComponent = props._components
    ?.rolePolicy as typeof AwsIamRolePolicy ||
    AwsIamRolePolicy
  const _title = () => {
    return `${deepResolve(iamRole.name)} ${deepResolve(policy.name)}`
  }
  return (
    <RolePolicyComponent
      _title={_title}
      _name={_title}
      role={iamRole.name}
      name={policy.name}
      policy={() => {
        const Statement = deepResolve(policy.statements)
        return JSON.stringify({
          Version: '2012-10-17',
          Statement,
        })
      }}
      depends_on={() => [iamRole._terraformId]}
      {...props}
    />
  )
}
