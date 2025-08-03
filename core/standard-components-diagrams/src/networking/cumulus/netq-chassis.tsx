import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETQ_CHASSIS = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/netq_chassis.svg;strokeColor=none;',
  _width: 106,
  _height: 72,
}

export function NetqChassis(props: DiagramNodeProps) {
  return <Shape {...NETQ_CHASSIS} {...props} />
}
