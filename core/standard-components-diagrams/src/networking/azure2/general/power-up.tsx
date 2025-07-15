import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWER_UP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Power_Up.svg;',
  _width: 68,
  _height: 68,
}

export function PowerUp(props: DiagramNodeProps) {
  return <Shape {...POWER_UP} {...props} />
}
