import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY_CONNECT_HEALTH_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Active_Directory_Connect_Health2.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60.440000000000005,
}

export function ActiveDirectoryConnectHealth2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY_CONNECT_HEALTH_2}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY_CONNECT_HEALTH_2, props)}
    />
  )
}
