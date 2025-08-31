import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVE_DIRECTORY_CONNECT_HEALTH_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Active_Directory_Connect_Health2.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60.440000000000005,
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
