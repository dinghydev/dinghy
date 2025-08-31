import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACK_EDGE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_Stack_Edge.svg;strokeColor=none;',
  _width: 68,
  _height: 48,
}

export function StackEdge(props: DiagramNodeProps) {
  return (
    <Shape {...STACK_EDGE} {...props} _style={extendStyle(STACK_EDGE, props)} />
  )
}
