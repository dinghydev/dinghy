import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWERBI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerBI.svg;',
  _width: 51,
  _height: 68,
}

export function Powerbi(props: DiagramNodeProps) {
  return <Shape {...POWERBI} {...props} />
}
