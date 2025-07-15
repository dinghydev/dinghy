import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const START_2 = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;html=1;verticalAlign=bottom;endArrow=open;endSize=8;strokeColor=#ff0000;',
  _width: 1,
  _height: 90,
}

export function Start2(props: DiagramNodeProps) {
  return <Shape {...START_2} {...props} />
}
