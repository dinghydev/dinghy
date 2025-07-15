import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINCIPLE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.principle;strokeWidth=2;',
  _width: 40,
  _height: 40,
}

export function Principle2(props: DiagramNodeProps) {
  return <Shape {...PRINCIPLE_2} {...props} />
}
