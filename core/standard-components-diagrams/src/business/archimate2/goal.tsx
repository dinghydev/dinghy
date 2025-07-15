import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOAL = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=goal',
  _width: 100,
  _height: 75,
}

export function Goal(props: DiagramNodeProps) {
  return <Shape {...GOAL} {...props} />
}
