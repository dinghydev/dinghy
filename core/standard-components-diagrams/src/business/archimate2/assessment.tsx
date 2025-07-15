import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSESSMENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=assess',
  _width: 100,
  _height: 75,
}

export function Assessment(props: DiagramNodeProps) {
  return <Shape {...ASSESSMENT} {...props} />
}
