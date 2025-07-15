import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STAKEHOLDER_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.role;',
  _width: 60,
  _height: 35,
}

export function Stakeholder2(props: DiagramNodeProps) {
  return <Shape {...STAKEHOLDER_2} {...props} />
}
