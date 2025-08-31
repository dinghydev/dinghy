import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_CUMULUS_LINUX = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/switch_cumulus_linux.svg;strokeColor=none;',
  _width: 96,
  _height: 24,
}

export function SwitchCumulusLinux(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_CUMULUS_LINUX}
      {...props}
      _style={extendStyle(SWITCH_CUMULUS_LINUX, props)}
    />
  )
}
