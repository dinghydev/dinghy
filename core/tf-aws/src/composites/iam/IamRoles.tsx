import { NodeProps, Shape } from '@dinghy/base-components'
import { getRenderOptions } from '@dinghy/base-components'
import { IamRole } from './IamRole.tsx'

function listRoles(
  props: any,
) {
  const renderOptions = getRenderOptions()
  const roles = props.roles || renderOptions.roles
  const result: any[] = []
  if (roles) {
    Object.entries(roles).forEach(([name, role]: [string, any]) => {
      result.push({
        name,
        ...(role || {}),
      })
    })
  } else {
    throw new Error('No IAM roles found')
  }
  return result
}

export function IamRoles(
  { children, ...props }: NodeProps,
) {
  const roles = listRoles(props)
  const RolesComponent = props._components?.roles as typeof Shape || Shape
  return (
    <RolesComponent
      _roles={roles}
      {...props}
    >
      {roles.map((role) => <IamRole key={role.name} role={role} />)}
      {children}
    </RolesComponent>
  )
}
