import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EQUIPMENT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.equipment;',
  _width: 50,
  _height: 50,
}

export function Equipment2(props: DiagramNodeProps) {
  return <Shape {...EQUIPMENT_2} {...props} />
}
