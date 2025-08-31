import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_CONNECT_HEALTH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Active_Directory_Connect_Health2.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60.440000000000005,
}

export function EntraConnectHealth(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_CONNECT_HEALTH}
      {...props}
      _style={extendStyle(ENTRA_CONNECT_HEALTH, props)}
    />
  )
}
