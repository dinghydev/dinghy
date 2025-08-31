import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINUX_ICON = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/cumulus_linux_icon.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function LinuxIcon(props: DiagramNodeProps) {
  return (
    <Shape {...LINUX_ICON} {...props} _style={extendStyle(LINUX_ICON, props)} />
  )
}
