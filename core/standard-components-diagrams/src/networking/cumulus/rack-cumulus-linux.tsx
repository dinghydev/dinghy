import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RACK_CUMULUS_LINUX = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/rack_cumulus_linux.svg;',
  _width: 96,
  _height: 114,
}

export function RackCumulusLinux(props: DiagramNodeProps) {
  return <Shape {...RACK_CUMULUS_LINUX} {...props} />
}
