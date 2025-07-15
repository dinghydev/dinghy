import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STAKEHOLDER = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=stake',
  _width: 100,
  _height: 75,
}

export function Stakeholder(props: DiagramNodeProps) {
  return <Shape {...STAKEHOLDER} {...props} />
}
