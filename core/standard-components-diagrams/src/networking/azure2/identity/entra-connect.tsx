import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_CONNECT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Connect.svg;strokeColor=none;',
  _width: 68,
  _height: 64.24,
}

export function EntraConnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_CONNECT}
      {...props}
      _style={extendStyle(ENTRA_CONNECT, props)}
    />
  )
}
