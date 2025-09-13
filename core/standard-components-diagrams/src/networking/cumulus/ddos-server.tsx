import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DDOS_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/ddos_server.svg;strokeColor=none;',
  },
  _width: 96,
  _height: 20,
}

export function DdosServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DDOS_SERVER}
      {...props}
      _style={extendStyle(DDOS_SERVER, props)}
    />
  )
}
