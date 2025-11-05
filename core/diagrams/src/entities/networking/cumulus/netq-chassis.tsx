import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETQ_CHASSIS = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/netq_chassis.svg;strokeColor=none;',
  },
  _width: 106,
  _height: 72,
}

export function NetqChassis(props: NodeProps) {
  return (
    <Shape
      {...NETQ_CHASSIS}
      {...props}
      _style={extendStyle(NETQ_CHASSIS, props)}
    />
  )
}
