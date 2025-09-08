import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETQ_CHASSIS = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/netq_chassis.svg;strokeColor=none;',
  },
  _original_width: 106,
  _original_height: 72,
}

export function NetqChassis(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETQ_CHASSIS}
      {...props}
      _style={extendStyle(NETQ_CHASSIS, props)}
    />
  )
}
