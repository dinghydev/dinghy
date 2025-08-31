import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVE_DIRECTORY_CONNECT_HEALTH = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Active_Directory_Health_Monitoring.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
