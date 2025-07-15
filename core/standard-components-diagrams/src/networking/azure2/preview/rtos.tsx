import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RTOS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/RTOS.svg;',
  _width: 68,
  _height: 68,
}

export function Rtos(props: DiagramNodeProps) {
  return <Shape {...RTOS} {...props} />
}
