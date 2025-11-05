import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETQ_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/netq_server.svg;strokeColor=none;',
  },
  _width: 96,
  _height: 20,
}

export function NetqServer(props: NodeProps) {
  return (
    <Shape
      {...NETQ_SERVER}
      {...props}
      _style={extendStyle(NETQ_SERVER, props)}
    />
  )
}
