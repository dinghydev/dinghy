import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHASSIS_CUMULUS_LINUX = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/chassis_cumulus_linux.svg;strokeColor=none;',
  },
  _width: 106,
  _height: 72,
}

export function ChassisCumulusLinux(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHASSIS_CUMULUS_LINUX}
      {...props}
      _style={extendStyle(CHASSIS_CUMULUS_LINUX, props)}
    />
  )
}
