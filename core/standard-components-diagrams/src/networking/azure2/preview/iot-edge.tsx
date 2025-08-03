import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_EDGE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/IoT_Edge.svg;strokeColor=none;',
  _width: 68,
  _height: 67,
}

export function IotEdge(props: DiagramNodeProps) {
  return <Shape {...IOT_EDGE} {...props} />
}
