import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STACK_EDGE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Box_Edge.svg;',
  _width: 68,
  _height: 48.72,
}

export function StackEdge(props: DiagramNodeProps) {
  return <Shape {...STACK_EDGE} {...props} />
}
