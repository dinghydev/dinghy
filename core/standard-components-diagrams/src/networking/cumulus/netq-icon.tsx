import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETQ_ICON = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/cumulus_netq_icon.svg;',
  _width: 96,
  _height: 96,
}

export function NetqIcon(props: DiagramNodeProps) {
  return <Shape {...NETQ_ICON} {...props} />
}
