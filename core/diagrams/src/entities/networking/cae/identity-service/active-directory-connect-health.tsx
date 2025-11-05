import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY_CONNECT_HEALTH = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Active_Directory_Health_Monitoring.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ActiveDirectoryConnectHealth(props: NodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY_CONNECT_HEALTH}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY_CONNECT_HEALTH, props)}
    />
  )
}
