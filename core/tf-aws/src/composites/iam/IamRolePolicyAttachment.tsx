import { deepResolve, NodeProps } from '@dinghy/base-components'

import { useAwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import { AwsIamRolePolicyAttachment } from '../../services/iam/AwsIamRolePolicyAttachment.tsx'
export function IamRolePolicyAttachment(props: NodeProps) {
  const { iamRole } = useAwsIamRole()
  const RolePolicyAttachmentComponent = props._components
    ?.rolePolicyAttachment as typeof AwsIamRolePolicyAttachment ||
    AwsIamRolePolicyAttachment
  const _title = () => {
    return `${deepResolve(iamRole.name)} ${
      (deepResolve(props.policy_arn) as string)?.split('/')?.pop() ||
      'Attachment'
    }`
  }
  return (
    <RolePolicyAttachmentComponent
      _title={_title}
      role={iamRole.name}
      depends_on={() => [iamRole._terraformId]}
      {...props}
    />
  )
}
