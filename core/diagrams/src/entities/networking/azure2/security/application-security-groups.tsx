import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_SECURITY_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Application_Security_Groups.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function ApplicationSecurityGroups(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_SECURITY_GROUPS}
      {...props}
      _style={extendStyle(APPLICATION_SECURITY_GROUPS, props)}
    />
  )
}
