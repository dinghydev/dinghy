import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINCIPLE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=princ',
  _width: 100,
  _height: 75,
}

export function Principle(props: DiagramNodeProps) {
  return <Shape {...PRINCIPLE} {...props} />
}
