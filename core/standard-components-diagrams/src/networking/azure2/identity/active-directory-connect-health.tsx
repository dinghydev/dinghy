import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY_CONNECT_HEALTH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Active_Directory_Connect_Health.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
}

export function ActiveDirectoryConnectHealth(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY_CONNECT_HEALTH}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY_CONNECT_HEALTH, props)}
    />
  )
}
