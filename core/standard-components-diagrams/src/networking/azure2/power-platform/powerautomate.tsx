import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWERAUTOMATE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerAutomate.svg;',
  _width: 68,
  _height: 53.839999999999996,
}

export function Powerautomate(props: DiagramNodeProps) {
  return <Shape {...POWERAUTOMATE} {...props} />
}
