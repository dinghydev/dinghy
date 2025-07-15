import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINUX_ICON = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/cumulus_linux_icon.svg;',
  _width: 96,
  _height: 96,
}

export function LinuxIcon(props: DiagramNodeProps) {
  return <Shape {...LINUX_ICON} {...props} />
}
