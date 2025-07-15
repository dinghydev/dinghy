import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_NW = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.arrowNW;fillColor=#000000;aspect=fixed;',
  _width: 45.5,
  _height: 26,
}

export function ArrowNw(props: DiagramNodeProps) {
  return <Shape {...ARROW_NW} {...props} />
}
