import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DASHED_ARROWLESS_EDGE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dashedArrowlessEdge2;strokeColor=#2D6195;aspect=fixed;',
  _width: 31.6,
  _height: 18,
}

export function DashedArrowlessEdge(props: DiagramNodeProps) {
  return <Shape {...DASHED_ARROWLESS_EDGE} {...props} />
}
