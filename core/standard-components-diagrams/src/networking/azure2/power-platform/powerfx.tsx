import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWERFX = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerFx.svg;',
  _width: 68,
  _height: 64.92,
}

export function Powerfx(props: DiagramNodeProps) {
  return <Shape {...POWERFX} {...props} />
}
