import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVE_DIRECTORY_CONNECT_HEALTH = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Active_Directory_Connect_Health.svg;',
  _width: 69,
  _height: 64,
}

export function ActiveDirectoryConnectHealth(props: DiagramNodeProps) {
  return <Shape {...ACTIVE_DIRECTORY_CONNECT_HEALTH} {...props} />
}
