import { NodeProps } from '@dinghy/base-components'
import { AwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import { deepMerge, getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsIamRoleInputSchema } from '../../services/iam/AwsIamRole.tsx'

export const IamRoleSchema = AwsIamRoleInputSchema.extend({
  assume_role_service: z.union([z.string(), z.string().array()]).optional(),
})
export type IamRoleType = z.output<typeof IamRoleSchema>

function parseIamRole(
  props: any,
) {
  const renderOptions = getRenderOptions()
  const role = props.role || (renderOptions.iamRoles as any)?.[props.name] || {}
  deepMerge(role, props)
  if (role.assume_role_service && !role.assume_role_policy) {
    role.assume_role_policy = JSON.stringify({
      'Version': '2012-10-17',
      'Statement': [
        {
          'Effect': 'Allow',
          'Principal': {
            'Service': role.assume_role_service,
          },
          'Action': 'sts:AssumeRole',
        },
      ],
    })
  }
  return IamRoleSchema.partial().loose().parse(role)
}

export function IamRole(
  { children, ...props }: NodeProps,
) {
  const role = parseIamRole(props)
  const RoleComponent = props._components?.role as typeof AwsIamRole ||
    AwsIamRole
  return (
    <RoleComponent
      _role={role}
      _title={props.name}
      {...role}
    >
      {children}
    </RoleComponent>
  )
}
