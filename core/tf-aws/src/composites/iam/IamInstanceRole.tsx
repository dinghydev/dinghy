import { deepResolve, NodeProps, Shape } from '@dinghy/base-components'
import { useAwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import {
  AwsIamInstanceProfile,
} from '../../services/iam/AwsIamInstanceProfile.tsx'
import { IamRole } from './IamRole.tsx'

export function IamInstanceRole(
  { children, ...props }: NodeProps,
) {
  function InstanceProfile() {
    const { iamRole } = useAwsIamRole()
    const InstanceProfileComponent =
      props._components?.instanceProfile as typeof AwsIamInstanceProfile ||
      AwsIamInstanceProfile
    return (
      <InstanceProfileComponent
        _title={props.name}
        role={iamRole.name}
        depends_on={() => [iamRole._terraformId]}
      />
    )
  }
  const roleName = props.role ||
    (deepResolve(props.name)).replace('-instance-profile', '-role')
  const InstanceRoleComponent =
    props._components?.instanceRole as typeof Shape ||
    Shape
  return (
    <InstanceRoleComponent {...props}>
      <IamRole
        name={roleName}
        assume_role_service='ec2.amazonaws.com'
      >
        <InstanceProfile />
        {children}
      </IamRole>
    </InstanceRoleComponent>
  )
}
